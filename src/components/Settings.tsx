import React, { useState } from 'react'
import Header from './Header'
import BG2 from '../Assets/Settings.png'
import { Link } from 'react-router-dom'
import { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { resort } from '../Api/request'
import UniqueResort from './UniqueResort'
import PostForm from './Formulaire/Post/PostForm'

function Settings(): JSX.Element {
  const [resortId, setResortId] = useState<number>()
  const { data } = useQuery<IResort[], AxiosError>('resorts', () => resort.getAll())
  return (
    <div
      className="w-full bg-white flex"
      style={{
        backgroundImage: `url(${BG2})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
      }}
    >
      <div className="w-6/12 h-screen overflow-y-auto">
        <div className="w-full sticky p-5 top-0 h-20 bg-white">
          <Link to="/">
            <h1 className="font-bold text-darkBlue w-6/12 text-3xl font-Anton">FRENCH SKI RESORT</h1>
          </Link>
        </div>
        <div className="my-2 mx-5">
          <PostForm resortId={resortId} />
        </div>
      </div>
      <div className="w-6/12 px-10 h-screen overflow-y-auto">
        <Header />
        <div className="pb-20">
          {data?.map((resort, Id) => {
            return <UniqueResort oneResort={resort} key={Id} setResortId={setResortId} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Settings
