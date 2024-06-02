import axios from "../../utils/axios.config"
import { LISTONPAGES, SUCCESS_STATUS } from "../../constant/constant"

export const addSystemInfo = async (data) => {
  try {
    let responseOnAddSystemInfo = await axios.post("/api/storeSystemInfo", data)
    if (responseOnAddSystemInfo.status === SUCCESS_STATUS) {
      return responseOnAddSystemInfo.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const getSystemInfo = async () => {
  try {
    let responseOnGetSystemInfo = await axios.get(`/api/getSystemInfo`)
    if (responseOnGetSystemInfo.status === SUCCESS_STATUS) {
      return responseOnGetSystemInfo.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
    return false
  }
}

export const editSystemInfo = async (data) => {
  try {
    let responseOnEditSystemInfo = await axios.put(
      `/api/systemInfoUpdate/${data.id}`,
      data
    )
    if (responseOnEditSystemInfo.status === SUCCESS_STATUS) {
      return responseOnEditSystemInfo.data
    } else {
      return false
    }
  } catch (err) {
    console.log(err)
  }
}
