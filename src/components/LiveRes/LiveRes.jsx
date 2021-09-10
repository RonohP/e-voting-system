import React from 'react';
import './LiveRes.css';
import {Link} from 'react-router-dom';

function LiveRes() {
    return (
      <section className='live-res py-24'>
        <div className='max-width'>
          {/* <h1 className='title relative text-center text-5xl font-medium mb-14 pb-5'>
            View Live Results
          </h1> */}
          <div className='content flex flex-warp align-center justify-between'>
            <div className='left'>
              <div className='chart-div h-96 w-full p-10 relative'>
                <h3 className='left-label font-bold text-1xl absolute'>
                  No. of Voters
                </h3>
                <ul className='chart table table-fixed max-w-2xl w-3/5 h-auto mx-auto'>
                  <li className='relative table-cell h-52 align-bottom'>
                    <span className='one h-28 mx-4 block'></span>
                  </li>
                  <li className='relative table-cell h-52 align-bottom'>
                    <span className='two h-3 mx-4 block'></span>
                  </li>
                  <li className='relative table-cell h-52 align-bottom'>
                    <span className='three h-24 mx-4 block'></span>
                  </li>
                  <li className='relative table-cell h-52 align-bottom'>
                    <span className=' four h-14 mx-4 block'></span>
                  </li>
                  <li className='relative table-cell h-52 align-bottom'>
                    <span className=' five h-48 mx-4 block'></span>
                  </li>
                </ul>
                <h3 className='right-label font-bold text-1xl text-center pt-3'>
                  Candidates
                </h3>
              </div>
            </div>
            <div className='right w-2/5'>
              <div className='live-text p-4'>
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