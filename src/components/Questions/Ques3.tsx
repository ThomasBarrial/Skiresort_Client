import React, { Dispatch, SetStateAction } from 'react'

interface IQuestion {
  setReponse3: Dispatch<SetStateAction<string>>
  setIsForm: Dispatch<SetStateAction<boolean>>
}

function Ques3({ setReponse3, setIsForm }: IQuestion) {
  const handleClick1 = () => {
    setIsForm(true)
    setReponse3('Family')
  }

  const handleClick2 = () => {
    setIsForm(true)
    setReponse3('Athletic')
  }

  const handleClick3 = () => {
    setIsForm(true)
    setReponse3('Festiv')
  }

  return (
    <div className="w-full font-bold mt-10 text-darkBlue">
      <p className="text-2xl">2. what kind of resort are you looking for</p>
      <div className="flex items-start mt-5 text-white">
        <button
          onClick={handleClick1}
          className="focus:outline-none bg-darkBlue  w-44 rounded-md shadow-buttonShadow py-2"
        >
          Family
        </button>
        <button
          onClick={handleClick2}
          className="focus:outline-none bg-darkBlue ml-5 w-44 rounded-md shadow-buttonShadow py-2"
        >
          Athletic
        </button>
        <button
          onClick={handleClick3}
          className="focus:outline-none bg-darkBlue ml-5 w-44 rounded-md shadow-buttonShadow py-2"
        >
          Festiv
        </button>
      </div>
    </div>
  )
}

export default Ques3
