import * as React from "react"
import { RouteComponentProps } from "react-router-dom"
import ClothesClass from "../../component/home/class/clothes"
import ImageCarousel from "../../component/Slider"

export default function Home(props: RouteComponentProps) {
  const TextElement = () => (
    <div className="w-full py-8 flex flex-col items-center text-center my-10">
      <h1 id="title" className=" text-6xl text-gray-800">
        Lorem Ipsum
      </h1>
      <p className="mt-5 text-gray-600 text-xl">
        It is a long established fact that a reader will be distracted by the
        readable
      </p>
      <p className="text-gray-600 text-xl">
        content of a page when looking at its layout.
      </p>
    </div>
  )
  return (
    <div className="flex flex-col">
      <ImageCarousel />
      <TextElement />
      <ClothesClass />
      <TextElement />
    </div>
  )
}
