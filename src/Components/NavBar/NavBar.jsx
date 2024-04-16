import Logo from './img/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import './NavBar.css';

const NavBar = () => {

    const navRef = useRef();

    const showNav = () =>{
        navRef.current.classList.toggle('responsive_nav');
    } 

  return (
      <header className='nav-container'>
        <img className='nav-logo' src={Logo} alt="logo" />
        <nav className='nav-links' ref={navRef}>
            <a href='#sobreMi'>sobre mi</a>
            <a href='#planes'>planes</a>
            <a href='/#'>cambios</a>
            <a href='/#'>contacto</a>
            <button className='nav-btn nav-close' onClick={showNav}>
                <FaTimes />
            </button>
        </nav>
        <button className='nav-btn' onClick={showNav}>
            <FaBars />
        </button>
      </header>
  );
}

export default NavBar