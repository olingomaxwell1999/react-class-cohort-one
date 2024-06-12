import React from "react"
import Jobcard from "../Jobcard/Jobcard"

const Jobcardarea = () => {
    const jobscarddata = [
        {
            id:1,
            time: "Full - Time",
            position: "Senior React Developer",
            location: "Boston, Ma",
            salary: "$70K - 80K/Year",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam placeat earum accusamus molestias dicta. Consectetur distinctio praesentium repellat voluptate!"
        },
        {
            id:2,
            time: "Full - Time",
            position: "Senior React Developer",
            location: "Boston, Ma",
            salary: "$70K - 80K/Year",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam placeat earum accusamus molestias dicta. Consectetur distinctio praesentium repellat voluptate!"
        },
        {
            id:3,
            time: "Full - Time",
            position: "Senior React Developer",
            location: "Boston, Ma",
            salary: "$70K - 80K/Year",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam placeat earum accusamus molestias dicta. Consectetur distinctio praesentium repellat voluptate!"
        },
        {
            id:4,
            time: "Full - Time",
            position: "Senior React Developer",
            location: "Boston, Ma",
            salary: "$70K - 80K/Year",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam placeat earum accusamus molestias dicta. Consectetur distinctio praesentium repellat voluptate!"
        },
        {
            id:5,
            time: "Full - Time",
            position: "Senior React Developer",
            location: "Boston, Ma",
            salary: "$70K - 80K/Year",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam placeat earum accusamus molestias dicta. Consectetur distinctio praesentium repellat voluptate!"
        },
        {
            id:6,
            time: "Full - Time",
            position: "Senior React Developer",
            location: "Boston, Ma",
            salary: "$70K - 80K/Year",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam placeat earum accusamus molestias dicta. Consectetur distinctio praesentium repellat voluptate!"
        },
        {
            id:7,
            time: "Full - Time",
            position: "Senior React Developer",
            location: "Boston, Ma",
            salary: "$70K - 80K/Year",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam placeat earum accusamus molestias dicta. Consectetur distinctio praesentium repellat voluptate!"
        },
        {
            id:8,
            time: "Full - Time",
            position: "Senior React Developer",
            location: "Boston, Ma",
            salary: "$70K - 80K/Year",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veniam placeat earum accusamus molestias dicta. Consectetur distinctio praesentium repellat voluptate!"
        }
    ]
    return (
        <div>
            <h2>Recent Jobs</h2>

            <div className="cardsarea">
                {
                    jobscarddata.map((data) => (
                        <Jobcard key={data.id} time={data.time} position={data.position} description={data.description} salary={data.salary} location={data.location}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Jobcardarea