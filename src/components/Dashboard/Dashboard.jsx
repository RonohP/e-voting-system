import React from 'react';
import './Dashboard.css';
import VotingRafiki from '../../images/Voting-rafiki.svg';
import { Switch, Route, NavLink } from 'react-router-dom';
import { useAuth } from '../../utils/hooks/useAuth';
import BarChart from '../BarChart';
import DoughnutChart from '../DoughnutChart';

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <div className='w-full'>
      <div className='mx-4 my-2'>
        <h1 className='text-4xl'>
          Hello,
          <span className='font-bold' style={{ color: '#93278F' }}>
            {user?.firstName}
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
          <div className=''>
            <div className='flex justify-evenly text-center'>
              <NavLink
                exact
                to={'/today'|| '/dashboard'}
                activeClassName='calendar-active text-gray-900'
                className='relative mr-4 text-lg font-semibold p-4 my-1 text-gray-300'
              >
                Today
              </NavLink>
              <NavLink
                exact
                to='/nextWeek'
                activeClassName='calendar-active text-gray-900'
                className='mr-4 text-lg font-semibold p-4 text-gray-300 my-1 relative'
              >
                Next Week
              </NavLink>
              <NavLink
                exact
                to='/nextMonth'
                activeClassName='calendar-active text-gray-900'
                className='mr-4 text-lg font-semibold p-4 text-gray-300 my-1 relative'
              >
                Next Month
              </NavLink>
            </div>
            <hr />
            <div className='flex flex-row justify-evenly opacity-30 font-medium text-xs my-2'>
              <p>07:00</p>
              <p>08:00</p>
              <p>09:00</p>
              <p>10:00</p>
              <p>11:00</p>
            </div>
            <Switch>
              <Route exact path='/dashboard'>
                <div className='mx-4 my-4 flex '>
                  <div
                    className='w-12 h-auto font-semibold text-2xl text-center mx-10 my-8'
                    style={{
                      color: '#1A56B0',
                      fontFamily: 'Work Sans',
                    }}
                  >
                    <p>{new Date().getDate()} Oct</p>
                  </div>
                  <div
                    className='w-56 text-sm font-normal mx-4 my-8'
                    style={{
                      background: 'rgba(26, 86, 176, 0.1)',
                      borderRadius: '5px',
                      color: '#1A56B0',
                    }}
                  >
                    <p className='pl-4 py-2'>President Student Council</p>
                  </div>
                </div>
              </Route>
              <Route exact path='/today'>
                <div className='mx-4 my-4 flex '>
                  <div
                    className='w-12 h-auto font-semibold text-2xl text-center mx-10 my-8'
                    style={{
                      color: '#1A56B0',
                      fontFamily: 'Work Sans',
                    }}
                  >
                    <p>{new Date().getDate()} Oct</p>
                  </div>
                  <div
                    className='w-56 text-sm font-normal mx-4 my-8'
                    style={{
                      background: 'rgba(26, 86, 176, 0.1)',
                      borderRadius: '5px',
                      color: '#1A56B0',
                    }}
                  >
                    <p className='pl-4 py-2'>President Student Council</p>
                  </div>
                </div>
              </Route>
              <Route exact path='/nextWeek'>
                <div className='mx-4 my-4 flex '>
                  <div
                    className='w-12 h-auto font-semibold text-2xl text-center mx-10 my-8'
                    style={{
                      color: '#1A56B0',
                      fontFamily: 'Work Sans',
                    }}
                  >
                    <p>{new Date().getDate() + 10} Oct</p>
                  </div>
                  <div
                    className='w-56 text-sm font-normal mx-4 my-8'
                    style={{
                      background: 'rgba(26, 86, 176, 0.1)',
                      borderRadius: '5px',
                      color: '#1A56B0',
                    }}
                  >
                    <p className='pl-4 py-2'>Student Council Election</p>
                  </div>
                </div>
              </Route>
              <Route exact path='/nextMonth'>
                <div className='mx-4 my-4 flex '>
                  <div
                    className='w-12 h-auto font-semibold text-2xl text-center mx-10 my-8'
                    style={{
                      color: '#1A56B0',
                      fontFamily: 'Work Sans',
                    }}
                  >
                    <p>{new Date().getDate()} Nov</p>
                  </div>
                  <div
                    className='w-56 text-sm font-normal mx-4 my-8'
                    style={{
                      background: 'rgba(26, 86, 176, 0.1)',
                      borderRadius: '5px',
                      color: '#1A56B0',
                    }}
                  >
                    <p className='pl-4 py-2'>Senate Selection</p>
                  </div>
                </div>
              </Route>
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
          <div className='left relative'>
            <BarChart />
          </div>
        </div>
      </div>
      <div className=' card-side w-full my-12 pb-6'>
        <h2 className='text-xl font-semibold my-4 text-center'>
          Monitor your voting process here
        </h2>
        <DoughnutChart />
      </div>
    </div>
  );
}
