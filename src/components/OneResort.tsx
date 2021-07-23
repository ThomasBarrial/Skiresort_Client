import React from 'react'
import { useQuery } from 'react-query'
import { Link, useParams } from 'react-router-dom'
import { resort } from '../Api/request'
import Header from './Header'
import BG3 from '../Assets/OneResort.png'

function OneResort() {
  const { id } = useParams<{ id: any }>()
  console.log(id)

  const { data } = useQuery<IResort>('resort', () => resort.getOne(id as number))

  return (
    <div
      className="h-screen w-screen"
      style={{
        backgroundImage: `url(${BG3})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
      }}
    >
      <div className="flex items-center px-5">
        <Link className="w-full" to="/">
          <h1 className="font-bold text-darkBlue w-6/12 text-3xl font-Anton">FRENCH SKI RESORT</h1>
        </Link>
        <Header />
      </div>
      <div className="flex p-20 justify-center w-full">
        <div
          className="w-4/12 h-96 border-4 shadow-buttonShadow rounded-md border-darkBlue"
          style={{
            backgroundImage: `url(${data?.images})`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `center`,
          }}
        ></div>
        <div className="flex flex-col w-6/12 ml-10">
          <div>
            <h2 className="font-Anton text-5xl text-darkBlue font-bold">{data?.name}</h2>
            <p className="mt-5 font-Open text-xl">{data?.Description}</p>
            <p className="mt-5 font-bold">
              Station: {data?.typeID === 1 && 'Familiale'}
              {data?.typeID === 2 && 'Athletic'}
              {data?.typeID === 3 && 'Festive'}
            </p>
            <p className="mt-5 font-bold">Altitude: {data?.Altitude}</p>
          </div>
          <div className="flex my-10">
            <a
              className=" transform motion-safe:hover:scale-105 text-center rounded-md bg-darkBlue p-2 w-5/12 text-white font-bold shadow-buttonShadow"
              href={data?.siteWeb}
            >
              Site Web
            </a>
            <a
              className="transform motion-safe:hover:scale-105 text-center ml-8 rounded-md bg-darkBlue p-2 w-5/12 text-white font-bold shadow-buttonShadow"
              href={data?.condition}
            >
              Condition d'enneigement
            </a>
          </div>
          <Link to="/questionnary">
            <a className="font-Open text-darkBlue font-bold underline">back to the questionnary</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OneResort
