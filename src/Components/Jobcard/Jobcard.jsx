import React from 'react'
// import { FaLocationPin } from "react-icons/fa6";

const Jobcard = ({time,position,description,salary,location}) => {
  return (
    <div className='jobcard'>
        <h4>{time}</h4>
        <h3>{position}</h3>
        <p>{description}</p>
        <h4 className="dollar">{salary}</h4>
        <hr />

        <div className="btnarea">
            <div className="iconarea">
                <h4 className="location">{location}</h4>
            </div>

            <button>Read More</button>
        </div>
    </div>
  )
}

export default Jobcard