import { AxiosError } from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { resort } from '../../Api/request'
import BG2 from '../../Assets/BGQuestionnary.png'
import Header from '../Header'
import Resort from '../Resort'
import Form from './Form'

import { useState } from 'react'
import SearchBar from '../SearchBar'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

function Questions(): JSX.Element {
  const [dataResort, setDataResort] = useState<IResort[]>([])
  const { register, watch } = useForm()
  const { data } = useQuery<IResort[], AxiosError>('resorts', () => resort.getAll(), {
    onSuccess: data => {
      setDataResort(data)
    },
  })
  const [question, setQuestion] = useState<number>(1)

  const searchInput = watch('search')

  return (
    <div
      className="h-screen w-screen"
      style={{
        backgroundImage: `url(${BG2})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
      }}
    >
      <div className="flex w-full">
        <div className="w-8/12 px-10 py-7 flex flex-col items-start">
          <Link to="/">
            <h1 className="font-bold text-darkBlue text-3xl font-Anton">FRENCH SKI RESORT</h1>
          </Link>
          <h1 className="text-3xl mt-12 text-darkBlue">
            Answer this few question to find your perfect french ski resort{' '}
          </h1>
          <Form data={dataResort} setDataResort={setDataResort} question={question} setQuestion={setQuestion} />
          <SearchBar register={register} name="search" />
        </div>
        <div className="h-screen w-10/12 pb-12 overflow-y-auto">
          <Header />
          {dataResort
            ?.filter(resort => {
              const included = resort.name.toLowerCase().includes(searchInput?.toLowerCase())
              return searchInput ? included : true
            })
            .map(resort => {
              return <Resort resort={resort} key={resort.Id} />
            })}
          {dataResort.length === 0 && (
            <p className="text-darkBlue mt-10 text-opacity-50 text-5xl font-bold">No ski resorts found</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Questions
