import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../images/WTLOGO.png';
import './NavBar.css';
import {AiOutlineMenu} from 'react-icons/ai'

function NavBar() {
    return (
      <nav className='navbar flex justify-between item- center mb-10 h-16 w-full sm:pl-2 md:pl-10 lg:pl-12 md:w-full '>
        <Link to='/' className='flex flex-row pt-6'>
          <img src={Logo} alt='WTLogo' className='w-12 h-11' />
          <p className='logo-text inline-block pt-6 pl-1 font-sans font-bold'>
            echsters University
          </p>
        </Link>
        <div className=' menu-btn px-4 cursor-pointer md:hidden'>
          <AiOutlineMenu/>
        </div>
        <div className='pr-6 pt-8 md:block hidden'>
          <Link className='p-4' to='/home'>
            Home
          </Link>
          <Link className='p-4' to='/about'>
            About
          </Link>
          <Link className='p-4' to='/contact'>
            Contact Us
          </Link>
          <Link className='p-4' to='/faq'>
            FAQs
          </Link>
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