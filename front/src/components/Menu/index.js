import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavLink } from 'react-router-dom';

function menu() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar =() => setSidebar(!sidebar)
  return (
    <>
      <div className="menu">
        <Link to="#" className='menu-bars' />
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          <li className="navbar-toogle">
            <Link to="#" className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default menu
