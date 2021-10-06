import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../images/WTLOGO.png';
import './NavBar.css';
import { AiOutlineMenu } from 'react-icons/ai';

function NavBar() {
  return (
    <nav className='navbar flex justify-between item-center mb-10 h-16 w-full sm:pl-10 md:pl-20  md:w-full '>
      <Link to='/' className='flex flex-row pt-6'>
        <img src={Logo} alt='WTLogo' className='w-12 h-11' />
        <p className='logo-text inline-block pt-6 pl-1 font-sans font-bold'>
          echsters University
        </p>
      </Link>
      <div className=' menu-btn px-4 cursor-pointer md:hidden'>
        <AiOutlineMenu />
      </div>
      <div className='pr-6 pt-8 md:block hidden relative'>
        <NavLink className='p-4 relative' exact to='/home' activeClassName='active-navBar'>
          Home
        </NavLink>
        <NavLink className='p-4 relative' exact to='/about' activeClassName='active-navBar'>
          About
        </NavLink>
        <NavLink className='p-4 relative' exact to='/contact' activeClassName='active-navBar'>
          Contact Us
        </NavLink>
        <NavLink className='p-4 relative' exact to='/faq' activeClassName='active-navBar'>
          FAQs
        </NavLink>
        <button className='login-btn border rounded-full py-2 px-6 border-solid mr-6 ml-4'>
          <Link className='p-4' to='/login'>
            Login
          </Link>
        </button>
        <button className='register-btn border rounded-full py-2 px-8 border-solid'>
          <Link className='p-4' to='/register'>
            Register as a Voter
          </Link>
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
