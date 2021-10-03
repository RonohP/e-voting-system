import React from 'react';
import './LiveRes.css';
import { Link } from 'react-router-dom';
import BarChart from '../BarChart';

function LiveRes() {
  return (
    <section className='live-res py-24'>
      <div className='max-width'>
        <div className='content flex flex-warp align-center justify-between'>
          <div className='left w-1/2 relative'>
            <BarChart />
          </div>
          <div className='right w-1/2'>
            <div className='live-text p-4 mx-6 my-6'>
              <h1 className='text-5xl font-bold pb-10'>View Live Results</h1>
              <p className='text-base font-normal pb-8'>
                View live results of the election instantly on our home page
                without logging in. You can also check out the electoral
                candidate page via the link below
              </p>
              <button className='candidate-btn border rounded-full py-2 px-8 border-solid w-60'>
                <Link className='' to='/candidate'>
                  View candidates profile
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveRes;
