import React from 'react'
import {jobscarddata} from '../../shared/utils/data'
import Jobcard from '../Jobcard/Jobcard'

const Jobsarea = () => {

    const recentjobs = jobscarddata

  return (
    <div className="jobsarea">
        <h2>Browse Jobs</h2>

        <div className="cardsarea">
             {
                recentjobs.map((data) => (
                    <Jobcard key={data.id} data={data}/>
                ))
            }   
        </div>
    </div>
  )
}

export default Jobsarea