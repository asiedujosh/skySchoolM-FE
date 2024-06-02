import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHouse,
  faGraduationCap,
  faPersonChalkboard,
  faUsers,
  faSchool,
  faLandmark,
  faCalculator,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons"


// import { library, IconProp } from "@fortawesome/fontawesome-svg-core"

let iconSizes = "w-6 h-6 mr-2"

export const adminSidebarLink = [
  {
    id: 1,
    title: "DASHBOARD",
    link: "/dashboard",
    icon: <FontAwesomeIcon icon={faHouse} className={iconSizes} />,
  },
  {
    id: 2,
    title: "STUDENTS",
    link: "/students",
    icon: <FontAwesomeIcon icon={faGraduationCap} className={iconSizes} />,
  },
  {
    id: 3,
    title: "TEACHERS",
    link: "/teachers",
    icon: <FontAwesomeIcon icon={faPersonChalkboard} className={iconSizes} />,
  },
  {
    id: 4,
    title: "PARENTS",
    link: "/parents",
    icon: <FontAwesomeIcon icon={faUsers} className={iconSizes} />,
  },
  {
    id: 5,
    title: "CLASS",
    link: "/classes",
    icon: <FontAwesomeIcon icon={faSchool} className={iconSizes} />,
  },
  {
    id: 6,
    title: "FACILITIES",
    link: "/facilities",
    icon: <FontAwesomeIcon icon={faLandmark} className={iconSizes} />,
  },
  {
    id: 7,
    title: "COURSES",
    link: "/courses",
    icon: <FontAwesomeIcon icon={faCalculator} className={iconSizes} />,
  },
  {
    id: 8,
    title: "FEES",
    link: "/fees",
    icon: <FontAwesomeIcon icon={faMoneyBill} className={iconSizes} />,
  },
]
