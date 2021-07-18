import React from 'react';
import { Link } from 'react-router-dom';

const JobManagement = ({ editjob }) => {
  return (
    <div
      className='dashboard-main-container mt-25 mt-lg-24'
      id='dashboard-body'
    >
      <div className='container'>
        <div className='mb-18'>
          <div className='row mb-8 align-items-center'>
            <div className='col-lg-6 mb-lg-0 mb-4'>
              <h3 className='font-size-6 mb-0'>Posted Jobs (4)</h3>
            </div>
            <div className='col-lg-6'>
              <div className='d-flex flex-wrap align-items-center justify-content-lg-end'>
                <p className='font-size-4 mb-0 mr-6 py-2'>Select Company:</p>
                <div className='h-px-48'>
                  <select
                    name='country'
                    id='country'
                    className='nice-select pl-7 h-100 arrow-3 arrow-3-black min-width-px-273 font-weight-semibold text-black-2'
                  >
                    <option value='' data-display='Company 1'>
                      Company 1
                    </option>
                    <option value=''>Company 2</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className='row mb-0 align-items-center'>
            <form
              action='/'
              className='col-12 search-form search-2-adjustment ml-lg-0 ml-md-15'
            >
              <div className='filter-search-form-2 bg-white rounded-sm shadow-7 pr-6 py-6 pl-6'>
                <div className='filter-inputs'>
                  <div className='form-group position-relative w-lg-45 w-xl-40 w-xxl-45'>
                    <input
                      className='form-control focus-reset pl-13'
                      type='text'
                      id='keyword'
                      placeholder='UI Designer'
                    />
                    <span className='h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6'>
                      <i className='icon icon-zoom-2 text-primary font-weight-bold'></i>
                    </span>
                  </div>

                  <div className='form-group position-relative w-lg-55 w-xl-60 w-xxl-55'>
                    <select
                      name=''
                      id=''
                      className='nice-select pl-13 h-100 arrow-3 font-size-4'
                      style={{ display: 'none' }}
                    >
                      <option data-display='Job Category'>Category</option>
                      <option value=''>United States of America</option>
                      <option value=''>United Arab Emirates</option>
                      <option value=''>Bangladesh</option>
                      <option value=''>Pakistan</option>
                    </select>
                    <div className='nice-select pl-13 h-100 arrow-3 font-size-4'>
                      <span className='current text-uppercase'>Category</span>
                      <ul className='list'>
                        <li
                          data-value='City'
                          data-display='City, state, zip code or (Remote)'
                          className='option selected'
                        >
                          Category
                        </li>
                        <li data-value='' className='option'>
                          United States of America
                        </li>
                        <li data-value='' className='option'>
                          United Arab Emirates
                        </li>
                        <li data-value='' className='option'>
                          Bangladesh
                        </li>
                        <li data-value='' className='option'>
                          Pakistan
                        </li>
                      </ul>
                    </div>
                    <span className='h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6'>
                      <i className='fas fa-briefcase text-primary font-weight-bold'></i>
                    </span>
                  </div>
                </div>
                <div className='button-block'>
                  <button className='btn btn-primary line-height-reset h-100 btn-submit w-100 text-uppercase'>
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className='row mt-8'>
            <div className='col-md-6 col-lg-6 col-xl-4 col-sm-6 d-flex align-items-stretch mb-8'>
              <div className='bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments'>
                <a href='#!' className='font-size-3 d-block mb-0 text-gray'>
                  Web Developer
                </a>
                <h2 className='mt-n4'>
                  <a
                    className='font-size-7 text-black-2 font-weight-bold mb-4'
                    href='#!'
                  >
                    Matt Mardock
                  </a>
                </h2>
                <ul className='list-unstyled mb-1 card-tag-list'>
                  <li>
                    <a
                      href='#!'
                      className='bg-regent-opacity-15 text-denim font-size-3 rounded-3'
                    >
                      <i className='icon icon-pin-3 mr-2 font-weight-bold'></i>{' '}
                      Berlyn
                    </a>
                  </li>
                  <li>
                    <a
                      href='#!'
                      className='bg-regent-opacity-15 text-orange font-size-3 rounded-3 pl-4'
                    >
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      href='#!'
                      className='bg-regent-opacity-15 text-eastern font-size-3 rounded-3'
                    >
                      <i className='fa fa-dollar-sign mr-2 font-weight-bold'></i>{' '}
                      80K-90K
                    </a>
                  </li>
                </ul>
                <p className='mb-7 font-size-4 text-gray'>
                  We are looking for Enrollment Advisors who are looking to take
                  30-35 appointments per week. All leads are pre-scheduled.
                </p>
                <div className='card-btn-group'>
                  <Link
                    className='btn btn-primary text-white text-uppercase btn-medium rounded-3'
                    to='/job-management/view'
                  >
                    View Job
                  </Link>
                  <span className='ml-auto'>
                    <Link
                      to='#!'
                      className=' d-flex  align-items-center  hover-green'
                      onClick={(e) => {
                        e.preventDefault();
                        editjob(true);
                      }}
                    >
                      {' '}
                      <i className='fas fa-edit bg-white circle-40 mr-5 font-size-3 gr-color-eastern-opacity-visible font-weight-bold shadow-8 '></i>
                      <span className='bg-bluez text-white font-size-3 rounded-3 px-3'>
                        Edit
                      </span>
                    </Link>
                  </span>
                  <span>
                    <Link
                      to='#!'
                      className=' d-flex  align-items-center  hover-danger'
                    >
                      {' '}
                      <i className='fas fa-trash bg-white circle-40 mr-5 font-size-3 text-danger font-weight-bold shadow-8 '></i>
                      <span className='bg-danger text-white font-size-3 rounded-3 px-3'>
                        Delete
                      </span>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-6 col-xl-4 col-sm-6 d-flex align-items-stretch mb-8'>
              <div className='bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments'>
                <a href='#!' className='font-size-3 d-block mb-0 text-gray'>
                  Web Developer
                </a>
                <h2 className='mt-n4'>
                  <a
                    className='font-size-7 text-black-2 font-weight-bold mb-4'
                    href='#!'
                  >
                    Matt Mardock
                  </a>
                </h2>
                <ul className='list-unstyled mb-1 card-tag-list'>
                  <li>
                    <a
                      href='#!'
                      className='bg-regent-opacity-15 text-denim font-size-3 rounded-3'
                    >
                      <i className='icon icon-pin-3 mr-2 font-weight-bold'></i>{' '}
                      Berlyn
                    </a>
                  </li>
                  <li>
                    <a
                      href='#!'
                      className='bg-regent-opacity-15 text-orange font-size-3 rounded-3 pl-4'
                    >
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      href='#!'
                      className='bg-regent-opacity-15 text-eastern font-size-3 rounded-3'
                    >
                      <i className='fa fa-dollar-sign mr-2 font-weight-bold'></i>{' '}
                      80K-90K
                    </a>
                  </li>
                </ul>
                <p className='mb-7 font-size-4 text-gray'>
                  We are looking for Enrollment Advisors who are looking to take
                  30-35 appointments per week. All leads are pre-scheduled.
                </p>
                <div className='card-btn-group'>
                  <Link
                    className='btn btn-primary text-white text-uppercase btn-medium rounded-3'
                    to='/job-management/view'
                  >
                    View Job
                  </Link>
                  <span className='ml-auto'>
                    <Link
                      to='#!'
                      className=' d-flex  align-items-center  hover-green'
                      onClick={(e) => {
                        e.preventDefault();
                        editjob(true);
                      }}
                    >
                      {' '}
                      <i className='fas fa-edit bg-white circle-40 mr-5 font-size-3 gr-color-eastern-opacity-visible font-weight-bold shadow-8 '></i>
                      <span className='bg-bluez text-white font-size-3 rounded-3 px-3'>
                        Edit
                      </span>
                    </Link>
                  </span>
                  <span>
                    <Link
                      to='#!'
                      className=' d-flex  align-items-center  hover-danger'
                    >
                      {' '}
                      <i className='fas fa-trash bg-white circle-40 mr-5 font-size-3 text-danger font-weight-bold shadow-8 '></i>
                      <span className='bg-danger text-white font-size-3 rounded-3 px-3'>
                        Delete
                      </span>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-6 col-xl-4 col-sm-6 d-flex align-items-stretch mb-8'>
              <div className='bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments'>
                <a href='#!' className='font-size-3 d-block mb-0 text-gray'>
                  Web Developer
                </a>
                <h2 className='mt-n4'>
                  <a
                    className='font-size-7 text-black-2 font-weight-bold mb-4'
                    href='#!'
                  >
                    Matt Mardock
                  </a>
                </h2>
                <ul className='list-unstyled mb-1 card-tag-list'>
                  <li>
                    <a
                      href='#!'
                      className='bg-regent-opacity-15 text-denim font-size-3 rounded-3'
                    >
                      <i className='icon icon-pin-3 mr-2 font-weight-bold'></i>{' '}
                      Berlyn
                    </a>
                  </li>
                  <li>
                    <a
                      href='#!'
                      className='bg-regent-opacity-15 text-orange font-size-3 rounded-3 pl-4'
                    >
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      href='#!'
                      className='bg-regent-opacity-15 text-eastern font-size-3 rounded-3'
                    >
                      <i className='fa fa-dollar-sign mr-2 font-weight-bold'></i>{' '}
                      80K-90K
                    </a>
                  </li>
                </ul>
                <p className='mb-7 font-size-4 text-gray'>
                  We are looking for Enrollment Advisors who are looking to take
                  30-35 appointments per week. All leads are pre-scheduled.
                </p>
                <div className='card-btn-group'>
                  <Link
                    className='btn btn-primary text-white text-uppercase btn-medium rounded-3'
                    to='/job-management/view'
                  >
                    View Job
                  </Link>
                  <span className='ml-auto'>
                    <Link
                      to='#!'
                      className=' d-flex  align-items-center  hover-green'
                      onClick={(e) => {
                        e.preventDefault();
                        editjob(true);
                      }}
                    >
                      {' '}
                      <i className='fas fa-edit bg-white circle-40 mr-5 font-size-3 gr-color-eastern-opacity-visible font-weight-bold shadow-8 '></i>
                      <span className='bg-bluez text-white font-size-3 rounded-3 px-3'>
                        Edit
                      </span>
                    </Link>
                  </span>
                  <span>
                    <Link
                      to='#!'
                      className=' d-flex  align-items-center  hover-danger'
                    >
                      {' '}
                      <i className='fas fa-trash bg-white circle-40 mr-5 font-size-3 text-danger font-weight-bold shadow-8 '></i>
                      <span className='bg-danger text-white font-size-3 rounded-3 px-3'>
                        Delete
                      </span>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-6 col-xl-4 col-sm-6 d-flex align-items-stretch mb-8'>
              <div className='bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments'>
                <a href='#!' className='font-size-3 d-block mb-0 text-gray'>
                  Web Developer
                </a>
                <h2 className='mt-n4'>
                  <a
                    className='font-size-7 text-black-2 font-weight-bold mb-4'
                    href='#!'
                  >
                    Matt Mardock
                  </a>
                </h2>
                <ul className='list-unstyled mb-1 card-tag-list'>
                  <li>
                    <a
                      href='#!'
                      className='bg-regent-opacity-15 text-denim font-size-3 rounded-3'
                    >
                      <i className='icon icon-pin-3 mr-2 font-weight-bold'></i>{' '}
                      Berlyn
                    </a>
                  </li>
                  <li>
                    <a
                      href='#!'
                      className='bg-regent-opacity-15 text-orange font-size-3 rounded-3 pl-4'
                    >
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      href='#!'
                      className='bg-regent-opacity-15 text-eastern font-size-3 rounded-3'
                    >
                      <i className='fa fa-dollar-sign mr-2 font-weight-bold'></i>{' '}
                      80K-90K
                    </a>
                  </li>
                </ul>
                <p className='mb-7 font-size-4 text-gray'>
                  We are looking for Enrollment Advisors who are looking to take
                  30-35 appointments per week. All leads are pre-scheduled.
                </p>
                <div className='card-btn-group'>
                  <Link
                    className='btn btn-primary text-white text-uppercase btn-medium rounded-3'
                    to='/job-management/view'
                  >
                    View Job
                  </Link>
                  <span className='ml-auto'>
                    <Link
                      to='#!'
                      className=' d-flex  align-items-center  hover-green'
                      onClick={(e) => {
                        e.preventDefault();
                        editjob(true);
                      }}
                    >
                      {' '}
                      <i className='fas fa-edit bg-white circle-40 mr-5 font-size-3 gr-color-eastern-opacity-visible font-weight-bold shadow-8 '></i>
                      <span className='bg-bluez text-white font-size-3 rounded-3 px-3'>
                        Edit
                      </span>
                    </Link>
                  </span>
                  <span>
                    <Link
                      to='#!'
                      className=' d-flex  align-items-center  hover-danger'
                    >
                      {' '}
                      <i className='fas fa-trash bg-white circle-40 mr-5 font-size-3 text-danger font-weight-bold shadow-8 '></i>
                      <span className='bg-danger text-white font-size-3 rounded-3 px-3'>
                        Delete
                      </span>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-6 col-xl-4 col-sm-6 d-flex align-items-stretch mb-8'>
              <div className='bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments'>
                <a href='#!' className='font-size-3 d-block mb-0 text-gray'>
                  Web Developer
                </a>
                <h2 className='mt-n4'>
                  <a
                    className='font-size-7 text-black-2 font-weight-bold mb-4'
                    href='#!'
                  >
                    Matt Mardock
                  </a>
                </h2>
                <ul className='list-unstyled mb-1 card-tag-list'>
                  <li>
                    <a
                      href='#!'
                      className='bg-regent-opacity-15 text-denim font-size-3 rounded-3'
                    >
                      <i className='icon icon-pin-3 mr-2 font-weight-bold'></i>{' '}
                      Berlyn
                    </a>
                  </li>
                  <li>
                    <a
                      href='#!'
                      className='bg-regent-opacity-15 text-orange font-size-3 rounded-3 pl-4'
                    >
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      href='#!'
                      className='bg-regent-opacity-15 text-eastern font-size-3 rounded-3'
                    >
                      <i className='fa fa-dollar-sign mr-2 font-weight-bold'></i>{' '}
                      80K-90K
                    </a>
                  </li>
                </ul>
                <p className='mb-7 font-size-4 text-gray'>
                  We are looking for Enrollment Advisors who are looking to take
                  30-35 appointments per week. All leads are pre-scheduled.
                </p>
                <div className='card-btn-group'>
                  <Link
                    className='btn btn-primary text-white text-uppercase btn-medium rounded-3'
                    to='/job-management/view'
                  >
                    View Job
                  </Link>
                  <span className='ml-auto'>
                    <Link
                      to='#!'
                      className=' d-flex  align-items-center  hover-green'
                      onClick={(e) => {
                        e.preventDefault();
                        editjob(true);
                      }}
                    >
                      {' '}
                      <i className='fas fa-edit bg-white circle-40 mr-5 font-size-3 gr-color-eastern-opacity-visible font-weight-bold shadow-8 '></i>
                      <span className='bg-bluez text-white font-size-3 rounded-3 px-3'>
                        Edit
                      </span>
                    </Link>
                  </span>
                  <span>
                    <Link
                      to='#!'
                      className=' d-flex  align-items-center  hover-danger'
                    >
                      {' '}
                      <i className='fas fa-trash bg-white circle-40 mr-5 font-size-3 text-danger font-weight-bold shadow-8 '></i>
                      <span className='bg-danger text-white font-size-3 rounded-3 px-3'>
                        Delete
                      </span>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-6 col-xl-4 col-sm-6 d-flex align-items-stretch mb-8'>
              <div className='bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments'>
                <a href='#!' className='font-size-3 d-block mb-0 text-gray'>
                  Web Developer
                </a>
                <h2 className='mt-n4'>
                  <a
                    className='font-size-7 text-black-2 font-weight-bold mb-4'
                    href='#!'
                  >
                    Matt Mardock
                  </a>
                </h2>
                <ul className='list-unstyled mb-1 card-tag-list'>
                  <li>
                    <a
                      href='#!'
                      className='bg-regent-opacity-15 text-denim font-size-3 rounded-3'
                    >
                      <i className='icon icon-pin-3 mr-2 font-weight-bold'></i>{' '}
                      Berlyn
                    </a>
                  </li>
                  <li>
                    <a
                      href='#!'
                      className='bg-regent-opacity-15 text-orange font-size-3 rounded-3 pl-4'
                    >
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                      <i className='fa fa-star mr-2 font-weight-bold'></i>{' '}
                    </a>
                  </li>
                  <li>
                    <a
                      href='#!'
                      className='bg-regent-opacity-15 text-eastern font-size-3 rounded-3'
                    >
                      <i className='fa fa-dollar-sign mr-2 font-weight-bold'></i>{' '}
                      80K-90K
                    </a>
                  </li>
                </ul>
                <p className='mb-7 font-size-4 text-gray'>
                  We are looking for Enrollment Advisors who are looking to take
                  30-35 appointments per week. All leads are pre-scheduled.
                </p>
                <div className='card-btn-group'>
                  <Link
                    className='btn btn-primary text-white text-uppercase btn-medium rounded-3'
                    to='/job-management/view'
                  >
                    View Job
                  </Link>
                  <span className='ml-auto'>
                    <Link
                      to='#!'
                      className=' d-flex  align-items-center  hover-green'
                      onClick={(e) => {
                        e.preventDefault();
                        editjob(true);
                      }}
                    >
                      {' '}
                      <i className='fas fa-edit bg-white circle-40 mr-5 font-size-3 gr-color-eastern-opacity-visible font-weight-bold shadow-8 '></i>
                      <span className='bg-bluez text-white font-size-3 rounded-3 px-3'>
                        Edit
                      </span>
                    </Link>
                  </span>
                  <span>
                    <Link
                      to='#!'
                      className=' d-flex  align-items-center  hover-danger'
                    >
                      {' '}
                      <i className='fas fa-trash bg-white circle-40 mr-5 font-size-3 text-danger font-weight-bold shadow-8 '></i>
                      <span className='bg-danger text-white font-size-3 rounded-3 px-3'>
                        Delete
                      </span>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='text-center pt-5 pt-lg-9'>
            <a
              className='text-green font-weight-bold text-uppercase font-size-3 d-flex align-items-center justify-content-center'
              href='#!'
            >
              Load More{' '}
              <i className='fas fa-sort-down ml-3 mt-n2 font-size-4'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobManagement;
