import * as React from "react"
import { Link } from "react-router-dom"

function SmmsHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 shadow-md flex flex-col items-center justify-center box-border h-24 bg-white px-10 z-50">
      {/* <div id="menu-hidden" className="md:hidden flex"></div> */}
      {/* <div className="md:hidden flex flex-grow" /> */}
      <div className="w-full max-w-7xl flex flex-row items-center">
        <div id="logo" className="text-5xl text-gray-800">
          S.M.M.S
        </div>
        <div className="md:flex hidden flex-grow" />
        <div id="options" className="flex flex-row justify-between">
          <Link to="#">
            <div className="group items-center mx-4">
              <span className="text-gray-500">Home</span>
              <div
                className="w-full bg-black transform transition-all ease-linear scale-x-0 group-hover:scale-x-100 translate-y-1"
                style={{ height: 1 }}
              />
            </div>
          </Link>
          <Link to="#">
            <div className="group items-center mx-4">
              <span className="text-gray-500">Featured</span>
              <div
                className="w-full bg-black transform transition-all ease-linear scale-x-0 group-hover:scale-x-100 translate-y-1"
                style={{ height: 1 }}
              />
            </div>
          </Link>
          <Link to="#">
            <div className="group items-center mx-4">
              <span className="text-gray-500">About us</span>
              <div
                className="w-full bg-black transform transition-all ease-linear scale-x-0 group-hover:scale-x-100 translate-y-1"
                style={{ height: 1 }}
              />
            </div>
          </Link>
          <Link to="#">
            <div className="group items-center mx-4">
              <span className="text-gray-500">Privacy Policy</span>
              <div
                className="w-full bg-black transform transition-all ease-linear scale-x-0 group-hover:scale-x-100 translate-y-1"
                style={{ height: 1 }}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SmmsHeader
