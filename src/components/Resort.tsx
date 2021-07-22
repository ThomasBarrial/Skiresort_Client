import React from 'react'
import { Link } from 'react-router-dom'

interface IOneResort {
  resort: IResort
  key: number
}

function Resort({ resort, key }: IOneResort) {
  return (
    <div key={key} className="flex w-full mt-10">
      <div
        className="w-4/12 h-44 border-2 rounded-md border-darkBlue shadow-buttonShadow"
        style={{
          backgroundImage: `url(${resort.images})`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          backgroundPosition: `center`,
        }}
      ></div>
      <div className="w-6/12 ml-10">
        <p className="font-Anton text-darkBlue text-2xl">{resort.name}</p>
        <p className="font-Open text-sm mt-2 h-14 overflow-hidden ellipsis">{resort.Description}</p>
        <Link to={`/resort/${resort.Id}`}>
          <button className="bg-darkBlue text-sm mt-8 text-white h-10 w-32 rounded-md shadow-buttonShadow py-2">
            check more
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Resort
