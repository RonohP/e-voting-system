import React from 'react';
import { Fragment } from 'react';
import fourOfour from '../images/404.svg';
import {Link} from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi';
import NavBar from '../components/NavBar/NavBar';

function PageNotFound() {
    return (
      <Fragment>
        <NavBar />
        <section className='404 relative h-full align-center w-full'>
          <div className='max-width'>
            <div className='content my-12 mx-auto text-center align-center'>
              <img src={fourOfour} alt='404 Page not found'className='align-center mx-auto' />
              <p className='mt-10 text-xl'>
                The page you are looking for might have been removed, had its
                name changed or is temporarily unavailable.
              </p>
              <button
                className='back-btn border rounded-full py-2 px-10 border-solid w-auto mt-8 inline-block'
                style={{ color: '#FFFF', background: '#93278F' }}
              >
                <Link
                  className=' flex flex-row justify-evenly font-bold'
                  to='/home'
                >
                  <BiArrowBack className='p-1 text-3xl font-bold' /> Go Back
                </Link>
              </button>
            </div>
          </div>
        </section>
      </Fragment>
    );
}

export default PageNotFound;