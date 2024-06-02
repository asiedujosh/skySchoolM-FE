import React, { useState } from "react"
import { adminSidebarLink } from "../constant/sidebarConstant"
import { Link } from "react-router-dom"

const Sidebar = () => {
  const [active, setActive] = useState(1)
  return (
    <div class="col-span-1 bg-white">
      <ul>
        {adminSidebarLink.map((item) => (
          <Link
            to={item.link}
            className={`${
              item.id == active
                ? "bg-blue-100 hover:bg-blue-200"
                : "border-gray-200 hover:bg-gray-100"
            } flex h-20 cursor-pointer items-center  px-20 shadow-sm `}
          >
            <span className="mr-2 text-gray-500">{item.icon}</span>
            <span className="text-gray-500">{item.title}</span>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
