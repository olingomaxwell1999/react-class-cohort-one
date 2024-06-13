import React from 'react'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const navlinks = [
    {
      id:1,
      title: "Home",
      link: "/"
    },
    {
      id:2,
      title: "Jobs",
      link: "/jobs"
    },
    {
      id:3,
      title: "Add Jobs",
      link: "/addjob"
    },
  ]
  return (
    <nav className='flex'>
      <div className="logo-side">
        <Link className='logolink' to='/'>
          <img src={Logo} className='logo' alt="Logo" />
        </Link>
        <h1>React Jobs</h1>
      </div>
      <div className="links-side">
        <ul className='navlinks'>
          {
            navlinks.map((link) =>(
              <li>
                <Link className='navlink' key={link.id} to={link.link}>
                  {link.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      
    </nav>
  )
}

export default Navbar