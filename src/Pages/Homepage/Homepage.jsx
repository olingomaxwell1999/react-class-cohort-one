import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Cardone from '../../Components/Cardone/Cardone'
import Jobcardarea from '../../Components/Jobcardarea/Jobcardarea'

const Homepage = () => {
  const cardOneData = [
        {
            id:1,
            title: "For Developers",
            description: "Browser our React Jobs and start Your career",
            btntext: "Browse Jobs"
        },
        {
            id:2,
            title: "For Employers",
            description: "List your job to find the perfect developer for the role",
            btntext: "Add Job"
        }
    ]
  return (
    <div >
        <Hero/>
        <div className='home'>
          {cardOneData.map((info)=>(
            <Cardone key={info.id} props={info}/>
          ))}
        </div>

        <div className="jobcardarea">
          <Jobcardarea/>
        </div>
        
    </div>
  )
}

export default Homepage