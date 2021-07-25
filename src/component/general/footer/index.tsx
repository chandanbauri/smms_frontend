import * as React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="bg-gray-300 w-full flex items-center justify-center">
        <div className=" max-w-7xl w-full my-16">
          <div>
            <span className="font-medium text-gray-600">Company</span>
            <div className="flex flex-col mt-5 text-sm">
              <span className="my-2 text-gray-600">
                <Link to="#">About Us</Link>
              </span>
              <span className="my-2 text-gray-600">
                <Link to="#">Contact us</Link>
              </span>
              <span className="my-2 text-gray-600">
                <Link to="#">Privacy Policy</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-400 w-full flex items-center justify-center">
        <div className="max-w-7xl w-full py-5">
          <span className="text-white text-sm font-light">@copyright 2021</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
