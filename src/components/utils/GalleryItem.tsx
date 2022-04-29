type Props = {
  idx: any,
  image: any
};

const GalleryItem = ({ idx, image }: Props) => {
  const newImg = require('../../assets/img/gallery/' + image);

  return (
    <div className={"max-w-[175px] max-h-[209px] lg:max-w-[295px] lg:max-h-[350px] " + ( idx % 2 === 1 ? "place-self-end" : "place-self-start")}><img src={newImg} alt="" /></div>
  )
}

export default GalleryItem;