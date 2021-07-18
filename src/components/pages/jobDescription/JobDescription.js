import React from 'react';
import { Link } from 'react-router-dom';

const JobDescription = ({ handleSetIndiChat }) => {
  return (
    <div
      className='dashboard-main-container mt-20 mt-lg-24'
      id='dashboard-body'
    >
      <div className='container'>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='mb-6 w-100 row'>
            <Link
              className='col-6 d-flex align-items-center ml-4'
              to='/job-management'
            >
              {' '}
              <i className='icon icon-small-left bg-white circle-40 mr-5 font-size-7 text-black font-weight-bold shadow-8'></i>
              <span className='text-uppercase font-size-3 font-weight-bold text-gray'>
                Back
              </span>
            </Link>
            <span
              className='col-5 font-size-4 ml-auto text-right pt-2 text-uppercase text-primary mb-0 '
              style={{ verticalAlign: 'middle' }}
            >
              Job-Managment{' '}
              <i
                className='icon icon-small-right font-size-5'
                style={{ verticalAlign: 'middle', lineHeight: '0px' }}
              ></i>{' '}
              <span>Job Title</span>
            </span>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='mb-18'>
          <div className='bg-white shadow-8 pt-7 rounded pb-4 px-11 mb-10'>
            <div className='pl-1 pr-1 pt-6 pb-0  '>
              <div className='row'>
                <div className='col-md-12'>
                  <p
                    className='font-size-4 text-gray mb-0'
                    style={{ position: 'absolute', top: '0', right: '0' }}
                  >
                    19 June 2020
                  </p>
                  <div className='media align-items-center'>
                    <div className='square-72 d-block mr-8'>
                      <img
                        src='/assets/image/l2/png/featured-job-logo-1.png'
                        alt=''
                      />
                    </div>
                    <div>
                      <h3 className='font-size-6 mb-0'>Job Title</h3>
                      <span className='font-size-3 text-gray line-height-2'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </span>
                    </div>
                  </div>
                </div>
                <div className=' col-md-12 job-details-content pt-8 pl-sm-9 pl-6 pr-sm-9 pr-6 pb-4  light-mode-texts'>
                  <div className='row mb-7'>
                    <div className='col-md-3 mb-md-0 mb-6'>
                      <div className='media justify-content-md-start'>
                        <div className='image mr-5'>
                          <img src='/assets/image/svg/icon-dolor.svg' alt='' />
                        </div>
                        <p className='font-weight-semibold font-size-5 text-black-2 mb-0'>
                          80-90K PLN
                        </p>
                      </div>
                    </div>
                    <div className='col-md-3 pr-lg-0 pl-lg-10 mb-md-0 mb-6'>
                      <div className='media justify-content-md-start'>
                        <div className='image mr-5'>
                          <img
                            src='/assets/image/svg/icon-briefcase.svg'
                            alt=''
                          />
                        </div>
                        <p className='font-weight-semibold font-size-5 text-black-2 mb-0'>
                          Job Category
                        </p>
                      </div>
                    </div>
                    <div className='col-md-3 pr-lg-0 pl-lg-10 mb-md-0 mb-6'>
                      <div className='media justify-content-md-start'>
                        <div className='image mr-5'>
                          <img src='/assets/image/svg/calender.svg' alt='' />
                        </div>
                        <p className='font-size-4 text-gray mb-0'>
                          02 Dec 2021 - 28 Dec 2021
                        </p>
                      </div>
                    </div>
                    <div className='col-md-3 pr-lg-0 pl-lg-10 mb-md-0 mb-6'>
                      <div className='media justify-content-md-start'>
                        <div className='image mr-5'>
                          <img src='/assets/image/svg/time.svg' alt='' />
                        </div>
                        <p className='font-size-4 text-gray mb-0'>
                          12:00 - 15:00
                        </p>
                      </div>
                    </div>
                  </div>
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
                      <option data-display='Job Category  '>Category</option>
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

          <div className=''>
            <div className='pt-9 ml-lg-0 ml-md-15'>
              <div className='d-flex align-items-center justify-content-between'>
                <h5 className='font-size-4 font-weight-normal text-default-color'>
                  <span className='heading-default-color'>120</span> results for{' '}
                  <span className='heading-default-color'>UI Designer</span>
                </h5>
              </div>
              <div className='pt-6'>
                <div className='row justify-content-center'>
                  <div className='col-md-6 col-lg-6 col-xl-4 col-sm-6 d-flex align-items-stretch mb-0'>
                    <div className='bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments'>
                      <div className='d-block mb-7'>
                        <a href='#!'>
                          <img
                            src='/assets/image/l1/png/feature-brand-1.png'
                            alt=''
                          />
                        </a>
                      </div>
                      <a
                        href='#!'
                        className='font-size-3 d-block mb-0 text-gray'
                      >
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
                        We are looking for Enrollment Advisors who are looking
                        to take 30-35 appointments per week. All leads are
                        pre-scheduled.
                      </p>
                      <div className='card-btn-group'>
                        <Link
                          className='btn btn-primary text-white text-uppercase btn-medium rounded-3'
                          to='/profiles/view'
                        >
                          View Profile
                        </Link>
                        <a
                          className='btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3'
                          href='#!'
                          onClick={(e) => {
                            e.preventDefault();
                            handleSetIndiChat();
                          }}
                        >
                          <i className='icon fas fa-comment-alt font-weight-bold mr-4 font-size-4'></i>{' '}
                          Message
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-6 col-lg-6 col-xl-4 col-sm-6 d-flex align-items-stretch mb-0'>
                    <div className='bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments'>
                      <div className='d-block mb-7'>
                        <a href='#!'>
                          <img
                            src='/assets/image/l1/png/feature-brand-1.png'
                            alt=''
                          />
                        </a>
                      </div>
                      <a
                        href='#!'
                        className='font-size-3 d-block mb-0 text-gray'
                      >
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
                        We are looking for Enrollment Advisors who are looking
                        to take 30-35 appointments per week. All leads are
                        pre-scheduled.
                      </p>
                      <div className='card-btn-group'>
                        <Link
                          className='btn btn-primary text-white text-uppercase btn-medium rounded-3'
                          to='/profiles/view'
                        >
                          View Profile
                        </Link>
                        <a
                          className='btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3'
                          href='#!'
                        >
                          <i className='icon fas fa-comment-alt font-weight-bold mr-4 font-size-4'></i>{' '}
                          Message
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 col-lg-6 col-xl-4 col-sm-6 d-flex align-items-stretch mb-0'>
                    <div className='bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments'>
                      <div className='d-block mb-7'>
                        <a href='#!'>
                          <img
                            src='/assets/image/l1/png/feature-brand-1.png'
                            alt=''
                          />
                        </a>
                      </div>
                      <a
                        href='#!'
                        className='font-size-3 d-block mb-0 text-gray'
                      >
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
                        We are looking for Enrollment Advisors who are looking
                        to take 30-35 appointments per week. All leads are
                        pre-scheduled.
                      </p>
                      <div className='card-btn-group'>
                        <Link
                          className='btn btn-primary text-white text-uppercase btn-medium rounded-3'
                          to='/profiles/view'
                        >
                          View Profile
                        </Link>
                        <a
                          className='btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3'
                          href='#!'
                        >
                          <i className='icon fas fa-comment-alt font-weight-bold mr-4 font-size-4'></i>{' '}
                          Message
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 col-lg-6 col-xl-4 col-sm-6 d-flex align-items-stretch mb-0'>
                    <div className='bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments'>
                      <div className='d-block mb-7'>
                        <a href='#!'>
                          <img
                            src='/assets/image/l1/png/feature-brand-1.png'
                            alt=''
                          />
                        </a>
                      </div>
                      <a
                        href='#!'
                        className='font-size-3 d-block mb-0 text-gray'
                      >
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
                        We are looking for Enrollment Advisors who are looking
                        to take 30-35 appointments per week. All leads are
                        pre-scheduled.
                      </p>
                      <div className='card-btn-group'>
                        <Link
                          className='btn btn-primary text-white text-uppercase btn-medium rounded-3'
                          to='/profiles/view'
                        >
                          View Profile
                        </Link>
                        <a
                          className='btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3'
                          href='#!'
                        >
                          <i className='icon fas fa-comment-alt font-weight-bold mr-4 font-size-4'></i>{' '}
                          Message
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 col-lg-6 col-xl-4 col-sm-6 d-flex align-items-stretch mb-0'>
                    <div className='bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments'>
                      <div className='d-block mb-7'>
                        <a href='#!'>
                          <img
                            src='/assets/image/l1/png/feature-brand-1.png'
                            alt=''
                          />
                        </a>
                      </div>
                      <a
                        href='#!'
                        className='font-size-3 d-block mb-0 text-gray'
                      >
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
                        We are looking for Enrollment Advisors who are looking
                        to take 30-35 appointments per week. All leads are
                        pre-scheduled.
                      </p>
                      <div className='card-btn-group'>
                        <Link
                          className='btn btn-primary text-white text-uppercase btn-medium rounded-3'
                          to='/profiles/view'
                        >
                          View Profile
                        </Link>
                        <a
                          className='btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3'
                          href='#!'
                        >
                          <i className='icon fas fa-comment-alt font-weight-bold mr-4 font-size-4'></i>{' '}
                          Message
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 col-lg-6 col-xl-4 col-sm-6 d-flex align-items-stretch mb-0'>
                    <div className='bg-white px-8 pt-9 pb-7 rounded-4 mb-9 feature-cardOne-adjustments'>
                      <div className='d-block mb-7'>
                        <a href='#!'>
                          <img
                            src='/assets/image/l1/png/feature-brand-1.png'
                            alt=''
                          />
                        </a>
                      </div>
                      <a
                        href='#!'
                        className='font-size-3 d-block mb-0 text-gray'
                      >
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
                        We are looking for Enrollment Advisors who are looking
                        to take 30-35 appointments per week. All leads are
                        pre-scheduled.
                      </p>
                      <div className='card-btn-group'>
                        <Link
                          className='btn btn-primary text-white text-uppercase btn-medium rounded-3'
                          to='/profiles/view'
                        >
                          View Profile
                        </Link>
                        <a
                          className='btn btn-outline-mercury text-black-2 text-uppercase btn-medium rounded-3'
                          href='#!'
                        >
                          <i className='icon fas fa-comment-alt font-weight-bold mr-4 font-size-4'></i>{' '}
                          Message
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-center pt-5 pt-lg-13'>
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
      </div>
    </div>
  );
};

export default JobDescription;
