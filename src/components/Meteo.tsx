import React from 'react'

import axios from 'axios'
import { useState } from 'react'

function Meteo() {
  const [weather, setWeather] = useState()
  const [query, setQuery] = useState('')
  // const options = {
  //   method: 'GET',
  //   url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
  //   params: { q: 'Gourette' },
  //   headers: {
  //     'x-rapidapi-key': '0353f91520msh14802b633f6c4b7p11fc8cjsn6ff17ededcb0',
  //     'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
  //   },
  // }

  // axios
  //   .request(options as any)
  //   .then(function (response) {
  //     console.log(response)
  //   })
  //   .catch(function (error) {
  //     console.error(error)
  //   })

  const api = {
    key: '97de77b2c2586daaf68c5859c08e52c7',
    base: 'https://api.openweathermap.org/data/2.5',
  }

  const search = (evt: any) => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setQuery('')
          setWeather(result)
          console.log(result)
        })
    }
  }

  // console.log(response)
  return (
    <div className="">
      <input type="text" onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} />
    </div>
  )
}

export default Meteo
