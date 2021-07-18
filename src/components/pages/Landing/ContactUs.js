import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <div className='bg-default-2 pt-16 pb-12 pt-lg-22 pb-lg-27'>
        <div className='container'>
          <div className='row justify-content-center mt-14'>
            <div className='col-xxl-6 col-xl-7 col-lg-8'>
              <h2 className='font-size-9 text-center mb-11'>Contact Us</h2>
              <div className='bg-white px-9 pt-9 pb-7 shadow-8 rounded-4'>
                <form action='/'>
                  <div className='row'>
                    <div className='col-12 mb-7'>
                      <label
                        forhtml=''
                        className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'
                      >
                        Your Name
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Jhon Doe'
                      />
                    </div>
                    <div className='col-lg-6 mb-7'>
                      <label
                        forhtml=''
                        className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'
                      >
                        E-mail
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='example@gmail.com'
                      />
                    </div>
                    <div className='col-lg-6 mb-7'>
                      <label
                        forhtml=''
                        className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'
                      >
                        Subject
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Special contract'
                      />
                    </div>
                    <div className='col-lg-12 mb-7'>
                      <label
                        forhtml='message'
                        className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'
                      >
                        Message
                      </label>
                      <textarea
                        name=''
                        id=''
                        placeholder='Type your message'
                        className='form-control h-px-144'
                      ></textarea>
                    </div>
                    <div className='col-lg-12 pt-4'>
                      <button className='btn btn-primary text-uppercase w-100 h-px-48'>
                        Send Now
                      </button>
                    </div>
                  </div>
                </form>
                <div className='mt-8'>
                  <h3 className='font-size-4'>Contact Information</h3>
                  <div className='media mb-2'>
                    <div className='mr-6'>
                      <i className='fas fa-map-marker-alt mt-2'></i>
                    </div>
                    <p className='font-size-4 mb-0'>
                      C-20, First Floor, Sec-2, Noida, India
                    </p>
                  </div>
                  <div className='media mb-2'>
                    <div className='mr-6'>
                      <i className='fas fa-phone-alt mt-2'></i>
                    </div>
                    <p className='font-size-4 mb-0'>+91 931 527 9904</p>
                  </div>
                  <div className='media mb-2'>
                    <div className='mr-6'>
                      <i className='fas fa-envelope mt-2'></i>
                    </div>
                    <p className='font-size-4 mb-0'>contact@momenttext.com</p>
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

export default ContactUs;
