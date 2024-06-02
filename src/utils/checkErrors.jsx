export const checkErrors = (formData, formNameArray, ignoreArray) => {
  let errors = []
  //Check if all filled has been inputed except email
  formNameArray.map((item) => {
    if (!formData[item.name]) {
      if (!item.name.includes(ignoreArray)) {
        errors.push({
          error: item.name,
          message: `${item.label} is empty`,
        })
      }
    }
  })

  return errors
}

export const checkPassword = (formData) => {
  let errors = []
  if (formData.password !== formData.confirmPassword) {
    errors.push({
      error: "confirmPassword",
      message: `Passwords does not match`,
    })
  }

  return errors
}

export const setUpErrors = (generalCheckData, userCheckData) => {
  let errors = []
  let newCheckErrors = checkErrors(
    generalCheckData.formData,
    generalCheckData.formNameArray,
    generalCheckData.ignoreArray
  )
  let newCheckUserErrors = checkErrors(
    userCheckData.formData,
    userCheckData.formNameArray
  )
  let newCheckPassword = checkPassword(generalCheckData.formData)

  errors.push(...newCheckErrors, ...newCheckUserErrors, ...newCheckPassword)

  return errors
}
