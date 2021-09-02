import React from 'react';
import './How.css';
import cheerful from '../../images/how-image.svg';
import frame from '../../images/Frame.svg';

function How() {
    return (
      <section className='how py-24'>
        <div className='max-width'>
          <h1 className='title relative text-center text-5xl font-medium mb-14 pb-5'>
            How it works
          </h1>
          <div className='content flex flex-warp align-center justify-between'>
            <div className='timeline relative mx-auto w-1/2'>
              <div className='container relative m-auto block ml-24'>
                <ul className='my-10 p-0 inline-block'>
                  <li className='one list-none m-auto pb-24 pl-7 relative'>
                    <h3 className=' font-semibold text-2xl relative'>
                      Sign Up
                    </h3>
                    <p>Create an account on the platform to vote.</p>
                  </li>
                  <li className='two list-none m-auto pb-24 pl-7 relative'>
                    <h3 className=' font-semibold text-2xl relative'>Vote</h3>
                    <p>Vote for your preferred choice of candidate.</p>
                  </li>
                  <li className='three list-none m-auto pb-24 pl-7 relative'>
                    <h3 className=' font-semibold text-2xl relative'>
                      View Election Results
                    </h3>
                    <p>View election result of various candidates</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='image w-1/2'>
              <div className='image-stack grid relative ml-24 mt-48'>
                <div className='image-top'>
                  <img src={cheerful} alt='cheerful-lady' />
                </div>
                <div className='image-bottom'>
                  <img src={frame} alt='frame' className='frame h-64' />
                  <p className='absolute font-normal text-3xl items-center right-28 top-32'>
                    I VOTED
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default How;