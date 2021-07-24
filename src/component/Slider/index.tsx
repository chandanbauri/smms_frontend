import * as React from "react"
import _slide1 from "../../assets/header/slide1.png"
import _slide2 from "../../assets/header/slide2.jpg"
function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = React.useState<string>(_slide1)
  return (
    <div className="w-full flex justify-center relative">
      <div className="w-full relative max-w-7xl">
        <img src={_slide1} className="w-full" />
      </div>
      <div
        id="left_Button"
        className=" bg-white p-5 bg-opacity-25 absolute top-0 left-0 bottom-0 w-40 items-center justify-center flex"
      >
        Left
      </div>
      <div
        id="right_Button"
        className=" bg-white p-5 bg-opacity-25 absolute top-0 right-0 bottom-0 w-40 items-center justify-center flex"
      >
        Right
      </div>
    </div>
  )
}

export default ImageCarousel
