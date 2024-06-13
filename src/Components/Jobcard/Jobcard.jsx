import React, { useState } from 'react'

const Jobcard = ({data }) => {

  const [showfulldescription,setShowfulldescription] = useState(false)

  let description = data.description

  // console.log(description);

  if (!showfulldescription) {
    description =data.description.substring(0,90) + "..."
  }

  const showAllText = () => {
    setShowfulldescription((prevState)=>{
      return !prevState
    })
  }

  return (
    <div className='jobcard'>
      <h4>{data.time}</h4>
      <h3>{data.position}</h3>
      <p>{description}</p>
      <button onClick={showAllText}>
        {
          showfulldescription ? "Less" : "More"
        }
      </button>
      <h4 className="dollar">{data.salary}</h4>
      <hr />
      <div className="btnarea">
        <div className="iconarea">
          <h4 className="location">{data.location}</h4>
        </div>
        <button>Read More</button>
      </div>
    </div>
  )
}

export default Jobcard