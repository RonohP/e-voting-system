import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import {FiLogOut} from 'react-icons/fi';
import VoteImg from '../../images/VectorVote.svg';
import VoteGuideImg from '../../images/VoteGuide.svg';
import './Sidebar.css';
import Logo from '../../images/WTLOGO.png'

export default function Sidebar() {
  return (
    <div className='sidebar flex flex-col w-80 m-0 p-0 h-screen overflow-auto sticky contents-center'>
      <Link to='/dashboard' className='flex flex-row pt-6 mx-4 mt-4 mb-10'>
        <img src={Logo} alt='WTLogo' className='w-12 h-11' />
        <p className='logo-text inline-block pt-6 pl-1 font-sans font-bold'>
          echsters University
        </p>
      </Link>
      <NavLink
        exact
        to='/dashboard'
        className='flex p-4 mt-4 mb-10 relative text-lg'
        activeClassName='side-active'
      >
        <AiOutlineHome className='p4 m-1 mx-6 w-6 h-6' />
        Dashboard
      </NavLink>
      <NavLink
        exact
        to='/vote'
        className='flex p-4 mt-4 mb-10 relative text-lg'
        activeClassName='side-active'
      >
        <img src={VoteImg} alt='Vote' className='p4 m-1 mx-6' />
        Vote
      </NavLink>
      <NavLink
        exact
        to='/voters-guidelines'
        className='flex p-4 mt-4 mb-10 relative text-lg'
        activeClassName='side-active'
      >
        <img src={VoteGuideImg} alt='Vote Guide' className='p4 m-1 mx-6' />
        Voters Guideline
      </NavLink>

      <Link to='/login' className=' absolute flex bottom-0 p-4 mt-4 mb-10 font-bold text-lg'>
        <FiLogOut className='p4 m-1 mx-6' /> Logout
      </Link>
    </div>
  );
}
