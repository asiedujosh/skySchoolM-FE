import React, { useState, useContext } from "react"
import {
  schoolLogoImage,
  eclipseWhiteImage,
  eclipseBlueImage,
  weirdBlueImage,
} from "../constant/imageConstant"
import { SystemInfoApiData } from "../contextApi/systemInfo/systemInfoContextApi"
import InputField from "../component/inputField"
import { LOGINSYSTEM } from "../constant/loginConstant"
import { WELCOMEMESSAGE } from "../constant/welcomeMessage"
import SubmitBtn from "../component/submitButton"
import Loading from "../component/loading"

const Login = () => {
  const { systemInfo } = useContext(SystemInfoApiData)
  const [formData, setFormData] = useState({})

  const handleInputChange = (data, field) => {
    setFormData({
      ...formData,
      [field]: data,
    })
  }

  const handleSubmit = () => {
    console.log(formData)
  }

  return (
    <>
      <img
        src={eclipseWhiteImage}
        className="z-1 absolute left-14 top-14 w-24 opacity-30"
      />
      <img
        src={weirdBlueImage}
        className="z-1 w-30 absolute right-14 top-14 opacity-5"
      />
      <img
        src={eclipseBlueImage}
        className="z-1 w-30 absolute left-40 bottom-20 opacity-10"
      />
      <img
        src={eclipseWhiteImage}
        className="z-1 absolute left-50 md:left-96 bottom-80 w-40 animate-ping opacity-50 delay-100"
      />
      <main className="container mx-auto md:flex items-center justify-center">
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
          <div className="z-20 mt-10">
            <span className="block text-4xl font-bold text-gray-500">
              {systemInfo[0]?.schoolName || WELCOMEMESSAGE.head1}
            </span>
            <span className="block text-6xl font-bold text-blue-500">
              {WELCOMEMESSAGE.head2}
            </span>
            <img src={schoolLogoImage} alt="" className="w-26" />
          </div>
        </div>

        <div className="flex justify-center items-center my-2 mt-10 md:hidden">
          <div className="z-20">
            <div className="w-10 border rounded-2xl border-gray-100 bg-blue-200 h-10 flex justify-center items-center  ml-36">
              <img src={schoolLogoImage} alt="" className="w-26" />
            </div>
            <div className="z-20 h-24 w-80 justify-center py-2 rounded-2xl border border-gray-100 bg-blue-200 mt-2">
              <label className=" text-gray-500 flex items-center justify-center">
                {WELCOMEMESSAGE.head1}
              </label>
              <label
                for=""
                class="font-bold text-gray-700 flex items-center justify-center text-lg"
              >
                {systemInfo[0]?.schoolName || WELCOMEMESSAGE.head1}
              </label>
              <label className="font-bold text-gray-700 flex items-center justify-center text-lg"></label>
              <label className="text-gray-500 flex items-center justify-center">
                {WELCOMEMESSAGE.head2}
              </label>
            </div>
          </div>
        </div>

        <div className="flex md:h-screen flex-1 md:items-center justify-center">
          <form className="z-20 flex py-6 w-80 justify-center rounded-2xl border border-gray-100 bg-white">
            <div class="w-100">
              <div class="my-5">
                <h4 class="font-bold text-gray-500">{LOGINSYSTEM.title}</h4>

                {LOGINSYSTEM.fieldDetail.map((item) => (
                  <InputField
                    field={item}
                    value={formData}
                    change={(data, field) => {
                      handleInputChange(data, field)
                    }}
                  />
                ))}

                <span class="my-2 text-blue-500">Forgot Password?</span>

                <div class="my-2">
                  <SubmitBtn text={LOGINSYSTEM.btnText} submit={handleSubmit} />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* <Loading /> */}
      </main>
    </>
  )
}

export default Login
