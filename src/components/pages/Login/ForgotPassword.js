import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
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
                <h3 className='font-size-7 text-white line-height-reset pb-4 line-height-1p4'>
                  Forgot Password
                </h3>
                <p className='mb-0 font-size-4 text-white'>
                  Please Enter the Email ID to reset your password
                </p>
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

                <div className='form-group mb-8'>
                  <button className='btn btn-primary btn-medium w-100 rounded-5 text-uppercase'>
                    Proceed{' '}
                  </button>
                </div>
                <p className='font-size-4 text-center heading-default-color'>
                  Remebered your password?{' '}
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

export default ForgotPassword;
