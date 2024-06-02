import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGraduationCap,
  faPersonChalkboard,
  faUsers,
  faPlus,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons"

let iconLargeSize = "w-10 h-10"
let iconSmallSize = "w-6 h-6 m-1"

export const adminPanelConstant = {
  addIcon: <FontAwesomeIcon icon={faPlus} className={iconSmallSize} />,
  rowFieldOne: [
    {
      icon: (
        <FontAwesomeIcon icon={faGraduationCap} className={iconLargeSize} />
      ),
      link: "/create-student",
      label: "Students",
    },
    {
      icon: (
        <FontAwesomeIcon icon={faPersonChalkboard} className={iconLargeSize} />
      ),
      link: "/create-staff",
      label: "Teaching Staff",
    },
    {
      icon: <FontAwesomeIcon icon={faUsers} className={iconLargeSize} />,
      link: "/create-staff",
      label: "Non-Teaching Staff",
    },
    {
      icon: <FontAwesomeIcon icon={faMoneyBill} className={iconLargeSize} />,
      link: "/fee-records",
      label: "Fee Paid",
    },
  ],
}
