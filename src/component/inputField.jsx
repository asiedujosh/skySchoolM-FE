import React from "react"

const InputField = ({ field, value, change, errors }) => {
  const handleInputChange = (e) => {
    change(e.target.value, field.name)
  }

  return (
    <div className="my-2">
      <label className="text-sm text-gray-500">{field.label}</label>
      <input
        type={field.type}
        id={field.name}
        name={field.name}
        value={value[field.name]}
        onChange={handleInputChange}
        placeholder={field.placeholder}
        class="my-2 block h-10 w-full rounded-xl border border-gray-100 bg-gray-100 px-2 text-gray-500 focus:outline-none"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
      />
      {errors && errors.length !== 0 && (
        <p class="text-red-600 text-sm">*{errors[0].message}</p>
      )}
    </div>
  )
}

export default InputField
