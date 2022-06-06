import GALLERY from "../constants/gallery.json"
import GalleryItem from "./utils/GalleryItem";

const Gallery = () => {
  let i = 0;
  return (
    <div className="justify-center mt-[-100px] lg:mt-[-60px]" id="gallery">
      <div className="flex justify-center font-['Trouble_Font'] text-[74px] lg:text-[100px] tracking-[5px] leading-[120px]">Gallery</div>
      <div className="grid grid-cols-2 lg:flex lg:justify-center mt-[5px] lg:mt-[50px] gap-[10px] lg:gap-[20px]">
        {
          GALLERY && GALLERY.length > 0 && GALLERY.map((item) =>
            <GalleryItem key={i} idx={i = i + 1} image={item} />
          )
        }
      </div>
    </div>
  )
}

export default Gallery;