import { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import { ethers } from "ethers";
import MerkleTree from "merkletreejs";
import keccak256 from "keccak256";
import "react-toastify/dist/ReactToastify.css";
import { Web3ModalContext } from "../contexts/Web3ModalProvider";
import Header from "../components/Header";
import ControlButton from "../components/utils/ControlButton";
import CounterButton from "../components/utils/CounterButton";
import richard01 from "../assets/img/mint/richard-01.png"
import richard02 from "../assets/img/mint/richard-02.png"
import { ChainId, ChainUrl } from "../constants/chains";
import PULSE_JSON from "../constants/PulseChainArtNFT.json";
import PULSE_WL from "../constants/PulseChainArtWL.json";

const Mint = () => {
  const { connect, disconnect, account, connected, signer } = useContext(Web3ModalContext);

  const [minted, setMinted] = useState(0);
  const [supply, setSupply] = useState(10000);
  const [wlPrice, setWLPrice] = useState(0.03);
  const [pPrice, setPPrice] = useState(0.05);
  const [count, setCount] = useState(1);
  const [isWLed, setWLed] = useState(false);
  const [isPaused, setPaused] = useState(false);

  const [pending, setPending] = useState(false);

  const abridgeAddress = (hex: string, length = 8) => {
    return `${hex.substring(0, length + 2)}…${hex.substring(
      hex.length - length
    )}`;
  }

  const handleConnect = async () => {
    setPending(true);
    await connect();
    setPending(false);
  }

  const handlePMint = async () => {
    if (!signer) return;
    setPending(true);
    let pulseNFT = new ethers.Contract(PULSE_JSON.address, JSON.stringify(PULSE_JSON.abi), signer);
    try {
      let tx = await (await pulseNFT.pMint(count, { value: ethers.utils.parseEther(Number(count * pPrice).toString()) })).wait();

      toast.success(`PulseChainArt #${Number(tx.logs[0].topics[3])} is minted.`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 4000,
        closeOnClick: true,
      });
    } catch (e: any) {
      if (e?.code === 4001) {
        toast.error(`User denied transaction`, {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 4000,
          closeOnClick: true,
        });
      }
    }
    setPending(false)
  }

  const handleWLMint = async () => {
    if (!signer) return;
    if (!account) return;
    setPending(true);
    let pulseNFT = new ethers.Contract(PULSE_JSON.address, JSON.stringify(PULSE_JSON.abi), signer);
    try {
      let wlHashedAddrs = PULSE_WL.map((addr) => keccak256(addr));
      let wlMerkleTree = new MerkleTree(wlHashedAddrs, keccak256, { sortPairs: true });
      let wlMerkleRoot = wlMerkleTree.getHexRoot();
      console.log(wlMerkleRoot)

      let hashedAddr = keccak256(account);
      let wlProof = wlMerkleTree.getHexProof(hashedAddr);

      let tx = await (await pulseNFT.wlMint(wlProof, { value: ethers.utils.parseEther(wlPrice.toString()) })).wait();

      toast.success(`PulseChainArt #${Number(tx.logs[0].topics[3])} is minted.`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 4000,
        closeOnClick: true,
      });
    } catch (e: any) {
      if (e?.code === 4001) {
        toast.error(`User denied transaction`, {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 4000,
          closeOnClick: true,
        });
      } else if (e?.code === -32603) {
        toast.error(e.message.toString().split("Error:")[1], {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 4000,
          closeOnClick: true,
        });
      }
    }
    setPending(false)
  }

  useEffect(() => {
    const getContractInfo = async () => {
      let EthereumChainId = process.env.REACT_APP_ENV === "development" ? ChainId.Rinkeby : ChainId.Ethereum

      let provider = new ethers.providers.JsonRpcProvider(
        ChainUrl[EthereumChainId]
      );

      let pulseNFT = new ethers.Contract(PULSE_JSON.address, JSON.stringify(PULSE_JSON.abi), provider);

      let _mintID = await pulseNFT.nextMintId();
      setMinted(Number(_mintID));

      let _pPrice = await pulseNFT.pMintPrice();
      setPPrice(Number(_pPrice / Math.pow(10, 18)));

      let _wlPrice = await pulseNFT.wlMintPrice();
      setWLPrice(Number(_wlPrice / Math.pow(10, 18)));

      let _totalSupply = await pulseNFT.totalSupply();
      setSupply(Number(_totalSupply));

      let _isPaused = await pulseNFT.isPaused();
      setPaused(_isPaused);

      if (account) {
        let _isClaimed = await pulseNFT.isClaimed(account);
        console.log(_isClaimed, '------')
        setWLed(!_isClaimed && PULSE_WL.find(item => item === account) !== undefined);
      }
    }

    getContractInfo();
  }, [pending, account])

  useEffect(() => {
    if (!isWLed) return;
    setCount(1);
  }, [isWLed])

  return (
    <>
      <Header mT="mt-[10px] lg:mt-[30px]" menu="hidden" />
      <div className="mt-[30px] md:mt-[60px]">
        <div className="flex justify-center font-[900] text-center text-[48px] leading-[80px] lg:text-[100px] md:leading-[130px] pt-[20px] tracking-[3px]">{minted.toString()}/{supply.toString()}</div>
        <div className={(account ? "opacity-1" : "opacity-50") + " transition-all duration-300 ease-in-out flex justify-center font-[400] text-center text-[16px] leading-[20.8px] text-[#0094FF] mt-[10px]"}>
          {account ? abridgeAddress(account) : "Please Connect your Wallet"}
        </div>
        <div className="flex justify-center font-[400] text-center text-[40px] leading-[52px] lg:text-[50px] md:leading-[65px] pt-[20px] tracking-[3px]">{(isWLed ? wlPrice : pPrice * count).toFixed(2) + " ETH"}</div>
        <div className="flex justify-center font-[400] text-center text-[16px] leading-[21px] lg:text-[14px] md:leading-[18.2px] pt-[20px] tracking-[1px]">(Excluding gas fees)</div>
      </div>
      <div className="flex justify-center items-center z-[100] font-[900] text-[40px] mt-[52px] space-x-[20px] md:space-x-[50px]">
        <CounterButton clickHandler={() => setCount(count > 1 ? count - 1 : count)} buttonCaption="-" disabled={isWLed || !connected} />
        <div className="text-center w-[100px]">{count}</div>
        <CounterButton clickHandler={() => setCount(count + 1)} buttonCaption="+" disabled={isWLed || !connected} />
      </div>
      <div className={(connected ? "hidden" : "flex").concat(" justify-center mt-[70px]")}>
        <ControlButton key="Connect Wallet" clickHandler={handleConnect} buttonCaption={pending ? "Pending" : "Connect"} />
      </div>
      <div className={(connected && isPaused ? "flex" : "hidden").concat(" justify-center mt-[70px]")}>
        <ControlButton key="Mint paused" clickHandler={null} buttonCaption={"Mint is Paused"} disabled={isPaused} />
      </div>
      <div className={(connected && !isPaused && isWLed ? "flex" : "hidden").concat(" justify-center mt-[70px]")}>
        <ControlButton key="WL Mint" clickHandler={handleWLMint} buttonCaption={pending ? "Pending" : "WhiteList Mint"} disabled={pending} />
      </div>
      <div className={(connected && !isPaused && !isWLed ? "flex" : "hidden").concat(" justify-center mt-[70px]")}>
        <ControlButton key="Public Mint" clickHandler={handlePMint} buttonCaption={pending ? "Pending" : "Mint"} disabled={pending} />
      </div>
      <div className={(connected ? "flex" : "hidden").concat(" justify-center mt-[20px]")}>
        <div className="transition-all duration-300 ease-in-out flex justify-center cursor-pointer font-[700] text-center text-[16px] leading-[20.8px] text-[#0094FF] opacity-80 hover:opacity-100 active:opacity-75" onClick={disconnect}>Disconnect</div>
      </div>
      <div className="mt-[20px] mb-[40px] md:mt-[30px] grid justify-center">
        <div className="flex font-[200] max-w-[360px] md:max-w-[450px] text-center text-[#FAFAFA] md:[#6D6D6D] lg:text-[#6D6D6D] text-[10px] leading-[13px] md:text-[12px] md:leading-[16px] pt-[20px] tracking-[0px]">
          Please make sure you connected to the right network (Ethereum Mainnet) and the correct address. Please note: Once you make the ourchase, you cannot undo this action.
        </div>
        <div className="flex font-[200] max-w-[360px] md:max-w-[450px] text-center text-[#FAFAFA] md:[#6D6D6D] lg:text-[#6D6D6D] text-[10px] leading-[13px] md:text-[12px] md:leading-[16px] pt-[20px] tracking-[0px]">
          We have set the gas limit to 285000 for the contract to successfully mint your NFT. We recommend that you don’t lower the gas limit.
        </div>
      </div>
      <div className="flex place-content-between items-end w-[calc(100vw)] h-[calc(100vh)] fixed z-[-100] top-0 bg-[url('./assets/img/mint/mintBG.png')] no-repeat bg-right bg-cover md:bg-cover lg:bg-cover">
        <div className="fixed left-[-160px] md:left-[250px] lg:left-[250px] min-w-[358px] min-h-[435px]"><img src={richard01} alt="" /></div>
        <div className="fixed right-[-160px] md:right-[250px] lg:right-[250px] min-w-[358px] min-h-[435px]"><img src={richard02} alt="" /></div>
      </div>
      <div className="flex md:hidden lg:hidden fixed z-[-10] w-[calc(100vw)] h-[146px] bottom-0 bg-[url('./assets/img/mint/bottom.png')]"></div>
    </>
  )
};

export default Mint;