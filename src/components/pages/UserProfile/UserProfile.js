import React from 'react';

const UserProfile = () => {
  return (
    <div
      className='dashboard-main-container mt-20 mt-lg-24'
      id='dashboard-body'
    >
      {' '}
      <div className='container'>
        <div className='mb-12'>
          <div className='col-lg-6 mb-lg-5 mb-5'>
            <h3 className='font-size-6 mb-0'>Edit Profile</h3>
          </div>
          <div className='bg-white shadow-8 pt-7 rounded pb-4 px-11 mb-10'>
            <div className='pl-1 pr-1 pt-2 pb-6  '>
              <div className='row'>
                <div className='col-md-12 m-0 p-0'>
                  <h3 className='font-size-6 mb-6 p-0'>Edit Profile Details</h3>
                  <form action='/'>
                    <div className='row'>
                      <div className='col-lg-6 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          First Name
                        </label>
                        <input
                          id='email3'
                          type='text'
                          className='form-control'
                          placeholder=' First Name'
                        />
                      </div>
                      <div className='col-lg-6 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          Last Name
                        </label>
                        <input
                          id='subject3'
                          type='text'
                          className='form-control'
                          placeholder='Last Name'
                        />
                      </div>
                      <div className='col-lg-12 pt-4'>
                        <button className='btn btn-primary text-uppercase  h-px-48'>
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-18'>
          <div className='bg-white shadow-8 pt-7 rounded pb-4 px-11 mb-10'>
            <div className='pl-1 pr-1 pt-2 pb-6  '>
              <div className='row'>
                <div className='col-md-12 m-0 p-0'>
                  <h3 className='font-size-6 mb-6 p-0'>Change password</h3>
                  <form action='/'>
                    <div className='row'>
                      <div className='col-lg-4 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          Old Password
                        </label>
                        <input
                          id='email33'
                          type='password'
                          className='form-control'
                          placeholder='Old Password'
                        />
                      </div>
                      <div className='col-lg-4 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          New Password
                        </label>
                        <input
                          id='subject33'
                          type='password'
                          className='form-control'
                          placeholder='New Password'
                        />
                      </div>
                      <div className='col-lg-4 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          Confirm Password
                        </label>
                        <input
                          id='subject333'
                          type='password'
                          className='form-control'
                          placeholder='Confirm Password'
                        />
                      </div>
                      <div className='col-lg-12 pt-4'>
                        <button className='btn btn-primary text-uppercase  h-px-48'>
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
