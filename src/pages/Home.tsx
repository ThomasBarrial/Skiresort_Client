import React from 'react'
import BG1 from '../Assets/BGhome.png'
import { Link } from 'react-router-dom'
import img from '../Assets/resortanime.png'

function Home(): JSX.Element {
  return (
    <div
      className="h-screen w-screen flex items-center justify-center p-14"
      style={{
        backgroundImage: `url(${BG1})`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
      }}
    >
      <div className="w-full flex flex-col justify-center items-center mb-20">
        <img src={img} alt="" />
        <h1 className="font-bold text-darkBlue text-8xl font-Anton">FRENCH SKI RESORT</h1>
        <h2 className="text-darkBlue font-Open text-2xl mt-5">
          World-Class Skiing and riding towns Find your accomodation for winter Holidays
        </h2>
        <Link to="/questionnary">
          <button className="bg-button font-bold py-3 px-5 text-white font-Open rounded-md shadow-buttonShadow mt-12 focus:outline-none">
            Search for a resort
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
