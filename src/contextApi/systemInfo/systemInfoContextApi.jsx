import React, { createContext, useState } from "react"
import { notify } from "../../utils/responseUtils"
import { BAD_REQUEST_STATUS, SUCCESS_STATUS } from "../../constant/constant"

import { getSystemInfo, addSystemInfo, editSystemInfo } from "./systemInfo"

export const SystemInfoApiData = createContext()

const SystemInfoApiDataProvider = (props) => {
  const [startSession, setStartSession] = useState(false)
  const [systemInfo, setSystemInfo] = useState([])
  const [loader, setLoader] = useState(false)

  const processGetSystemInfo = async () => {
    let response = await getSystemInfo()
    if (response) {
      setSystemInfo(response.data.data)
      setStartSession((prev) => !prev)
    }
  }

  const processAddSystemInfo = async (data) => {
    setLoader((prev) => !prev)
    let response = await addSystemInfo(data)
    if (response) {
      processGetSystemInfo()
    }
    setLoader((prev) => !prev)
  }

  const processUpdateSystemInfo = async (data) => {
    let response = await editSystemInfo(data)
    if (response) {
      processGetSystemInfo()
      notify(SUCCESS_STATUS)
    }
  }

  //   const processDeleteExams = async (data) => {
  //     // console.log(data)
  //     let response = await deleteExams(data)
  //     if (response) {
  //       processGetAllExams()
  //       notify(SUCCESS_STATUS)
  //     }
  //   }

  return (
    <SystemInfoApiData.Provider
      value={{
        startSession,
        systemInfo,
        processGetSystemInfo,
        processAddSystemInfo,
        processUpdateSystemInfo,
        loader,
      }}
    >
      {props.children}
    </SystemInfoApiData.Provider>
  )
}

export default SystemInfoApiDataProvider
