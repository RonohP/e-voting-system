import React from 'react';
import './Dashboard.css';
import VotingRafiki from '../../images/Voting-rafiki.svg'

export default function Dashboard() {
  return (
    <div className='w-full'>
      <div className='mx-4 my-2'>
        <h1 className='text-4xl'>
          Hello,
          <span className='font-bold' style={{ color: '#93278F' }}>
            Jane
          </span>
        </h1>
        <p className='text-base my-2'>
          Welcome to the Women Techsters University voting platform.
        </p>
      </div>
      <div className='flex flex-row w-full my-12'>
        <div className='card-side mx-2 p-4 w-1/2'>
          <h2 className='text-xl font-semibold my-4'>Ongoing Election</h2>
          <p>President Student Election</p>
          <img
            src={VotingRafiki}
            alt='VotingRafiki'
            className='text-center mx-auto'
          />
        </div>
        <div className='card-side mx-2 p-4 w-1/2'>
          <h2 className='text-xl font-semibold my-4'>Calendar</h2>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}
