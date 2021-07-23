import * as React from "react"
import { Link } from "react-router-dom"

function SmmsHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 shadow-xl flex flex-row box-border py-10 bg-white px-10 z-50">
      {/* <div id="menu-hidden" className="md:hidden flex"></div> */}
      {/* <div className="md:hidden flex flex-grow" /> */}
      <div id="logo">SMMS</div>
      <div className="md:flex hidden flex-grow" />
      <div id="options" className="flex flex-row justify-between">
        <Link to="#">
          <div className="group">
            <span className="text-gray-500">Home</span>
            <div
              className="w-full bg-black transform transition-all ease-linear scale-x-0 group-hover:scale-x-100 mt-3"
              style={{ height: 2 }}
            />
          </div>
        </Link>
        <Link to="#">
          <span className="ml-4 text-gray-500">Featured</span>
        </Link>
        <Link to="#">
          <span className="ml-4 text-gray-500">About us</span>
        </Link>
        <Link to="#">
          <span className="ml-4 text-gray-500">Privacy Policy</span>
        </Link>
      </div>
    </div>
  )
}

export default SmmsHeader
