import React from 'react';
import './Dashboard.css';
import VotingRafiki from '../../images/Voting-rafiki.svg';
import { Switch, Route, NavLink } from 'react-router-dom';

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
          <div className='justify-evenly'>
            <NavLink
              exact
              to='/today'
              activeClassName='calendar-active'
              className='mr-4 text-lg font-semibold p-4 opacity-40 my-4'
            >
              Today
            </NavLink>
            <NavLink
              exact
              to='/nextWeek'
              activeClassName='calendar-active'
              className='mr-4 text-lg font-semibold p-4 opacity-40 my-4'
            >
              Next Week
            </NavLink>
            <NavLink
              exact
              to='/thisMonth'
              activeClassName='calendar-active'
              className='mr-4 text-lg font-semibold p-4 opacity-40 my-4'
            >
              This Month
            </NavLink>
            <hr />
            <Switch>
              <Route exact path='/today'>
                <div className='mx-4'></div>
              </Route>
              <Route exact path='/nextWeek'></Route>
              <Route exact path='/thisMonth'></Route>
            </Switch>
          </div>
        </div>
      </div>
      <div className='flex flex-row w-full my-12'>
        <div className='card-side mx-2 p-4 w-1/2'>
          <h2 className='text-xl font-semibold my-4'>Activity</h2>
          <div className='flex flex-row justify-start content-start my-2'>
            <div className='flex flex-row text-center mr-8'>
              <span
                className='w-4 h-4 p-1 rounded-full inline-block my-1 mx-2 '
                style={{ background: '#93278F' }}
              ></span>
              <p className=' text-base'>Ongoing</p>
            </div>
            <div className='flex flex-row text-center mr-8'>
              <span
                className='w-4 h-4 p-1 rounded-full inline-block my-1 mx-2'
                style={{ background: 'rgba(232, 37, 37, 0.8)' }}
              ></span>
              <p className=' text-base'>Pending</p>
            </div>
            <div className='flex flex-row text-center mr-8'>
              <span
                className='w-4 h-4 p-1 rounded-full inline-block my-1 mx-2'
                style={{ background: 'rgba(25, 154, 23, 0.8)' }}
              ></span>
              <p className=' text-base'>Concluded</p>
            </div>
          </div>
          <div className='flex flex-col my-2 items-stretch'>
            <div className='flex flex-row my-8 justify-between'>
              <div className='' style={{ width: '21.5rem' }}>
                <p className='text-2xl truncate'>President Student Council</p>
              </div>
              <div className=''>
                <span
                  className='w-4 h-4 p-1 rounded-full my-1 mx-2 inline-block'
                  style={{ background: '#93278F' }}
                ></span>
              </div>
              <div className='w-24'>
                <p>27-09-2021</p>
              </div>
            </div>
            <div className='flex flex-row my-8 justify-between'>
              <div className='' style={{ width: '21.5rem' }}>
                <p className='text-2xl truncate'>
                  Secretary General Student Council
                </p>
              </div>
              <div className=''>
                <span
                  className='w-4 h-4 p-1 rounded-full my-1 mx-2 inline-block'
                  style={{ background: 'rgba(232, 37, 37, 0.8)' }}
                ></span>
              </div>
              <div className='w-24'>
                <p>Pending</p>
              </div>
            </div>
            <div className='flex flex-row my-8 justify-between'>
              <div className='' style={{ width: '21.5rem' }}>
                <p className='text-2xl truncate'>
                  Financial Secretary Student Council
                </p>
              </div>
              <div className=''>
                <span
                  className='w-4 h-4 p-1 rounded-full my-1 mx-2 inline-block'
                  style={{ background: 'rgba(232, 37, 37, 0.8)' }}
                ></span>
              </div>
              <div className='w-24'>
                <p>Pending</p>
              </div>
            </div>
            <div className='flex flex-row my-8 justify-between'>
              <div className='' style={{ width: '21.5rem' }}>
                <p className='text-2xl truncate'>
                  Financial Secretary Student Council
                </p>
              </div>
              <div className=''>
                <span
                  className='w-4 h-4 p-1 rounded-full my-1 mx-2 inline-block'
                  style={{ background: 'rgba(25, 154, 23, 0.8)' }}
                ></span>
              </div>
              <div className='w-24'>
                <p>Concluded</p>
              </div>
            </div>
          </div>
        </div>
        <div className='card-side mx-2 p-4 w-1/2'>
          <h2 className='text-xl font-semibold my-4'>Live Results</h2>
          <div className='left'>
            <div className='chart-div h-96 w-full p-10 relative'>
              <h3 className='left-label-dash font-bold text-xl absolute'>
                No. of Voters
              </h3>
              <ul className='chart dash table table-fixed max-w-2xl w-3/5 h-auto mx-auto'>
                <li className='relative table-cell h-52 align-bottom'>
                  <span className='one h-28 mx-4 block' title='Kitan'></span>
                </li>
                <li className='relative table-cell h-52 align-bottom'>
                  <span className='two h-3 mx-4 block' title='Layla'></span>
                </li>
                <li className='relative table-cell h-52 align-bottom'>
                  <span className='three h-24 mx-4 block' title='Wawira'></span>
                </li>
                <li className='relative table-cell h-52 align-bottom'>
                  <span className=' four h-14 mx-4 block' title='Abena'></span>
                </li>
                <li className='relative table-cell h-52 align-bottom'>
                  <span className=' five h-48 mx-4 block' title='Zawadi'></span>
                </li>
              </ul>
              <h3 className='right-label dash font-bold text-xl text-center pt-3 my-6'>
                Candidates
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className=' card-side w-full my-12 pb-6'>
        <h2 className='text-xl font-semibold my-4 text-center'>
          Monitor your voting process here
        </h2>
        <div className='dash content flex flex-warp align-center justify-between text-center mx-36 my-2'>
          <div className=' w-1/3 text-center align-center h-auto relative'>
            <div className='circle one w-32 h-32 my-6 ml-16'></div>
            <span className='text-2xl font-semibold text-center p-8 absolute'>
              500
            </span>
            <p className='font-normal text-base'>Number of registered voters</p>
          </div>
          <div className=' w-1/3 text-center align-center h-auto relative'>
            <div className='circle two w-32 h-32 my-6 ml-16'></div>
            <span className=' text-2xl font-semibold text-center p-8 absolute'>
              480
            </span>
            <p>Total Number of votes</p>
          </div>
          <div className='  w-1/3 text-center align-center h-auto relative'>
            <div className='circle three w-32 h-32 my-6 ml-16'></div>
            <span className=' three text-2xl font-semibold text-center p-8 absolute item-center'>
              5
            </span>
            <p>Number of registered Candidates</p>
          </div>
        </div>
      </div>
    </div>
  );
}
