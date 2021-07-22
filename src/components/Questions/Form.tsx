import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Ques1 from './Ques1'
import Ques2 from './Ques2'
import Ques3 from './Ques3'
// import Ques4 from './Ques4'

interface IForm {
  question: number
  setQuestion: Dispatch<SetStateAction<number>>
  data: IResort[] | undefined
  setDataResort: Dispatch<SetStateAction<IResort[]>>
}

function Form({ question, setQuestion, data, setDataResort }: IForm) {
  const [reponse1, setReponse1] = useState<string>('')
  const [reponse2, setReponse2] = useState<string>('')
  const [reponse3, setReponse3] = useState<string>('')
  // const [reponse4, setReponse4] = useState<string>('')
  const [isFrom, setIsForm] = useState<boolean>(false)

  useEffect(() => {
    if (reponse1 === 'Alpes') {
      setDataResort(data!.filter(rst => rst.massifID === 1))
    } else {
      setDataResort(data!.filter(rst => rst.massifID === 2))
    }
  }, [reponse1])

  useEffect(() => {
    if (reponse2 === 'Big') {
      setDataResort(data!.filter(rst => rst.scopeID === 1))
    } else {
      setDataResort(data!.filter(rst => rst.scopeID === 3))
    }
  }, [reponse2])

  useEffect(() => {
    if (reponse3 === 'Family') {
      setDataResort(data!.filter(rst => rst.typeID === 1))
    } else if (reponse3 === 'Athletic') {
      setDataResort(data!.filter(rst => rst.typeID === 2))
    } else {
      setDataResort(data!.filter(rst => rst.typeID === 3))
    }
  }, [reponse3])

  // useEffect(() => {
  //   if (reponse4 === 'Low altitude') {
  //     setDataResort(data!.filter(rst => rst.AltitudeID === 1))
  //   } else if (reponse4 === 'High altitude') {
  //     setDataResort(data!.filter(rst => rst.AltitudeID === 3))
  //   }
  // }, [reponse4])
  return (
    <div>
      <div>
        {question === 1 && <Ques1 setQuestion={setQuestion} setResponse1={setReponse1} />}
        {question === 2 && <Ques2 setQuestion={setQuestion} setReponse2={setReponse2} />}
        {question === 3 && <Ques3 setQuestion={setQuestion} setReponse3={setReponse3} setIsForm={setIsForm} />}
      </div>
      {isFrom && (
        <div>
          <button
            className="text-darkBlue font-bold underline mt-5"
            onClick={() => {
              window.location.reload()
            }}
          >
            Restart the questionnary
          </button>
        </div>
      )}
      {/* {question === 3 && <Ques2 setQuestion={setQuestion} setReponse2={setReponse3} />}
          {question === 2 && <Ques3 setReponse3={setReponse3} setQuestion={setQuestion} />} */}
      {/* {question === 4 && <Ques4 setQuestion={setQuestion} setReponse4={setReponse4} />} */}
    </div>
  )
}

export default Form
