import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
interface IProps {
  label: string
  register: UseFormRegister<FieldValues>
  name: string
}

function selectInput({ label, register, name }: IProps): JSX.Element {
  return (
    <div>
      <label className="flex text-darkBlue font-Open text-xl flex-col mt-5 font-bold">
        {label}
        <select
          {...register(name)}
          className="focus:outline-none h-40 text-white mt-1 bg-darkBlue bg-opacity-50 dark:bg-input shadow-buttonShadow  rounded-md py-1 px-2"
        >
          <option value={1}>Alpes</option>
          <option value={2}>Pyrénnées</option>
        </select>
      </label>
    </div>
  )
}

export default selectInput
