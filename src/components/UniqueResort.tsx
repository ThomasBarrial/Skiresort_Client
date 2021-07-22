import React from 'react'

interface IProps {
  resort: IResort
  key: number
}

function UniqueResort({ resort, key }: IProps): JSX.Element {
  return (
    <div key={key} className="flex border-b border-darkBlue items-end pb-2">
      <p className="font-Anton font-bold text-darkBlue w-full text-2xl mt-10">{resort.name}</p>
      <button className="bg-darkBlue focus:outline-none shadow-buttonShadow text-white font-bold rounded-md h-8 py-1 px-6 mr-10">
        Update
      </button>
      <button className="bg-red-400 focus:outline-none shadow-buttonShadow text-white font-bold rounded-md h-8 py-1 px-6 mr-5">
        Delete
      </button>
    </div>
  )
}

export default UniqueResort
