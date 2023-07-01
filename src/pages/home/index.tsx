import { routes } from "@/routes"
import Link from "next/link"
import React from "react"
import MovingBlob from "@/Components/MovingBlob/MovingBlob"
import ProgrammingIcon from "@/icons/ProgrammingIcon"

function index() {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center">
      <div className="w-full h-full bg-white flex items-center justify-center">
        <div className="w-1/2 text-black font-bold h-full">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div
              style={{ fontSize: "3.6rem" }}
              className="w-full h-full flex items-center justify-center"
            >
              <div className="flex flex-col justify-center items-center">
                <span>Switch to Programming and Unlock a</span>
                <span style={{ color: "#0466C8" }}>
                  World of Opportunities!
                </span>
              </div>
            </div>
            <div
              className="cursor-pointer flex justify-start"
              style={{
                backgroundColor: "#023E7D",
                borderRadius: "3px",
                padding: "8px",
                color: "white",
                marginBottom: "20px",
              }}
            >
              <Link href={routes.OFFER}>Check our offer!</Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full">
          <div>
            <MovingBlob
              label="xyz"
              icon={<ProgrammingIcon />}
              className=" mt-24 w-64 bg-slate-600"
              labelStyles={{ color: "black" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default index
