import React from 'react'
import Header from './Header'
import BG2 from '../Assets/Settings.png'
import { Link } from 'react-router-dom'
import { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { resort } from '../Api/request'
import UniqueResort from './UniqueResort'
import PostForm from './Formulaire/Post/PostForm'

function Settings(): JSX.Element {
  const { data } = useQuery<IResort[], AxiosError>('resorts', () => resort.getAll())
  return (
    <div className="w-full bg-white flex">
      {/* <img className="h-screen w-screen z-50 sticky bottom-0" src={BG2} alt="bgimage" /> */}
      <div className="w-6/12 p-5">
        <Link className="w-full" to="/">
          <h1 className="font-bold text-darkBlue w-6/12 text-3xl font-Anton">FRENCH SKI RESORT</h1>
        </Link>
        <div className="mt-10">
          <PostForm />
        </div>
      </div>
      <div className="w-6/12 pr-10 h-screen overflow-y-auto">
        <Header />
        <div className="pb-20">
          {data?.map((resort, Id) => {
            return <UniqueResort resort={resort} key={Id} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Settings
