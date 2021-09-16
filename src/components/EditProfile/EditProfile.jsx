import React from 'react';
import ProfileImage from '../ProfileImage/ProfileImage';
import UserUpdate from '../UserUpdate/UserUpdate';

function EditProfile() {
   
    return (
        <div>
             <section className='relative h-full w-full'>
                <h1 className='text-5xl font-bold mt-20 mb-10
                mx-6'>
                 Account
                </h1>
                <p className='mx-6  align-center'>Make changes to your account</p>
                <ProfileImage/> 
                <UserUpdate/>
                </section>
             
        </div>
    )
}

export default EditProfile
