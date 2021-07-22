import React, { Dispatch, SetStateAction } from 'react'

interface IQuestion {
  setQuestion: Dispatch<SetStateAction<number>>
  setResponse1: Dispatch<SetStateAction<string>>
}

function Ques1({ setQuestion, setResponse1 }: IQuestion) {
  const handleClick1 = () => {
    setQuestion(2)
    setResponse1('Alpes')
  }

  const handleClick2 = () => {
    setQuestion(2)
    setResponse1('Pyrénées')
  }

  return (
    <div className="w-full font-bold mt-10 text-darkBlue">
      <p className="text-2xl">1. Choose a massif</p>
      <div className="flex items-start mt-5 text-white">
        <button
          onClick={handleClick1}
          className="focus:outline-none bg-darkBlue mr-5 w-44 rounded-md shadow-buttonShadow py-2"
        >
          Alpes
        </button>
        <button
          onClick={handleClick2}
          className="focus:outline-none bg-darkBlue ml-5 w-44 rounded-md shadow-buttonShadow py-2"
        >
          Pyrénées
        </button>
      </div>
    </div>
  )
}

export default Ques1
