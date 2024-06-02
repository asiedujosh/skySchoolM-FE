import React from "react"
import { Link } from "react-router-dom"

const Card = ({ icon, number, link, label, plus }) => {
  return (
    <div className="card relative w-full py-6 rounded-xl border border-white bg-white">
      <div className="flex h-full w-full items-center space-x-4">
        <div className="col-span-1 flex h-20 items-center ml-6 px-6 justify-center border-r-2 border-blue-100 text-gray-500">
          {icon}
        </div>
        <div className="col-span-2 flex justify-center">
          <div className="">
            <h3 className="text-3xl font-bold text-gray-500">{number}</h3>
            <label className="text-gray-500">{label}</label>
          </div>
        </div>
      </div>
      <Link to={link}>
        <span className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer rounded-full border border-blue-100 bg-blue-100 hover:bg-blue-200 hover:drop-shadow-sm">
          {plus}
        </span>
      </Link>
    </div>
  )
}

export default Card
