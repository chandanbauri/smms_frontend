import * as React from "react"
import _img1 from "../../../../assets/clothes/img1.png"
import _img2 from "../../../../assets/clothes/img2.png"
import _img3 from "../../../../assets/clothes/img3.png"
import _img4 from "../../../../assets/clothes/img4.png"
import _img5 from "../../../../assets/clothes/img5.png"
function ClothesClass() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex flex-wrap p-1 max-w-7xl w-full">
        <div className="p-1" style={{ flex: "50%", maxWidth: "50%" }}>
          <div
            className="relative group cursor-pointer"
            style={{ marginTop: " 8px", verticalAlign: "middle" }}
          >
            <img
              src={_img2}
              style={{
                width: "100%",
              }}
            />
            <div className="bg-black bg-opacity-20 absolute top-2 left-2 right-2 bottom-2 flex items-center justify-center">
              <h1 className="text-white text-7xl transform scale-0 group-hover:scale-100 transition ">
                Casuals
              </h1>
            </div>
          </div>
          <div
            className="relative group cursor-pointer"
            style={{ marginTop: " 8px", verticalAlign: "middle" }}
          >
            <img
              src={_img4}
              style={{
                width: "100%",
              }}
            />
            <div className="bg-black bg-opacity-20 absolute top-2 left-2 right-2 bottom-2 flex items-center justify-center">
              <h1 className="text-white text-7xl transform scale-0 group-hover:scale-100 transition ">
                Women’s Ethnic
              </h1>
            </div>
          </div>
          <div
            className="relative group cursor-pointer"
            style={{ marginTop: " 8px", verticalAlign: "middle" }}
          >
            <img
              src={_img3}
              style={{
                width: "100%",
              }}
            />
            <div className="bg-black bg-opacity-20 absolute top-2 left-2 right-2 bottom-2 flex items-center justify-center">
              <h1 className="text-white text-7xl transform scale-0 group-hover:scale-100 transition ">
                Men’s Ethnic
              </h1>
            </div>
          </div>
        </div>
        <div className="p-1" style={{ flex: "50%", maxWidth: "50%" }}>
          <div
            className="relative group cursor-pointer"
            style={{ marginTop: " 8px", verticalAlign: "middle" }}
          >
            <img
              src={_img1}
              style={{
                width: "100%",
              }}
            />
            <div className="bg-black bg-opacity-20 absolute top-2 left-2 right-2 bottom-2 flex items-center justify-center">
              <h1 className="text-white text-7xl transform scale-0 group-hover:scale-100 transition ">
                Formals
              </h1>
            </div>
          </div>
          <div
            className="relative group cursor-pointer"
            style={{ marginTop: " 8px", verticalAlign: "middle" }}
          >
            <img
              src={_img5}
              style={{
                width: "100%",
              }}
            />
            <div className="bg-black bg-opacity-20 absolute top-2 left-2 right-2 bottom-2 flex items-center justify-center">
              <h1 className="text-white text-7xl transform scale-0 group-hover:scale-100 transition ">
                Party Wear
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClothesClass
