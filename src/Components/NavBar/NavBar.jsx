import Logo from './img/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import './NavBar.css';

const NavBar = () => {

    const navRef = useRef();

    const showNav = () =>{
        navRef.current.classList.toggle('responsive_nav');
    } 

    const hideNavbar =()=>{
        navRef.current.classList.remove("responsive_nav")
      }

  return (
      <header className='nav-container'>
        <img className='nav-logo' src={Logo} alt="logo" />
        <nav className='nav-links' ref={navRef}>
            <a onClick={hideNavbar} href='#sobreMi'>sobre mi</a>
            <a onClick={hideNavbar} href='#planes'>planes</a>
            <a onClick={hideNavbar} href='/#'>cambios</a>
            <a onClick={hideNavbar} href='/#'>contacto</a>
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