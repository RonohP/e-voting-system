import React from 'react';
import './Features.css';
import {TiStarburst} from 'react-icons/ti';
import secure from '../../images/padlock.svg';
import people from '../../images/people.svg';
import vote from '../../images/online-voting.svg';

function Features() {
    return (
      <section className='features py-24'>
        <div className='max-width'>
          <h1 className='title relative text-center text-5xl font-medium mb-14 pb-5'>
            Our Features
          </h1>
          <div className='content flex flex-warp align-center justify-between w-full'>
            <div className='column 1 text-center w-4/12 align-center justify-center p-6'>
              <div className='relative justify-center align-center'>
                <TiStarburst className='union text-9xl text-center mx-16' />
                <img
                  src={secure}
                  alt='secure'
                  className='union-in w-16 h-16 absolute left-0 top-0 text-center mt-14 ml-32 text-center'
                />
              </div>
              <h3 className='text-xl'>Secured Platform </h3>
              <h6 className='text-xs'>
                With our platform, your data is secured
              </h6>
            </div>
            <div className='column 2 text-center w-4/12 align-center justify-center p-6'>
              <div className='relative justify-center align-center'>
                <TiStarburst className='union text-9xl text-center mx-16' />
                <img
                  src={vote}
                  alt='secure'
                  className='union-in w-16 h-16 absolute left-0 top-0 text-center mt-14 ml-32 text-center'
                />
              </div>
              <h3 className='text-xl'>Vote Online</h3>
              <h6 className='text-xs'>
                With just few clicks, you can vote your preferred candidates
              </h6>
            </div>
            <div className='column 3 text-center w-4/12 align-center justify-center p-6'>
              <div className='relative justify-center align-center'>
                <TiStarburst className='union text-9xl text-center mx-16' />
                <img
                  src={people}
                  alt='secure'
                  className='union-in w-16 h-16 absolute left-0 top-0 text-center mt-14 ml-32 text-center'
                />
              </div>
              <h3 className='text-xl'>Real Time Results </h3>
              <h6 className='text-xs'>
                View real time voting results and scores for each candidate.
              </h6>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Features;