import React from 'react';
import { Fragment } from 'react';
import NavBar from '../components/NavBar/NavBar';
import faqImage from '../images/FAQs.svg';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

function FAQ() {
  return (
    <Fragment>
      <NavBar />
      <section className='relative h-full align-center w-full'>
        <div className='max-width'>
          <h1 className='title text-5xl font-bold text-center mt-20 mx-52'>
            Frequently Asked Questions
          </h1>

          <div className='my-4 mx-auto w-1/2 h-1/2 align-center text-center'>
            <img src={faqImage} alt='Frequently Asked Questions' />
          </div>
          <div className='content align-center my-10'>
            <div className='timeline relative'>
              <div className='container relative mx-16 block m'>
                <ul className='my-10 p-0 inline-block'>
                  <li
                    className='one list-none m-auto pb-24 pl-7 relative'
                    style={{ border: 'none' }}
                  >
                    <h1 className=' font-bold text-2xl relative'>
                      How do i know my vote and information are secured on the
                      platform ?
                    </h1>
                    <p className='text-base my-4'>
                      This platform offers a secured system that protects users
                      information and votes.{' '}
                    </p>
                  </li>
                  <li
                    className='two list-none m-auto pb-24 pl-7 relative'
                    style={{ border: 'none' }}
                  >
                    <h1 className=' font-bold text-2xl relative'>
                      How long does it take for my vote to be counted ?
                    </h1>
                    <p className='text-base my-4'>
                      This is an online voting system that speeds up ballot
                      counting process and the vote is counted immediately after
                      the voter cast their vote in favour of their preferred
                      candidate,
                    </p>
                  </li>
                  <li
                    className='three list-none m-auto pb-24 pl-7 relative'
                    style={{ border: 'none' }}
                  >
                    <h1 className=' font-bold text-2xl relative'>
                      How do get reminders about election date ?{' '}
                    </h1>
                    <p className='text-base my-4'>
                      Notifications would be sent to the student mail and
                      dashboard as reminder for the election date.
                    </p>
                  </li>
                  <li
                    className='four list-none m-auto pb-24 pl-7 relative'
                    style={{ border: 'none' }}
                  >
                    <h1 className=' font-bold text-2xl relative'>
                      Would my vote be kept secret and secured ?{' '}
                    </h1>
                    <p className='text-base my-4'>
                      The voters choices are kept top secret and the system is
                      protected and hosted on Microsoft Azure.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className=' mx-auto w-1/2 h-1/2 align-center text-center'>
              <button
                className='back-btn border rounded-full py-1 px-7 border-solid w-3/4 my-2 font-bold inline-block'
                style={{ background: '#93278F', color: '#FFFF' }}
              >
                <Link
                  className=' flex flex-row justify-evenly font-bold p-2'
                  to='/contact'
                >
                  Submit your Question
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}

export default FAQ;
