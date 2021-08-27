import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Header.css';
import header from '../../images/header.png';

function Header() {
    return (
      <header className='header relative pl-8 pr-8 flex flex-col h-screen w-full'>
        <NavBar />
        <div className='hero mt-2 flex flex-row h-screen w-full pt-4'>
          <div className='hero-text flex flex-col pt-20 pl-10 w-1/2'>
            <h1 className='font-bold text-5xl'>
              Fast, Secured and Accessible Voting System
            </h1>
            <br />
            <p>
              {' '}
              Let’s make voting and elections easy for you. This is designed to
              ensure a secured voting session.
            </p>
          </div>
          <div className='hero-img w-1/2'>
            <img
              src={header}
              alt='Header-img'
              className='h-full p-2 object-cover mr-10'
            />
          </div>
        </div>
      </header>
    );
}

export default Header;