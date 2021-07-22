import React from 'react'
import { FieldValue, FieldValues, UseFormRegister } from 'react-hook-form'

interface IProps {
  label: string
  register: UseFormRegister<FieldValues>
  name: string
}

function TextInput({ label, register, name }: IProps) {
  return (
    <div>
      <label className="flex text-darkBlue font-Open text-xl flex-col mt-4 font-bold">
        {label}
        <input
          type="text"
          {...register(name)}
          className="focus:outline-none text-white mt-1 bg-darkBlue bg-opacity-50 dark:bg-input shadow-buttonShadow  rounded-sm py-1 px-2 sm:h-10 sm:rounded-md"
        />
      </label>
    </div>
  )
}

export default TextInput
