import { useState, useContext, useEffect } from "react"
import { ADDSYSTEMINFO } from "../constant/schoolInfoConstant"
import { setUpErrors } from "../utils/checkErrors"
import InputField from "../component/inputField"
import SubmitBtn from "../component/submitButton"
import Loading from "../component/loading"
import UploadImage from "../component/uploadImage"
import { SystemInfoApiData } from "../contextApi/systemInfo/systemInfoContextApi"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const SystemSetup = () => {
  const { processAddSystemInfo, loader } = useContext(SystemInfoApiData)
  const [error, setError] = useState([])
  const [formData, setFormData] = useState({})

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = () => {
    setError([])

    let generalCheckData = {
      formData: formData,
      formNameArray: ADDSYSTEMINFO.fieldDetail,
      ignoreArray: ["schoolEmail"],
    }

    let userCheckData = {
      formData: formData,
      formNameArray: ADDSYSTEMINFO.fieldDetail1,
    }

    let errorsFound = setUpErrors(generalCheckData, userCheckData)
    if (errorsFound.length !== 0) {
      setError(errorsFound)
    } else {
      processAddSystemInfo(formData)
    }
  }

  return (
    <>
      <div className="checkPoint">
        <div className="w-90 m-6 md:mt-4 p-4 bg-white rounded shadow-lg">
          <div className="flex justify-center align-items mt-4">
            <h2 className="text-gray-600 text-xl font-semibold">
              {ADDSYSTEMINFO.title}
            </h2>
          </div>
          <hr className="border-t border-gray-300 w-1/2 mx-auto my-2" />

          <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row justify-center">
              {/* Card 1 */}
              <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md mt-2 md:mt-0 md:m-2">
                <div className="space-y-2">
                  {ADDSYSTEMINFO.fieldDetail.map((item) => {
                    return (
                      <InputField
                        field={item}
                        value={formData}
                        defaultVal={item.defaultValue}
                        readOnly={item.readOnly}
                        errors={error.filter(
                          (errorItem) => errorItem.error == item.name
                        )}
                        change={(data, field) => {
                          handleInputChange(data, field)
                        }}
                      />
                    )
                  })}
                </div>
                <div className="space-y-2">
                  {ADDSYSTEMINFO.fieldDetail1.map((item) => {
                    return (
                      <InputField
                        field={item}
                        value={formData}
                        defaultVal={item.defaultValue}
                        readOnly={item.readOnly}
                        errors={error.filter(
                          (errorItem) => errorItem.error == item.name
                        )}
                        change={(data, field) => {
                          handleInputChange(data, field)
                        }}
                      />
                    )
                  })}
                </div>
                <div className="space-y-2 my-2">
                  <label className="text-sm text-gray-500">School Logo</label>
                  <UploadImage
                    change={(data, field) => {
                      handleInputChange(data, field)
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-2 min-w-full flex items-center justify-center">
              <SubmitBtn text={"Submit"} submit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      {loader && <Loading />}

      {/* <ToastContainer /> */}
    </>
  )
}

export default SystemSetup
