import React from "react"
import Jobcard from "../Jobcard/Jobcard"
import Viewotherjobs from "../Viewotherjobs/Viewotherjobs"
import {jobscarddata} from '../../shared/utils/data'

const Jobcardarea = () => {

    let recentjobs = jobscarddata.slice(0,3)

    return (
        <div className="jobcardareacarrier">
            <h2>Recent Jobs</h2>

            <div className="cardsarea">
                {
                    recentjobs.map((data) => (
                        <Jobcard key={data.id} data={data}/>
                    ))
                }
            </div>
            
            <Viewotherjobs/>
            
        </div>
    )
}

export default Jobcardarea