import { routes } from "@/routes"
import Link from "next/link"
import React from "react"
import MovingBlob from "@/Components/MovingBlob/MovingBlob"
import ProgrammingIcon from "@/icons/ProgrammingIcon"

interface toDisplay {
  label: string
}

const itemsToDisplay: Array<toDisplay> = [
  { label: "Competitive Salary" },
  { label: "Flexibility" },
  { label: "Impact and Contribution" },
  { label: "Financial Freedom" },
  { label: "Job Satisfaction" },
  { label: "Global Reach" },
]

function index() {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center">
      <div className="w-full h-100 bg-white md:flex items-center justify-center">
        <div className="md:w-1/2 w-full text-black font-bold h-full">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div
              style={{ fontSize: "3.4rem" }}
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
        <div className="md:w-1/2 w-full h-full">
          <div>
            {itemsToDisplay.map((x) => (
              <MovingBlob
                label={x.label}
                icon={<ProgrammingIcon />}
                className=" mt-24 w-40  z-50"
                labelStyles={{ color: "black" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default index
