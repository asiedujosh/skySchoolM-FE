import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTable,
  faBarsProgress,
  faLandmark,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons"

let iconSizes = "w-4 h-4 mr-2"

export const sideCardList = [
  {
    id: 1,
    link: "/timetable",
    icon: <FontAwesomeIcon icon={faTable} className={iconSizes} />,
    title: "Time Table",
  },
  {
    id: 2,
    link: "/class-courses",
    icon: <FontAwesomeIcon icon={faCalculator} className={iconSizes} />,
    title: "Courses",
  },
  {
    id: 3,
    link: "/admin-facility",
    icon: <FontAwesomeIcon icon={faLandmark} className={iconSizes} />,
    title: "Facility",
  },
  {
    id: 4,
    link: "/manage-system",
    icon: <FontAwesomeIcon icon={faBarsProgress} className={iconSizes} />,
    title: "Manage",
  },
]
