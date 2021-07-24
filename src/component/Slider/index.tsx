import * as React from "react"
import _slide1 from "../../assets/header/slide1.png"
function ImageCarousel() {
  return (
    <div className="w-full flex justify-center relative">
      <div className="w-full relative max-w-7xl">
        <img src={_slide1} className="w-full" alt="image_1" />
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
