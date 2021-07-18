import React from 'react';
import { Link } from 'react-router-dom';

const FooterBar = () => {
  return (
    <footer className='footer bg-ebony-clay dark-mode-texts'>
      <div className='container'>
        <div className='pt-11 pt-lg-20 pb-13 pb-lg-20 border-bottom border-width-1 border-default-color-2'>
          <div className='row justify-content-center '>
            <div
              className='col-xl-7 col-lg-12 aos-init aos-animate'
              data-aos='fade-right'
              data-aos-duration='800'
              data-aos-once='true'
            >
              <div className='pb-xl-0 pb-9 text-xl-left text-center'>
                <h2 className='text-white font-size-8 mb-4'>
                  Interested in learning more
                </h2>
                <p className='text-hit-gray font-size-5 mb-0'>
                  Create a free account to explore more.
                </p>
              </div>
            </div>
            <div
              className='col-xl-5 col-lg-12 aos-init aos-animate'
              data-aos='fade-left'
              data-aos-duration='800'
              data-aos-once='true'
            >
              <div className='btns d-flex justify-content-xl-end justify-content-center align-items-xl-center flex-wrap h-100  mx-n4'>
                <Link
                  className='btn btn-outline-gallery btn-xl mx-4 mt-6 text-uppercase'
                  to='/login'
                  data-toggle='modal'
                  data-target='#login'
                >
                  Log in
                </Link>
                <Link
                  className='btn btn-green btn-h-60 btn-xl mx-4 mt-6 text-uppercase'
                  to='/register'
                  data-toggle='modal'
                  data-target='#signup'
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container  pt-12 pt-lg-19 pb-10 pb-lg-19'>
        <div className='row'>
          <div className='col-lg-4 col-sm-6 mb-lg-0 mb-9'>
            <img
              src='image/logo-main-white.png'
              alt=''
              className='footer-logo mb-14'
            />
            <div className='media mb-11'>
              <img
                src='image/l1/png/message.png'
                className='align-self-center mr-3'
                alt=''
              />
              <div className='media-body pl-5'>
                <p className='mb-0 font-size-4 text-white'>Contact us at</p>
                <a
                  className='mb-0 font-size-4 font-weight-bold'
                  href='mailto:contact@momenttext.com'
                >
                  contact@momenttext.com
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-8 col-md-6'>
            <div className='row'>
              <div className='col-lg-4 col-md-6 col-sm-3 col-xs-6'>
                <div className='footer-widget widget2 mb-md-0 mb-13'>
                  <p className='widget-title font-size-4 text-gray mb-md-8 mb-7'>
                    Company
                  </p>
                  <ul className='widget-links pl-0 list-unstyled list-hover-primary'>
                    <li className='mb-6'>
                      <Link
                        className='heading-default-color font-size-4 font-weight-normal'
                        to='/about-us'
                      >
                        About us
                      </Link>
                    </li>
                    <li className='mb-6'>
                      <Link
                        className='heading-default-color font-size-4 font-weight-normal'
                        to='/contact-us'
                      >
                        Contact us
                      </Link>
                    </li>
                    <li className='mb-6'>
                      <Link
                        className='heading-default-color font-size-4 font-weight-normal'
                        to='#!'
                      >
                        Workers
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-3 col-xs-6'>
                <div className='footer-widget widget4 mb-sm-0 mb-13'>
                  <p className='widget-title font-size-4 text-gray mb-md-8 mb-7'>
                    Services
                  </p>
                  <ul className='widget-links pl-0 list-unstyled list-hover-primary'>
                    <li className='mb-6'>
                      <Link
                        className='heading-default-color font-size-4 font-weight-normal'
                        to='/#our-services'
                      >
                        RPA
                      </Link>
                    </li>
                    <li className='mb-6'>
                      <Link
                        className='heading-default-color font-size-4 font-weight-normal'
                        to='/#our-services'
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li className='mb-6'>
                      <Link
                        className='heading-default-color font-size-4 font-weight-normal'
                        to='/#our-services'
                      >
                        Cloud Services
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-3 col-xs-6'>
                <div className='footer-widget widget4'>
                  <p className='widget-title font-size-4 text-gray mb-md-8 mb-7'>
                    Legal
                  </p>
                  <ul className='widget-links pl-0 list-unstyled list-hover-primary'>
                    <li className='mb-6'>
                      <Link
                        className='heading-default-color font-size-4 font-weight-normal'
                        to='/privacy-policy'
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li className='mb-6'>
                      <Link
                        className='heading-default-color font-size-4 font-weight-normal'
                        to='/terms-and-conditions'
                      >
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li className='mb-6'>
                      <Link
                        className='heading-default-color font-size-4 font-weight-normal'
                        to='/faq-business'
                      >
                        Faq Business
                      </Link>
                    </li>
                    <li className='mb-6'>
                      <Link
                        className='heading-default-color font-size-4 font-weight-normal'
                        to='/faq-worker'
                      >
                        Faq Worker
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
