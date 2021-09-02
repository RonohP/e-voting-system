import React from 'react';
import './Stats.css';

function Stats() {
    return (
      <section className='stats py-24'>
        <div className='max-width'>
          <h1 className='title relative text-center text-5xl font-medium mb-14 pb-5'>
            Monitor the voting process
          </h1>
          <div className='content flex flex-warp align-center justify-between text-center'>
            <div className=' w-1/3 text-center align-center h-auto my-8 relative'>
              <div className='circle one w-56 h-56 my-6 ml-16'></div>
              <span className='text-4xl font-semibold text-center p-8 absolute'>
                500
              </span>
              <p className='font-normal text-base'>Number of registered voters</p>
            </div>
            <div className=' w-1/3 text-center align-center h-auto my-8 relative'>
              <div className='circle two w-56 h-56 my-6 ml-16'></div>
              <span className=' text-4xl font-semibold text-center p-8 absolute'>
                480
              </span>
              <p>Total Number of votes</p>
            </div>
            <div className='  w-1/3 text-center align-center h-auto my-8 relative'>
              <div className='circle three w-56 h-56 my-6 ml-16'></div>
              <span className='text-4xl font-semibold text-center p-8 absolute'>
                30
              </span>
              <p>Number of registered voters</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Stats;