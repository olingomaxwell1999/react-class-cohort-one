import React from 'react'

const Cardone = ({props}) => {
    
  return (
    <div className='cardone'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button>{props.btntext}</button>
    </div>
  )
}

export default Cardone