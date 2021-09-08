import React from 'react';
import {Link} from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi';
import './Terms.css';

export default function Terms() {
    return (
        <div>
            <section className='relative h-full w-full'>
                    <h1 className='text-5xl font-bold terms text-center mt-20 mx-52'>
                    Terms and Conditions 
                    </h1>
                <div className='mx-10 p-5'>
                    
                    <p className=' mt-4 mb-4 font-normal text-base '>
                    Last Updated : September 05, 2021
                    </p>
                    <p className='head'>Basic Principle</p>
                </div>
                <div className='mx-10 p-5'>
                    <p className='head'> 1. Scope of application</p>
                    <p> These General Terms and Conditions for users of this platform govern the access to and use of the Services of this platform. 
                        Please read these General Terms and Conditions carefully before registering as a voter or aspirant , 
                        as your use of the services ,
                    opening of an account, shall be construed as your acceptance of the terms of the General Terms and Conditions. 
                    Your acceptance of the General Terms and Conditions shall be construed as your agreement to be bound by the terms of the General Terms and Conditions with respect to your access and use of the platform.
                    </p>
                </div >
                <div className='mx-10 p-5'>
                    <p className='head'>1.1 Voters</p>
                    <p>For you to access the ballot to enable you to exercise your voting rights,
                         you are required to create a User account on the website as determined, 
                         and accept the terms of this General Terms and Condition and other terms as the school may deem necessary. 
                         You shall accurately and truthfully complete and keep up to date all information you provide in the registration process. 
                         You are also solely responsible for the security of your password under your user account. 
                         Accounts may not be created automatically such as through bots. 
                         Your account shall be for the academic years you are a student of this school or from the date you register as a voter till the day you graduate from the school. 
                         Your voter account shall renew automatically for the successive voting periods until you /user terminates the account registration 
                         or immediately after you graduate from the school which will be automatically as the end of your voting rights period.</p>
                </div>
                <div className='mx-10 p-5'>
                    <p className='head'>1.2 Aspirants </p>
                    <p>Or you to qualify to be voted for on the platform as a candidate you are required to create a candidate account on the website as determined, 
                        and accept the terms of this General Terms and Conditions and other terms as the school may deem necessary.
                         You shall accurately and truthfully complete and keep up to date all information you provide in the registration process. 
                         You are also solely responsible for the security of your password under your user account. 
                         Accounts may not be created automatically such as through bots. 
                         Your account shall be for the elections being held on a single election period 
                         that you apply as a candidate for any academic year elections as long as you fulfill the qualifications 
                         needed for a position that you wish to be elected. Your voter account shall not renew 
                         for any other successive elections held in the school. 
                         Your voter account shall be automatically terminated after the elections or
                         if you the candidate terminates before the Election Day.</p>
                </div>
                <div className='mx-10 p-5'>
                    <p className='head'>1.3 uploaded files</p>
                    <p> you acknowledge that you are responsible for ay uploaded Content, 
                        and that you have full responsibility for such content including and not limited to its legality, 
                        reliability and accuracy</p>
                </div>
                <div className='mx-10 p-5 align-center '>
                    <button 
                    type='submit'
                    className='contact-btn border rounded-full py-2 align-center m-8 px-8 border-solid my-2 font-bold'
                    style={{ background: '#FFFF', color:'#CA1C1C', borderRadius:'8px', marginLeft: '600px',  }}>
                    Decline
                    </button>
                    
                    <button
                    type='submit'
                    className='contact-btn border rounded-full py-2 align-center px-8 border-solid  my-2 font-bold'
                    style={{ background: '#93278F', color:'#FFFF', borderRadius:'8px',  marginRight: '500px'}}
                    >Accept</button>
                </div>
                <div  className= 'mx-10 p-5 align-center'>
                <button
                className='back-btn border rounded-full py-2 px-10 border-solid w-auto mt-8 inline-block'
                style={{ color: '#FFFF', background: '#93278F', borderRadius:'8px',  marginLeft: '650px', marginRight: '650px'}}
              >
                <Link
                  className=' flex flex-row justify-evenly font-bold'
                  to='/home'
                >
                  <BiArrowBack className='p-1 text-3xl font-bold' /> Go Back
                </Link>
              </button>
                </div>
          </section>

        </div>
    )
}
