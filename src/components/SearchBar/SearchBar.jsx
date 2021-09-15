import React from 'react'
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { IoMdNotificationsOutline } from 'react-icons/io';
import './SearchBar.css'

export default function SearchBar() {
    return (
      <div className='flex w-full content-center items-center'>
        <form className=' mx-2 my-2 w-3/5 '>
          <input
            type='text'
            name='search'
            id='search'
            placeholder='Search...'
            className='search w-9/12 mx-4 px-2 py-1'
          />
          <Link className=''>
            <button>
              <BsSearch />
            </button>
          </Link>
        </form>
        <div className='w-1/5 mx-2 my-2 text-center'>
          <button className='relative w-24 h-24'>
            <span className='absolute notification-icon'>
              <IoMdNotificationsOutline className='text-5xl' />
            </span>
            <span className='notification-label inline-block bg-red-600 text-white p-1 w-2.5 h-2.5 rounded-full absolute'></span>
          </button>
        </div>
        <div className='w-1/5 mx-2 my-2 text-center items-center flex '>
            <Link to='/edit-profile'>
              <button className='profile-btn relative w-16 h-16 font-bold inline-block'>
                <span>
                  <img
                  src='https://thumbs.dreamstime.com/b/happy-black-woman-showing-ok-gesture-smiling-looking-camera-satisfied-hand-cheerful-african-female-customer-student-138434650.jpg'
                  alt='profile'
                  className='absolute w-16 h-16'
                  />
                </span>
              </button>
              <p className='text-base font-bold p-4'>Jane Doe</p>
            </Link>
            

        </div>
      </div>
    );
}
