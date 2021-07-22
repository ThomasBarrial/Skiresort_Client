import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface IProps {
  register: UseFormRegister<FieldValues>
  name: string
}

function SearchBar({ register, name }: IProps) {
  return (
    <div>
      {' '}
      <h2 className="font-Anton mt-14 text-darkBlue text-xl font-bold">Search for a french ski resort</h2>
      <input
        type="text"
        placeholder={'Rechercher'}
        className="focus:outline-none border-2 mt-2 rounded-md p-2 w-96 border-darkBlue "
        {...register(name)}
      />
    </div>
  )
}

export default SearchBar
