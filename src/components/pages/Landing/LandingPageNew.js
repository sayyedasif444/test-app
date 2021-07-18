import React from 'react';
import { Link } from 'react-router-dom';
import ReactTypingEffectDemo from 'react-typing-effect';

const LandingPageNew = () => {
  return (
    <div>
      <div className='position-relative z-index-1  mt-15 mt-md-15 mt-lg-0 mt-xl-20 bg-default pt-10'>
        <div className='container'>
          <div className='row position-relative align-items-center'>
            <div
              className='col-xxl-7 col-xl-8 col-lg-9 pt-lg-26 pb-lg-26 pt-md-20 aos-init aos-animate'
              data-aos='fade-right'
              data-aos-duration='800'
              data-aos-once='true'
            >
              <div className='row'>
                <div className='col-md-8 col-sm-10'>
                  <h1 className='font-size-11 mb-12 text-capitalized'>
                    Get Experts in <br />
                    <span className='text-primary' id='typwriter_text'>
                      <ReactTypingEffectDemo
                        text={['One Day.', 'Power App.', 'Power BI.', 'RPA.']}
                        eraseSpeed={100}
                        speed={100}
                        eraseDelay={2000}
                        typingDelay={200}
                      />
                    </span>
                  </h1>
                  <p className='font-size-6'>
                    We connects businesses with verified Experts on demand.
                  </p>
                  <Link
                    className='btn btn-primary px-8 py-8 font-weight-bold text-uppercase font-size-3'
                    to='/register'
                  >
                    Get Early Access Free{' '}
                    <i className='fas fa-arrow-right ml-3'></i>
                  </Link>
                </div>
              </div>
              <div className='pt-12'></div>
            </div>
            <div className='col-12 pos-abs-tr z-index-n1 position-static position-lg-absolute ml-auto hero-image-positioning-2 mb-10'>
              <div className='image-group row justify-content-center'>
                <div className='col-sm-6 col-10 mt-10 mt-lg-0'>
                  <div
                    className='single-image aos-init aos-animate'
                    data-aos='fade-left'
                    data-aos-duration='800'
                    data-aos-once='true'
                  >
                    <img src='./assets/image/l3/png/hero-image-1.png' alt='' />
                  </div>
                </div>
                <div className='col-sm-6 col-10 mt-10 mt-lg-0'>
                  <div
                    className='single-image aos-init aos-animate'
                    data-aos='fade-left'
                    data-aos-duration='800'
                    data-aos-delay='300'
                    data-aos-once='true'
                  >
                    <img src='./assets/image/l3/png/hero-image-2.png' alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-20 pt-md-20 pt-lg-32 pb-7 pb-lg-18'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-8 col-lg-6 col-xxl-6'>
              <div className='text-center mb-8 mb-lg-18 px-xl-9 px-xxl-8'>
                <h2 className='font-size-9 mb-6'>
                  Tap our worldwide network of experts
                </h2>
              </div>
            </div>
          </div>
          <div
            className='row justify-content-center aos-init aos-animate'
            data-aos='fade-up'
            data-aos-duration='800'
            data-aos-once='true'
          >
            <div className='col-12 col-lg-4 col-md-6 col-sm-8 col-xs-8'>
              <div className='px-xl-7 px-xxl-12 pt-5 pb-3 pb-lg-9 text-center'>
                <div className='square-92 rounded-4 bg-dodger text-white font-size-8 mx-auto shadow-dodger mb-11'>
                  <img src='./assets/image/svg/shoot.svg' alt='' />
                </div>
                <div className='services-content'>
                  <h3 className='font-size-6 mb-7'>
                    Businesses post assignments
                  </h3>
                  <p className='font-size-5 text-default-color'>
                    Includes one-time, part time or long term needs.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-4 col-md-6 col-sm-8 col-xs-8'>
              <div className='px-xl-7 px-xxl-12 pt-5 pb-3 pb-lg-9 text-center'>
                <div className='square-92 rounded-4 bg-green text-white font-size-8 mx-auto shadow-green mb-11'>
                  <img src='./assets/image/svg/user.svg' alt='' />
                </div>
                <div className='services-content'>
                  <h3 className='font-size-6 mb-7'>
                    Vetted workers accept assignments
                  </h3>
                  <p className='font-size-5 text-default-color'>
                    They pick assignments that fit their schedule, weeks, or
                    hours in advance.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-12 col-lg-4 col-md-6 col-sm-8 col-xs-8'>
              <div className='px-xl-7 px-xxl-12 pt-5 pb-3 pb-lg-9 text-center'>
                <div className='square-92 rounded-4 bg-casablanca text-white font-size-8 mx-auto shadow-casablanca mb-11'>
                  <img src='./assets/image/svg/heart.svg' alt='' />
                </div>
                <div className='services-content'>
                  <h3 className='font-size-6 mb-7'>We handle the rest</h3>
                  <p className='font-size-5 text-default-color'>
                    That includes the paperwork and payments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='pt-13 pt-lg-30 pb-lg-30 bg-default'>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div
              className='col-xl-5 col-lg-5 col-md-7 col-xs-8 aos-init aos-animate'
              data-aos='fade-right'
              data-aos-duration='800'
              data-aos-once='true'
            >
              <div className='position-relative px-xl-20 pr-md-15 pr-9'>
                <img
                  src='./assets/image/image12.png'
                  alt=''
                  className='w-100 rounded-4'
                />
              </div>
            </div>
            <div
              className='col-xxl-6 col-xl-7 col-lg-7 col-md-9 col-sm-12 aos-init aos-animate'
              data-aos='fade-left'
              data-aos-duration='800'
              data-aos-once='true'
            >
              <div className='content-2 pl-xl-10 d-flex flex-column justify-content-center h-100 pt-lg-0 pt-15 pr-xl-10 pr-xxl-0'>
                <h2 className='font-size-8 mb-7 pr-xs-13  pr-md-0 pr-sm-8'>
                  We're more than a{' '}
                  <span className='text-green'> staffing agency</span>
                </h2>

                <ul className='text-default-color font-size-5 mb-7 mb-lg-12 pr-xxl-13 pr-lg-0 pr-md-10'>
                  <li>Professionals are pre-vetted with proven work history</li>
                  <li>Our portal makes it seamless to find experts you like</li>
                  <li>Our team help's you throughout the assignments</li>
                </ul>
                <Link
                  className='btn btn-primary text-uppercase mt-10 py-8 font-size-3 w-xs-180'
                  to='/register'
                >
                  Get Started <i className='fas fa-arrow-right ml-3'></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className='bg-default-2 pt-12 pt-lg-25 pb-12 pb-lg-25'
        id='our-services'
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-8 col-lg-6 col-xxl-5'>
              <div className='text-center mb-8 mb-lg-14 px-xl-9 px-xxl-7'>
                <h2 className='font-size-9 mb-6'>Businesses We Serve</h2>
                <p className='font-size-5 text-default-color px-xs-9 px-md-0'>
                  From RPA to cloud services, we got you covered. To see the
                  full list{' '}
                  <a href='#!' className='text-green'>
                    create an account.
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div
            className='col-lg-10 m-auto row justify-content-center aos-init aos-animate'
            data-aos='fade-up'
            data-aos-duration='800'
            data-aos-once='true'
          >
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-11 mb-9'>
              <div className='pt-9 px-xl-9 px-lg-7 px-7 pb-7 dark-mode-texts bg-primary rounded hover-shadow-3'>
                <div className='media align-items-center text-center'>
                  <h3 className='font-size-6 mb-0 text-center w-100'>RPA</h3>
                </div>
                <div className='w-100 pt-9'>
                  <div className='row'>
                    <div className='col-6 text-center'>
                      <img
                        src='./assets/image/svg/windows.svg'
                        alt=''
                        width='48'
                        height='48'
                      />
                      <h5 className='font-size-4 mb-8 mt-2 text-white'>
                        Power App
                      </h5>
                    </div>
                    <div className='col-6 text-center'>
                      <img
                        src='./assets/image/svg/automation.png'
                        alt=''
                        width='48'
                        height='48'
                      />
                      <h5 className='font-size-4 mb-8 mt-2 text-white'>
                        Automation anywhere
                      </h5>
                    </div>
                    <div className='col-6 text-center'>
                      <img
                        src='./assets/image/svg/ui.png'
                        alt=''
                        width='48'
                        height='48'
                      />
                      <h5 className='font-size-4 mb-8 mt-2 text-white'>
                        UI path
                      </h5>
                    </div>
                    <div className='col-6 text-center'>
                      <img
                        src='./assets/image/svg/zoho.png'
                        alt=''
                        width='48'
                        height='48'
                      />
                      <h5 className='font-size-4 mb-8 mt-2 text-white'>
                        Zoho Creater
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-11 mb-9'>
              <div className='pt-9 px-xl-9 px-lg-7 px-7 pb-7 dark-mode-texts bg-primary rounded hover-shadow-3'>
                <div className='media align-items-center text-center'>
                  <h3 className='font-size-6 mb-0 text-center w-100'>
                    Dashboard
                  </h3>
                </div>
                <div className='w-100 pt-9'>
                  <div className='row'>
                    <div className='col-6 text-center'>
                      <img
                        src='./assets/image/svg/powerbi.png'
                        alt=''
                        width='48'
                        height='48'
                      />
                      <h5 className='font-size-4 mb-8 mt-2 text-white'>
                        PowerBi
                      </h5>
                    </div>
                    <div className='col-6 text-center'>
                      <img
                        src='./assets/image/svg/tableau.png'
                        alt=''
                        width='48'
                        height='48'
                      />
                      <h5 className='font-size-4 mb-8 mt-2 text-white'>
                        Tableau
                      </h5>
                    </div>
                    <div className='col-6 text-center'>
                      <img
                        src='./assets/image/svg/spotfire.png'
                        alt=''
                        width='48'
                        height='48'
                      />
                      <h5 className='font-size-4 mb-8 mt-2 text-white'>
                        Spotfire
                      </h5>
                    </div>
                    <div className='col-6 text-center'>
                      <img
                        src='./assets/image/svg/google.png'
                        alt=''
                        width='56'
                        height='48'
                      />
                      <h5 className='font-size-4 mb-8 mt-2 text-white'>
                        Google Data studio
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-11 mb-9'>
              <div className='pt-9 px-xl-9 px-lg-7 px-7 pb-7 dark-mode-texts bg-primary rounded hover-shadow-3'>
                <div className='media align-items-center text-center'>
                  <h3 className='font-size-6 mb-0 text-center w-100'>
                    Cloud Services
                  </h3>
                </div>
                <div className='w-100 pt-9'>
                  <div className='row'>
                    <div className='col-6 text-center'>
                      <img
                        src='./assets/image/svg/aws.png'
                        alt=''
                        width='60'
                        height='48'
                      />
                      <h5 className='font-size-4 mb-8 mt-2 text-white'>AWS</h5>
                    </div>
                    <div className='col-6 text-center'>
                      <img
                        src='./assets/image/svg/azure.png'
                        alt=''
                        width='48'
                        height='48'
                      />
                      <h5 className='font-size-4 mb-8 mt-2 text-white'>
                        Azure
                      </h5>
                    </div>
                    <div className='col-12 text-center'>
                      <img
                        src='./assets/image/svg/googleser.png'
                        alt=''
                        width='48'
                        height='48'
                      />
                      <h5 className='font-size-4 mb-8 mt-2 text-white'>
                        Google Service <br />
                        Provider
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageNew;
