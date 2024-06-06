import React from 'react'
import Logo from '../../assets/logo.png'

const Navbar = () => {

  const navlinks = ['Home', 'Jobs', 'Add Jobs']
  return (
    <nav className='flex'>
      <div className="logo-side">
        <img src={Logo} alt="Logo" />
        <h1>React Jobs</h1>
      </div>
      <div className="links-side">
        <ul className='navlinks'>
          {
            navlinks.map((link) =>(
              <li>{link}</li>
            ))
          }
        </ul>
      </div>
      
    </nav>
  )
}

export default Navbar