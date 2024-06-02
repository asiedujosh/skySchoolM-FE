import { adminPanelConstant } from "../constant/adminPanelConstant"
import { trophyImage } from "../constant/imageConstant"
import { sideCardList } from "../constant/sideCardConstant"
import Card from "../component/card"
import SideCard from "../component/sideCard"
import AdminChart from "../component/adminCharts"
import { Link } from "react-router-dom"

const AdminPanel = () => {
  return (
    <>
      <div className="mt-6 w-full flex space-x-6">
        {adminPanelConstant.rowFieldOne.map((item) => (
          <Card
            icon={item.icon}
            number={10}
            link={item.link}
            label={item.label}
            plus={adminPanelConstant.addIcon}
          />
        ))}
      </div>
      <div className="mt-6 w-full flex space-x-6">
        <div className="bg-white border-white rounded-md p-4">
          <AdminChart />
        </div>

        <div className="w-full">
          <Link to="/top-student-class">
            <div class="card h-full cursor-pointer overflow-hidden rounded-xl border border-blue-100 bg-blue-100 hover:bg-blue-200 hover:drop-shadow-lg">
              <div class="flex items-center justify-center">
                <img src={trophyImage} alt="" class="my-4 h-36 w-36" />
              </div>
              <div class="h-1/2 flex w-full items-center justify-center bg-blue-900">
                <span class="text-2xl font-bold text-white">Top Students</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="w-full">
          {sideCardList.map((item) => (
            <SideCard title={item.title} link={item.link} icon={item.icon} />
          ))}
        </div>
      </div>
    </>
  )
}

export default AdminPanel
