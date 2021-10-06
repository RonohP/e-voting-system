import React from 'react';
import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useMutation, useQueryClient } from 'react-query';
import Logo from '../../images/WTLOGO.png';
import SignUp from '../../images/SignUp.svg';
import '../../components/NavBar/NavBar.css';
import '../../components/Footer/Footer';
import './Register.css';
import { REGISTER_URL } from '../../api/urls';
import { useAxios } from '../../api/hooks/useAxios';

const eye = <FontAwesomeIcon icon={faEye} />;
const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [users] = useState([]);
  const history = useHistory();
  const axios = useAxios();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const queryClient = useQueryClient();
  const password = useRef({});
  password.current = watch('password', '');

  const registeruser = async (data) => {
    const { data: response } = await axios.post(`${REGISTER_URL}`, data);
    return response.data;
  };

  const { mutate } = useMutation(registeruser, {
    onSuccess: (data) => {
      toast.success('register successful, please login');
      history.push('/login');
    },
    onError: () => {
      toast.error('there was an error');
    },
    onSettled: () => {
      queryClient.invalidateQueries('create');
    },
  });

  const handleRegister = (data) => {
    console.log(data);
    const user = {
      schoolId: data.studentID,
      password: data.password,
    };
    mutate(user);
  };

  console.log(users);

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
        <div className='flex m-6 flex-col md:flex-row md: m-12 lg:m-20'>
          <div className='left w-full h-auto p-2 m-4 md:w-1/2 my-auto'>
            <img src={SignUp} alt='SignUp' />
          </div>
          <div className='right w-full h-auto p-2 mt-20 md:w-1/2'>
            <div className='w-full mx-0 2xl:w-3/4 2xl:mx-auto'>
              <h1 className='text-xl mx-6 font-bold text-center sm:text-3xl xl:text-5xl'>
                Welcome!
              </h1>
              <p className='my-4 p-2 font-normal text-xs mx-4 lg:text-sm xl:text-lg xl:mx-6 xl:p-4'>
                Register as a voter on the women techsters University voting
                platform to vote in your preferred candidate.
              </p>
              <div className=''>
                <form onSubmit={(e) => e.preventDefault()} className='p-2 mx-2'>
                  <div className='row'>
                    <div className='col-25 w-1/4'>
                      <label
                        htmlFor='studentID'
                        className='my-2 p-1 text-base inline-block xl:text-xl'
                      >
                        {' '}
                        Student ID:
                      </label>
                    </div>
                    <div className='col-75 w-3/4'>
                      <input
                        type='text'
                        name='studentID'
                        placeholder='Student ID No.'
                        id='std-id'
                        {...register('studentID', {
                          required: 'student Id is Required',
                        })}
                        className='w-full focus:outline-none rounded-full p-3 border border-solid resize-y'
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
                        className='w-full focus:outline-none rounded-full p-3 border border-solid resize-y'
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
                    <button
                      type='submit'
                      onClick={handleSubmit(handleRegister)}
                      className='register-btn border rounded-full py-2 px-6 border-solid w-full my-8 block font-bold sm:float-right md:w-full lg:w-3/4 xl:w-1/4'
                      style={{ background: '#93278F', color: '#FFFF' }}
                    >
                      Sign Up
                    </button>
                  </div>
                  <p className='full text-justify font-normal text-xs lg:text-sm xl:text-lg lg:mx-6'>
                    By Clicking the sign up button, you agree with our
                    <Link
                      className='p-2 terms-conditions font-bold'
                      to='/terms'
                    >
                      Terms and Conditions.
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
