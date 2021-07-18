import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div
      className='col-md-7'
      id='login_form'
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
      }}
    >
      <div className='login-modal-main bg-white rounded-8 overflow-hidden'>
        <div className='row no-gutters'>
          <div className='col-lg-5 col-md-6'>
            <div className='pt-10 pb-6 pl-11 pr-12 bg-black-2 h-100 d-flex flex-column dark-mode-texts'>
              <div className='pb-9'>
                <h3 className='font-size-8 text-white line-height-reset pb-4 line-height-1p4'>
                  Welcome
                </h3>
                <p className='mb-0 font-size-4 text-white'>
                  Sign-up to continue your account and explore new jobs.
                </p>
              </div>
              <div className='border-top border-default-color-2 mt-auto'>
                <div className='d-flex mx-n9 pt-6 flex-xs-row flex-column'>
                  <div className='pt-5 px-9'>
                    <h3 className='font-size-7 text-white'>295</h3>
                    <p className='font-size-3 text-white gr-opacity-5 line-height-1p4'>
                      New jobs posted today
                    </p>
                  </div>
                  <div className='pt-5 px-9'>
                    <h3 className='font-size-7 text-white'>14</h3>
                    <p className='font-size-3 text-white gr-opacity-5 line-height-1p4'>
                      New companies registered
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-7 col-md-6'>
            <div className='bg-white-2 h-100 px-11 pt-11 pb-7'>
              <form action='/'>
                <div className='form-group'>
                  <label className='font-size-4 text-black-2 font-weight-semibold line-height-reset'>
                    E-mail
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='example@gmail.com'
                    id='email'
                  />
                </div>
                <div className='form-group'>
                  <label className='font-size-4 text-black-2 font-weight-semibold line-height-reset'>
                    Name
                  </label>
                  <div className='position-relative'>
                    <input
                      type='text'
                      className='form-control'
                      id='password'
                      placeholder='Enter Your Name'
                    />
                  </div>
                </div>
                <div className='form-group'>
                  <label className='font-size-4 text-black-2 font-weight-semibold line-height-reset'>
                    Company
                  </label>
                  <div className='position-relative'>
                    <input
                      type='text'
                      className='form-control'
                      id='password'
                      placeholder='Enter Your Company'
                    />
                  </div>
                </div>

                <div className='form-group mb-8'>
                  <button className='btn btn-primary btn-medium w-100 rounded-5 text-uppercase'>
                    Register{' '}
                  </button>
                </div>
                <p className='font-size-4 text-center heading-default-color'>
                  Alreay have account?{' '}
                  <Link to='/login' className='text-primary'>
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
