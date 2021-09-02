import React from 'react';
import './Footer.css';
import Logo from '../../images/WTLOGO.png';
import { Link, p } from 'react-router-dom';

function Footer() {
    return (
      <footer className='footer w-full h-auto relative inset-x-0 bottom-0 flex flex-row justify-center md:w-full'>
        <div className='flex flex-col pt-8 pl-6 md:justify-center'>
          <div className='flex'>
            <img className=' w-12 h-11' src={Logo} alt='WTLogo' />
            <p className='logo-text inline-block pt-6 pl-1 font-sans font-bold'>
              echsters Universisty
            </p>
          </div>
          <p className='font-thin h-16 pt-20'>
            Copyright &copy; 2021 - Alpha Team Technologies Limited{' '}
          </p>
          <p className='font-thin h-16 pt-20 mb-16'>All Rights Reserved</p>
        </div>
        <div className='ml-14 pt-8 pl-4'>
          <h1 className='font-bold h-16'>Product</h1>
          <p className='font-thin h-16'>Web Application</p>
        </div>
        <div className='ml-10 pt-8 pl-4'>
          <h1 className='font-bold h-16'>Legal</h1>
          <p className='font-thin h-16'>
            <Link to='/terms'>Terms and Conditions</Link>
          </p>
          <p className='font-thin h-16'>
            <Link to='/privacy-policy'>Privacy Policy</Link>
          </p>
          <p className='font-thin h-16'>
            <Link to='/faq'> FAQs </Link>
          </p>
        </div>
        <div className='ml-10 pt-8 pl-4'>
          <h1 className='font-bold h-16'>Connect</h1>
          <p className='font-thin h-16'>
            18b Oladimeji Alo Street off Freedom Way, Lekki,100001, Lagos State.
          </p>
          <p className='font-thin h-16'>
            Email: The AlphaTeam@womentchsters.org
          </p>
          <p className='font-thin h-16'>Phone: (234) 813-275-5220</p>
        </div>
      </footer>
    );
}

export default Footer;