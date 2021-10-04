import React from 'react';
import { Fragment } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import message from '../images/Messaging-pana.svg';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

function Contact() {
  function sendMail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_cqotw2j',
        'template_s8ea2pi',
        e.target,
        'user_j0OTxp4OXPCqFq31CfhjF'
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Fragment>
      <NavBar />
      <section className='relative h-full align-center w-full'>
        <div>
          <h1 className='text-5xl font-bold text-center mt-36 mx-52'>
            Thank you for using the Women Techsters voting system
          </h1>
          <p className='text-center mt-10 font-normal text-lg mx-5'>
            Kindly contact Us Via this platform, we aim to please our users and
            can’t do that without your feedbacks, reviews and comments
          </p>
        </div>
        <div className='flex mx-20 my-20 flex-row'>
          <div className='left w-1/2 h-auto p-2'>
            <img src={message} alt='Messaging-pana' />
          </div>
          <div className='right w-1/2 h-auto p-2'>
            <div className='p-2'>
              <form className='p-2 mx-2' onSubmit={sendMail} action='/thanks'>
                <label htmlFor='name' className='mx-2 my-2 p-1 text-base'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='w-full rounded-full py-3 px-6 border border-solid resize-y my-2'
                  style={{ borderColor: '#93278F' }}
                />
                <label htmlFor='studentId' className='mx-2 my-2 p-1 text-base'>
                  Student ID No.
                </label>
                <input
                  type='text'
                  name='studentId'
                  id='studentId'
                  className='w-full rounded-full py-3 px-6 border border-solid resize-y my-2'
                  style={{ borderColor: '#93278F' }}
                />
                <label htmlFor='department' className='mx-2 my-2 p-1 text-base'>
                  Department
                </label>
                <input
                  type='text'
                  name='department'
                  id='department'
                  className='w-full rounded-full py-3 px-6 border border-solid resize-y my-2'
                  style={{ borderColor: '#93278F' }}
                />
                <label htmlFor='questions' className='mx-2 my-2 p-1 text-base'>
                  Questions and Comments
                </label>
                <textarea
                  name='questions'
                  id='questions'
                  cols='10'
                  rows='5'
                  className='w-full rounded-3xl py-3 px-6 border border-solid resize-y my-2'
                  style={{ borderColor: '#93278F' }}
                ></textarea>
                <button
                  className='contact-btn border rounded-full py-2 px-8 border-solid w-full my-2 font-bold'
                  style={{ background: '#93278F', color: '#FFFF' }}
                  type='submit'
                >
                  <Link className='p-2' to='/thanks'>
                    Submit
                  </Link>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}

export default Contact;
