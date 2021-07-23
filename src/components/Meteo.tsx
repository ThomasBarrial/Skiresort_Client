import React from 'react'
import snow from '../Assets/snow.svg'
import axios from 'axios'
import { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import BG2 from '../Assets/BGQuestionnary.png'

function Meteo() {
  const [weather, setWeather] = useState({})
  const [query, setQuery] = useState('')
  const options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
    params: { q: 'Gourette' },
    headers: {
      'x-rapidapi-key': '0353f91520msh14802b633f6c4b7p11fc8cjsn6ff17ededcb0',
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    },
  }

  axios
    .request(options as any)
    .then(res => {
      console.log(res)
      setWeather(res)
    })
    .catch(function (error) {
      console.error(error)
    })

  console.log(weather)

  // const api = {
  //   key: '24626e4804a6c9f79433bfaed0c5d056',
  //   base: 'https://api.openweathermap.org/data/2.5',
  // }

  // const search = (evt: any) => {
  //   if (evt.key === 'Enter') {
  //     fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
  //       .then(res => res.json())
  //       .then(result => {
  //         setQuery('')
  //         setWeather(result)
  //         console.log(result)
  //       })
  //       .catch(err => console.log(err))
  //   }
  // }

  // console.log(response)
  return (
    <div
      className=" w-screen h-screen"
      style={{
        backgroundImage: `url(${BG2})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
      }}
    >
      <div className="flex">
        <Link className="w-full ml-5 mt-5" to="/">
          <h1 className="font-bold text-darkBlue text-3xl font-Anton">FRENCH SKI RESORT</h1>
        </Link>
        <Header />
      </div>

      <div className="flex flex-col w-full items-center mt-20">
        <div className="flex items-center">
          <img className="h-12 w-12" src={snow} alt="" />
          <h2 className="font-Anton text-darkBlue text-7xl font-bold">Meteo</h2>
          <img className="h-12 w-12" src={snow} alt="" />
        </div>
        <h2 className="text-4xl font-Open font-bold text-darkBlue mt-10">Search for a resort</h2>
        <input
          className="w-6/12 h-12 p-2  border-2 border-darkBlue rounded-md focus:outline-none mt-2"
          type="text"
          onChange={e => setQuery(e.target.value)}
          value={query}
          // onKeyPress={search}
        />
      </div>
    </div>
  )
}

export default Meteo
