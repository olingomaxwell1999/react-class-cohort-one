import React from 'react'
import { Link } from 'react-router-dom'

const Viewotherjobs = () => {
  return (
    <div className='viewotherjobs'>
        <button>
            <Link className='viewjobsbtn' to='/jobs'>View Other Jobs</Link>
        </button>
    </div>
  )
}

export default Viewotherjobs