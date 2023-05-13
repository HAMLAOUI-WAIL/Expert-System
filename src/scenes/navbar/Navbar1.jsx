import React,{useState} from 'react'
import { Link } from 'react-router-dom';


import homeIcon from "../images/icons8-smart-home-96 (1) 1.png"
import searchIcon from "../images/icons8-search-100 2.png"
import randomIcon from "../images/open-book.png"
import journeyIcon from "../images/icons8-adventure-100 1.png"




import style from  "./navbar.module.css"

export default function Navbar1() {

  const [activeIcon, setActiveIcon] = useState('home');
  const handleIconClick = (iconName) => {
      setActiveIcon(iconName);
  };

  return (
    <div className={style.navbar}>
      <Link to="/">
        <p>_MR</p>
      </Link>
      <div>
        <Link to="/home" onClick={() => handleIconClick('home')}>
          <img src={homeIcon} alt="Home" className={activeIcon === 'home' ? style.active : ''} />
        </Link>
        <Link to="/Search" onClick={() => handleIconClick('search')}>
          <img src={searchIcon} alt="Search" className={activeIcon === 'search' ? style.active : ''} />
        </Link>
        <Link to="/Journey" onClick={() => handleIconClick('journey')}>
          <img src={journeyIcon} alt="journey" className={activeIcon === 'journey' ? style.active : ''} />
        </Link>
        <Link to="/" onClick={() => handleIconClick('random')}>
          <img src={randomIcon} alt="random" className={activeIcon === 'random' ? style.active : ''} />
        </Link>
      </div>

      <Link to>
          
      </Link>

    </div>
  )
}
