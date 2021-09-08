import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import thankYou from '../images/thank.svg';
import { BiArrowBack } from 'react-icons/bi';

function ThankYou() {
    return (
      <Fragment>
        <NavBar />
        <section className='relative h-full align-center w-full'>
          <div>
            <h1 className='text-5xl font-bold text-center mt-20 mx-52'>
              Thank You !
            </h1>
            <p className='text-center mt-4 font-normal text-base mx-5'>
              Your Submission has been received, We will be in touch and contact
              you soon.
            </p>
          </div>
          <div className='my-16 mx-auto w-1/2 h-1/2 align-center text-center'>
            <img src={thankYou} alt='Mail received. Thank you' />
            <button
              className='back-btn border rounded-full py-1 px-7 border-solid w-3/4 my-2 font-bold inline-block'
              style={{ background: '#93278F', color: '#FFFF' }}
            >
              <Link
                className=' flex flex-row justify-evenly font-bold p-2'
                to='/home'
              >
                <BiArrowBack className='p-1 text-3xl font-bold' /> Return to
                Homepage
              </Link>
            </button>
          </div>
        </section>
      </Fragment>
    );
}

export default ThankYou;