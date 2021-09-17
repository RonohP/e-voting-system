import React from 'react';
import { useState, useRef } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import {Link} from 'react-router-dom';
import Logo from '../../images/WTLOGO.png';
import SignUp from '../../images/SignUp.svg';
import '../../components/NavBar/NavBar.css';
import '../../components/Footer/Footer';
import './Register.css'

const Register = () => {
    const [users, setUsers] = useState([]);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch('password', '');
  const handleRegister = (data) => {
    console.log(data);
    const user = {
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    setUsers([...users, user]);
    toast.success('register successful, please login');
    history.push('/login');
  };

  console.log(users);
   
    return (
        <div>
            <div className="maincontainer">
                <nav className='navbar flex justify-between item- center mb-10 h-16 w-full sm:pl-2 md:pl-10 lg:pl-12 md:w-full '>
                    <Link to='/' className='flex flex-row pt-6'>
                        <img src={Logo} alt='WTLogo' className='w-12 h-11' />
                            <p className='logo-text inline-block pt-6 pl-1 font-sans font-bold'>
                            echsters University
                            </p>
                    </Link>
                </nav>
                <div className='flex mx-20 my-20 flex-row'>
                     <div className='left w-1/2 h-auto p-2'>
                        <img src={SignUp} alt='SignUp' />
                     </div>
                    <div className='right w-1/2 h-auto p-2 mt-20'>
                        <h1 className='text-5xl mx-6 font-bold text-left '>
                        Welcome!
                        </h1>
                        <p className='text-left w-3/4  mt-10 font-normal text-lg mx-6'>
                        Register as a voter on the women techsters University 
                        voting platform to vote in your preferred candidate.
                        </p>
                        <div className='p-2'>
                            <form onSubmit={(e) => e.preventDefault()} className='p-2 mx-2'>
                            <label htmlFor='std-id' className=' my-2 p-1 text-base'>
                    
                            </label>
                            <input
                            type='number'
                            name='std-id'
                            placeholder='Student ID No.'
                            id='std-id'
                            className='w-3/4   rounded-full py-3 px-6 border border-solid resize-y my-2'
                            style={{ borderColor: '#93278F' }}
                            />
                                
                                <label htmlFor='email' className='mx-2 my-2 p-1 text-base'>
                                    
                                </label>
                                <input
                                type='email'
                                placeholder=' Student mail address'
                                name='email'
                                id='email'
                                {...register('email', {
                                  required: 'Email is required',
                                  pattern: {
                                    value: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Enter a valid e-mail address',
                                  },
                                })}
                                
                                className='w-3/4  rounded-full py-3 px-6 border border-solid resize-y my-2'
                                style={{ borderColor: '#93278F' }}
                                />
                                {errors.email && (
                                <p className='errorMessage'>{errors.email.message}</p>
                                )}
                                <label
                                htmlFor='password'
                                className='mx-2 my-2 p-1 text-base'
                                >
                               
                                </label>
                                <input
                                type='password'
                                name='password'
                                id='password'
                                placeholder='Password'
                                {...register('password', {
                                  required: 'You must specify a password',
                                  minLength: {
                                    value: 8,
                                    message: 'Password must have at least 8 characters',
                                  },
                                })}
                              
                                className='w-3/4  rounded-full py-3 px-6 border border-solid resize-y my-2'
                                style={{ borderColor: '#93278F' }}
                                />
                                {errors.password && (
                                <p className='errorMessage'>{errors.password.message}</p>
                                )}
                                 <label
                                htmlFor='password'
                                className='mx-2 my-2 p-1 text-base'
                                >
                            
                                </label>
                                <input
                                type='password'
                                name='ConfirmPassword'
                                id='password'
                                placeholder='Confirm password'
                                {...register('confirmPassword', {
                                    validate: (value) =>
                                      value === password.current || 'The passwords do not match',
                                  })}
                              
                                className='w-3/4  rounded-full py-3 px-6 border border-solid resize-y my-2'
                                style={{ borderColor: '#93278F' }}
                                />
                                 {errors.confirmPassword && (
                            <p className='errorMessage'>{errors.confirmPassword.message}</p>
                                )}
                 
                                <button
                                 type='submit'
                                 
                                 onClick={handleSubmit(handleRegister)}
                                 className='contact-btn border rounded-full py-2 px-8 border-solid w-3/4 my-2 font-bold'
                                style={{ background: '#93278F', color:'#FFFF' }}
                                >
                                 
                                Sign Up
                                
                                </button>
                                <p className=' w-3/4 text-center mt-10 font-normal text-lg'>
                                By Clicking the sign up button, you agree with our
                                <Link className='p-2 terms-conditions font-bold' to='/terms'>
                                Terms and Conditions.
                       
                                 </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                
                </div>

            </div>
        </div>
    )
}

export default Register


