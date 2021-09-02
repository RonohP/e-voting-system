import React from 'react';
import { Fragment } from 'react';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';
import Design from '../images/Design team-cuate 1.png';
import Ballot from '../images/ballot-box.svg';
import { HiOutlineLightBulb } from 'react-icons/hi';

function About() {
    return (
      <Fragment>
        <NavBar />
        <section className='relative h-full align-center w-full'>
          <div>
            <h1 className='text-5xl font-bold text-center mt-36 mx-52'>
              We aim to make school elections easy, seamless and fair
            </h1>
            <p className='text-center mt-10 font-normal text-lg mx-5'>
              This voting system was made to improve the voting system of the
              Women techsters University.
              <br />
              Electing students representatives has been made easy on thia App.
              With Just few clicks voters are able to vote in their prefferred
              candidates.
            </p>
          </div>
          <div className='my-24 mx-auto w-1/2 h-1/2'>
            <img src={Design} alt='Design team-cuate 1' />
          </div>
          <div className='flex mx-20 my-20 flex-row'>
            <div className='left w-1/2 h-auto p-4'>
              <div
                className='w-auto h-80 relative my-10 rounded-3xl p-4 mx-auto'
                style={{ background: '#782A79' }}
              >
                <span
                  className='w-16 h-16 absolute top-16 mx-12'
                  style={{ borderRadius: '500%', background: '#ffff' }}
                >
                  <HiOutlineLightBulb
                    className='p-2.5 text-center font-bold'
                    style={{ color: '#782A79', width: '65px', height: '65px' }}
                  />
                </span>
                <div className='absolute mx-10 top-36 p-4'>
                  <h3 className='text-4xl font-bold'>The Idea</h3>
                  <p>
                    The Alpha team conducted an indepth research and saw the
                    need for an online voting system that would speed up
                    electoral process and help students vote for their preffered
                    candidates
                  </p>
                </div>
              </div>
            </div>
            <div className='right w-1/2 h-auto p-4'>
              <div
                className='w-auto h-80 relative my-10 rounded-3xl '
                style={{ background: '#DBDBDB' }}
              >
                <span
                  className='w-16 h-16 absolute top-16 mx-12 '
                  style={{ borderRadius: '500%', background: '#782A79' }}
                >
                  <img src={Ballot} alt='ballot-box' className='p-4' />
                </span>
                <div className='absolute mx-10 top-36 p-4'>
                  <h3 className='text-4xl font-bold'>The Solution</h3>
                  <p>
                    The Alpha team is set to solve the issue of slow electoral
                    process and create a secured platform that ensures fair
                    elections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
}

export default About;