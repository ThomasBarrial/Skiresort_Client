import React, { Dispatch, SetStateAction } from 'react'

interface IQuestion {
  setQuestion: Dispatch<SetStateAction<number>>
  setReponse2: Dispatch<SetStateAction<string>>
}

function Ques2({ setQuestion, setReponse2 }: IQuestion) {
  const handleClick1 = () => {
    setQuestion(3)
    setReponse2('Big')
  }

  const handleClick3 = () => {
    setQuestion(3)
    setReponse2('Small')
  }

  return (
    <div className="w-full font-bold mt-10 text-darkBlue">
      <p className="text-2xl">3. What kind of scope to you like</p>
      <div className="flex items-start mt-5 text-white">
        <button
          onClick={handleClick1}
          className="focus:outline-none bg-darkBlue  w-44 rounded-md shadow-buttonShadow py-2"
        >
          Big
        </button>
        <button
          onClick={handleClick3}
          className="focus:outline-none bg-darkBlue ml-5 w-44 rounded-md shadow-buttonShadow py-2"
        >
          Small
        </button>
      </div>
    </div>
  )
}

export default Ques2
