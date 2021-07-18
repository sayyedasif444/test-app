import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../../apis/auth';

const LoginPage = ({ login, isAuthenticated, alerts }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showmsg, setShowmsg] = useState('d-none');

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    var abc = await login(email, password);
    console.log(abc);
  };

  if (isAuthenticated) {
    return <Redirect to='/company-management' />;
  }
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
                  Welcome Back
                </h3>
                <p className='mb-0 font-size-4 text-white'>
                  Log in to continue your account and explore new jobs.
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
              <form onSubmit={(e) => onSubmit(e)}>
                <div className='form-group'>
                  <label className='font-size-4 text-black-2 font-weight-semibold line-height-reset'>
                    E-mail
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='example@gmail.com'
                    name='email'
                    value={email}
                    onChange={(e) => onChange(e)}
                  />
                </div>
                <div className='form-group'>
                  <label className='font-size-4 text-black-2 font-weight-semibold line-height-reset'>
                    Password
                  </label>
                  <div className='position-relative'>
                    <input
                      type='password'
                      className='form-control'
                      name='password'
                      value={password}
                      onChange={(e) => onChange(e)}
                      placeholder='Enter password'
                    />
                  </div>
                </div>

                <div className='form-group mb-8'>
                  <button
                    className='btn btn-primary btn-medium w-100 rounded-5 text-uppercase'
                    type='submit'
                  >
                    Log in{' '}
                  </button>
                </div>

                <p className='font-size-4 text-center heading-default-color'>
                  Forgotten your password?{' '}
                  <Link to='/forgot-password' className='text-primary'>
                    Reset Password
                  </Link>
                </p>
                <div className={'col-12 p-0 m-0 ' + showmsg}>
                  <div
                    className='alert alert-warning alert-dismissible fade show'
                    role='alert'
                  >
                    <strong>Holy guacamole!</strong> You should check in on some
                    of those fields below.
                    <button
                      type='button'
                      className='btn close'
                      data-dismiss='alert'
                      aria-label='Close'
                      style={{ minWidth: 'auto' }}
                    >
                      <span className='font-size-5' aria-hidden='true'>
                        &times;
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  alerts: PropTypes.array,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  alerts: state.alert,
});
export default connect(mapStateToProps, { login })(LoginPage);
