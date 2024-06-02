import { Link } from "react-router-dom"

const SideCard = ({ title, link, icon }) => {
  return (
    <Link to={link}>
      <span className="card mb-4 flex py-8 items-center px-24 rounded-lg border cursor-pointer border-white bg-white hover:drop-shadow-md">
        <div className="flex items-center justify-center">
          <span className="text-gray-500">{icon}</span>
          <span className="text-xl font-bold text-gray-500">{title}</span>
        </div>
      </span>
    </Link>
  )
}

export default SideCard
