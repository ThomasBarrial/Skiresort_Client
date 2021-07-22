import React, { Dispatch, SetStateAction } from 'react'

interface IQuestion {
  setQuestion: Dispatch<SetStateAction<number>>
  setReponse4: Dispatch<SetStateAction<string>>
}

function Ques4({ setQuestion, setReponse4 }: IQuestion) {
  const handleClick1 = () => {
    setQuestion(4)
    setReponse4('Low altitude')
  }

  const handleClick3 = () => {
    setQuestion(4)
    setReponse4('High altitude')
  }
  return (
    <div className="w-full font-bold mt-10 text-darkBlue">
      <p className="text-2xl">4. Choose a altitude</p>
      <div className="flex items-start mt-5 text-white">
        <button
          onClick={handleClick1}
          className="focus:outline-none bg-darkBlue  w-44 rounded-md shadow-buttonShadow py-2"
        >
          Low altitude
        </button>
        <button
          onClick={handleClick3}
          className="focus:outline-none bg-darkBlue ml-5 w-44 rounded-md shadow-buttonShadow py-2"
        >
          Hight altitude
        </button>
      </div>
    </div>
  )
}

export default Ques4
