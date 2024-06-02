import { useState, useContext, useEffect } from "react"
import { SystemInfoApiData } from "../contextApi/systemInfo/systemInfoContextApi"
import Login from "../container/login"
import SystemSetup from "../container/setup"

const Home = () => {
  const { processGetSystemInfo, systemInfo, startSession } =
    useContext(SystemInfoApiData)

  useEffect(() => {
    processGetSystemInfo()
  }, [])

  return (
    <>{startSession && systemInfo.length == 0 ? <SystemSetup /> : <Login />}</>
  )
}

export default Home
