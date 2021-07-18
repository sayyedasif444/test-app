import React from 'react';
import ReactTypingEffectDemo from 'react-typing-effect';

const LandingPage = () => {
  return (
    <div>
      <div className='bg-gradient-1 pt-26 pt-md-32 pt-lg-33 pt-xl-31 position-relative z-index-1 overflow-hidden bg-white  pb-10'>
        <div className='pos-abs-tr w-50 z-index-n2'>
          <img
            src='/assets/image/patterns/hero-pattern.png'
            alt=''
            className='gr-opacity-1'
          />
        </div>
        <div className='container'>
          <div className='row position-relative '>
            <div className='col-lg-7 pt-lg-18 pb-lg-33 pb-xl-34 pb-md-33 pb-10'>
              <h1 className='font-size-11 mb-12 text-capitalized'>
                Get jobs in <br />
                <span className='text-green' id='typwriter_text'>
                  <ReactTypingEffectDemo
                    text={['One Day.', 'Power App.', 'Power BI.', 'RPA.']}
                    eraseSpeed={100}
                    speed={100}
                    eraseDelay={2000}
                    typingDelay={200}
                  />
                </span>
              </h1>
              <p className='font-size-7'>
                Earn more money working short term assignments, while working
                from anywhere.
              </p>
            </div>
            <div
              className='col-lg-5 mx-auto ml-md-auto'
              data-aos='fade-left'
              data-aos-duration='800'
              data-aos-once='true'
            >
              <div className=' ml-xxl-23 ml-xl-12 ml-md-7 '>
                <div
                  className='p-8  shadow-10'
                  style={{ backgroundColor: '#F9FAFB' }}
                >
                  <h2 className='h5 text-center mb-0'>Get in touch with us</h2>
                </div>
                <div className='p-9  pt-9 pb-11 bg-white shadow-10'>
                  <form action='/'>
                    <div className='row'>
                      <div className='col-12 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          Your Name
                        </label>
                        <input
                          id='name3'
                          type='text'
                          className='form-control'
                          placeholder='Jhon Doe'
                        />
                      </div>
                      <div className='col-lg-12 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          E-mail
                        </label>
                        <input
                          id='email3'
                          type='email'
                          className='form-control'
                          placeholder='example@gmail.com'
                        />
                      </div>
                      <div className='col-lg-12 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          Phone Number
                        </label>
                        <input
                          id='phone'
                          type='text'
                          className='form-control'
                          placeholder='Phone Number'
                        />
                      </div>

                      <div className='col-lg-12 pt-4'>
                        <button className='btn btn-primary text-uppercase w-100 h-px-48'>
                          Send Now
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
      <div className='pt-10 pt-lg-25 pb-7 pb-lg-20 bg-default'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-8 col-lg-6 col-xxl-5'>
              <div className='text-center mb-8 mb-lg-18 px-xl-9 px-xxl-8'>
                <h2 className='font-size-9 mb-6'>
                  Easy steps to
                  <br className='d-none d-sm-block' /> land your next job
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
                    Businesses post assignments for positions they need, up to a
                    few hours in advance.
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
                  <h3 className='font-size-6 mb-7'>Explore assignments</h3>
                  <p className='font-size-5 text-default-color'>
                    You accept assignments as per your expertise and
                    availability.
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
                    We handle the rest, including the paperwork and payments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='pt-13 pt-lg-30 pb-lg-20 '>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div
              className='col-xl-6 col-lg-6 col-md-8 col-xs-10 aos-init aos-animate'
              data-aos='fade-right'
              data-aos-duration='800'
              data-aos-once='true'
            >
              <div className='position-relative px-xl-20 pr-md-15 pr-9'>
                <img
                  src='/assets/image/image21.png'
                  alt=''
                  className='w-100 rounded-4'
                />
              </div>
            </div>
            <div
              className='col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-11 aos-init aos-animate'
              data-aos='fade-left'
              data-aos-duration='800'
              data-aos-once='true'
            >
              <div className='content-2 pl-xl-10 d-flex flex-column justify-content-center h-100 pt-lg-0 pt-15 pr-xl-10 pr-xxl-0'>
                <h2 className='font-size-8 mb-7 pr-xs-13  pr-md-0 pr-sm-8'>
                  Earn more money
                </h2>
                <ul className='text-default-color font-size-5 mb-7 mb-lg-12 pr-xxl-13 pr-lg-0 pr-md-10'>
                  <li>We pass along more of the earnings to you</li>
                  <li>Make more for urgent requests and peak times</li>
                  <li>Decide to work on hourly or assignments basis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-13 pt-lg-20 pb-lg-20'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div
              className='col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-10 order-2 order-lg-1 aos-init aos-animate'
              data-aos='fade-right'
              data-aos-duration='800'
              data-aos-once='true'
            >
              <div className='position-relative d-flex flex-column justify-content-center h-100 pr-xl-8 pr-0 mt-5 mt-lg-0'>
                <h2 className='font-size-8 mb-7 pr-xs-13  pr-md-0 pr-sm-8'>
                  Set your own schedule
                </h2>
                <ul className='text-default-color font-size-5 mb-7 mb-lg-12 pr-xxl-13 pr-lg-0 pr-md-10'>
                  <li>Work and earn as much as you want</li>
                  <li>Book gigs in advance or at the last minute</li>
                  <li>Choose by duration, time and location</li>
                </ul>
              </div>
            </div>
            <div
              className='col-lg-6 col-md-8 order-1 order-lg-2 aos-init aos-animate'
              data-aos='fade-left'
              data-aos-duration='800'
              data-aos-once='true'
            >
              <div className='pl-lg-10 pl-0'>
                <div className='d-xs-flex  mx-sm-n3'>
                  <div className='d-flex flex-column px-3 px-sm-6 w-lg-auto w-100'>
                    <img
                      src='/assets/image/remote.png'
                      alt=''
                      data-aos='zoom-in'
                      data-aos-duration='500'
                      data-aos-once='true'
                      className='w-100 pb-6 pb-sm-9 rounded-4 aos-init aos-animate'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-13 pt-lg-20 pb-lg-30 '>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div
              className='col-xl-6 col-lg-6 col-md-8 col-xs-10 aos-init aos-animate'
              data-aos='fade-right'
              data-aos-duration='800'
              data-aos-once='true'
            >
              <div className='position-relative px-xl-20 pr-md-15 pr-9'>
                <img
                  src='/assets/image/opp.png'
                  alt=''
                  className='w-100 rounded-4'
                />
              </div>
            </div>
            <div
              className='col-xxl-5 col-xl-6 col-lg-6 col-md-8 col-sm-11 aos-init aos-animate'
              data-aos='fade-left'
              data-aos-duration='800'
              data-aos-once='true'
            >
              <div className='content-2 pl-xl-10 d-flex flex-column justify-content-center h-100 pt-lg-0 pt-15 pr-xl-10 pr-xxl-0'>
                <h2 className='font-size-8 mb-7 pr-xs-13  pr-md-0 pr-sm-8'>
                  Find new opportunities
                </h2>
                <ul className='text-default-color font-size-5 mb-7 mb-lg-12 pr-xxl-13 pr-lg-0 pr-md-10'>
                  <li>Gigs come to you via notifications</li>
                  <li>Make new connections, work with new businesses</li>
                  <li>Build your professional reputation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=' pt-12 pt-lg-25 pb-12 pb-lg-25 bg-default'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-8 col-lg-6 col-xxl-5'>
              <div className='text-center mb-8 mb-lg-14 px-xl-9 px-xxl-7'>
                <h2 className='font-size-9 mb-6'>Positions Available</h2>
                <p className='font-size-5 text-default-color px-xs-9 px-md-0'>
                  To see all positions available to you,{' '}
                  <a href='#!' className='text-green'>
                    apply to join
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
      <div className='pt-10 pt-lg-25 pb-7 pb-lg-20 bg-default-2'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-8 col-lg-6 col-xxl-5'>
              <div className='text-center mb-8 mb-lg-18 px-xl-9 px-xxl-8'>
                <h2 className='font-size-9 mb-6'>We have you covered</h2>
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
                  <p className='font-size-5 text-default-color'>
                    Detailed gig instructions so you know what to expect
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
                  <p className='font-size-5 text-default-color'>
                    We insure timely payments
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
                  <p className='font-size-5 text-default-color'>
                    Support available 7 days a week
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
