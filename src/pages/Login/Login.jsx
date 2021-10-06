import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../images/WTLOGO.png';
import { useMutation, useQueryClient } from 'react-query';
import Log from '../../images/Log.svg';
import '../../components/NavBar/NavBar';
import './Login.css';
import { useAxios } from '../../api/hooks/useAxios';
import { LOGIN_URL } from '../../api/urls';
import { useAuth } from '../../utils/hooks/useAuth';

const eye = <FontAwesomeIcon icon={faEye} />;

const Login = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const axios = useAxios();

  const { signin } = useAuth();

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const loginuser = async (data) => {
    const { data: response } = await axios.post(`${LOGIN_URL}`, data);
    console.log(response, 'data returned');

    return response;
  };

  const { mutate } = useMutation(loginuser, {
    onSuccess: (data) => {
      console.log(data, '<<<>>>>');
      signin(data, data.token);
      toast.success('login successful');
      history.push('/dashboard');
    },
    onError: () => {
      toast.error('Invalid credentials, Please check your Id and Password.');
    },
    onSettled: () => {
      queryClient.invalidateQueries('create');
    },
  });

  const handleLogin = (loginData) => {
    const user = {
      schoolId: loginData.studentID,
      password: loginData.password,
    };
    mutate(user);
  };

  return (
    <div>
      <div className='maincontainer'>
        <nav className='navbar flex justify-between item- center mb-10 h-16 w-full sm:pl-2 md:pl-10 lg:pl-12 md:w-full '>
          <Link to='/home' className='flex flex-row pt-6 mx-2'>
            <img src={Logo} alt='WTLogo' className='w-12 h-11' />
            <p className='logo-text inline-block pt-6 pl-1 font-sans font-bold'>
              echsters University
            </p>
          </Link>
        </nav>
        <div className='flex m-6 flex-col md:flex-row md:m-12  lg:m-20'>
          <div className='left w-full h-auto p-2 m-4 md:w-1/2 text-center object-center my-auto object-contain'>
            <img src={Log} alt='Login' className='text-center' />
          </div>
          <div className='right w-full h-auto p-2 my-20 md:w-1/2'>
            <h1 className='text-xl font-bold text-center mx-8 sm:text-3xl xl:text-4xl'>
              Welcome Back!
            </h1>
            <p className='my-4 p-2 font-normal text-xs mx-4 lg:text-sm xl:text-lg xl:mx-6 xl:p-4'>
              Welcome back to the women techsters University voting platform.
              Sign in to vote in your preferred candidate.
            </p>
            <div className='mx-0 xl:mx-auto'>
              <form onSubmit={(e) => e.preventDefault()} className='p-2 mx-2'>
                <div className='row'>
                  <div className='col-25 w-1/4'>
                    <label
                      htmlFor='studentID'
                      className=' my-2 p-1 text-base inline-block xl:text-xl'
                    >
                      Student ID:
                    </label>
                  </div>
                  <div className='col-75 w-3/4'>
                    <input
                      type='string'
                      name='studentID'
                      placeholder='Student ID No.'
                      id='std-id'
                      {...register('studentID', {
                        required: 'student Id is Required',
                      })}
                      className='w-full rounded-full p-3 border border-solid resize-y focus:outline-none'
                      style={{ borderColor: '#93278F' }}
                    />

                    {errors.studentID && (
                      <p className='errorMessage' style={{ color: 'red' }}>
                        {errors.studentID.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className='row lg:mt-8'>
                  <div className='col-25 w-1/4'>
                    <label
                      htmlFor='password'
                      className='my-2 p-1 text-base inline-block xl:text-xl'
                    >
                      Password:
                    </label>
                  </div>
                  <div className='col-75 w-3/4'>
                    <input
                      type={passwordShown ? 'text' : 'password'}
                      name='password'
                      id='password'
                      placeholder='Enter password...'
                      {...register('password', {
                        required: 'You must specify a password',
                        minLength: {
                          value: 8,
                          message: 'Password must have at least 8 characters',
                        },
                      })}
                      className='w-full rounded-full p-3 border border-solid resize-y focus:outline-none'
                      style={{ borderColor: '#93278F', marginLeft: '' }}
                    />
                    <i
                      style={{ margin: '-40px', color: '#93278F' }}
                      onClick={togglePasswordVisiblity}
                    >
                      {eye}
                    </i>
                    {errors.password && (
                      <p className='errorMessage' style={{ color: 'red' }}>
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className='row lg:mt-8'>
                  <label className='block my-4  lg:float-right lg:w-3/4'>
                    <input
                      type='checkbox'
                      value='Remember Password '
                      name='remember'
                      style={{
                        borderColor: '#93278F',
                        padding: '',
                        display: 'inline-block',
                      }}
                    />
                    <span className='px-2 text-xs inline-block xl:text-base'>
                      Remember Password
                    </span>
                    <span>
                      <Link
                        className='forget-password px-2 text-xs inline-block font-bold sm:float-right sm:my-1.5 xl:text-base xl:my-0'
                        to='/forgotPassword'
                      >
                        Forget Password?
                      </Link>
                    </span>
                  </label>
                </div>
                <div className='row lg:mt-8'>
                  <button
                    type='submit'
                    onClick={handleSubmit(handleLogin)}
                    className='register-btn border rounded-full py-2 px-6 border-solid block w-full mt-0 sm:float-right lg:w-3/4 xl:w-1/4'
                    style={{ background: '#93278F', color: '#FFFF' }}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
