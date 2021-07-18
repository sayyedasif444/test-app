import React from 'react';
import { Modal } from 'react-bootstrap';

const CreateJob = ({ showModal, setModal }) => {
  return (
    <div>
      <Modal size='lg' show={showModal}>
        <Modal.Header>
          {' '}
          <h3 className='font-size-6 mb-0'>Create New Job</h3>
          <button
            type='button'
            className='circle-32 btn-reset bg-white pos-abs-tr mt-md-n6 mr-lg-n6 focus-reset z-index-supper'
            data-dismiss='modal'
            onClick={() => {
              setModal();
            }}
          >
            <i className='fas fa-times'></i>
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className='login-modal-main bg-white rounded-8 overflow-hidden'>
            <div className='row no-gutters'>
              <div className='col-lg-12 col-md-12'>
                <div className='bg-white-2 h-100 px-7 pt-5 pb-7'>
                  <form action='/'>
                    <div className='row'>
                      <div className='col-6 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          Job Title <span className='text-danger'>*</span>
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Ex: Web Developer'
                        />
                      </div>
                      <div className='col-lg-6 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          Job Category <span className='text-danger'>*</span>
                        </label>
                        <select
                          name='country'
                          id='country'
                          className='form-control'
                        >
                          <option value='' data-display='Company 1'>
                            Category 1
                          </option>
                          <option value=''>Category 2</option>
                        </select>
                      </div>

                      <div className='col-lg-6 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          Salary From <span className='text-danger'>*</span>
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Ex: 800$'
                        />
                      </div>
                      <div className='col-lg-6 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          Salary To <span className='text-danger'>*</span>
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Ex: 1200$'
                        />
                      </div>
                      <div className='col-lg-6 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          Start Date <span className='text-danger'>*</span>
                        </label>
                        <input
                          type='date'
                          className='form-control'
                          placeholder='Ex: 800$'
                        />
                      </div>
                      <div className='col-lg-6 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          End Date <span className='text-danger'>*</span>
                        </label>
                        <input
                          type='date'
                          className='form-control'
                          placeholder='Ex: 1200$'
                        />
                      </div>
                      <div className='col-lg-6 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          Working Hours From{' '}
                          <span className='text-danger'>*</span>
                        </label>
                        <input
                          type='time'
                          className='form-control'
                          placeholder='Ex: 800$'
                        />
                      </div>
                      <div className='col-lg-6 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          Working Hours To{' '}
                          <span className='text-danger'>*</span>
                        </label>
                        <input
                          type='time'
                          className='form-control'
                          placeholder='Ex: 1200$'
                        />
                      </div>
                      <div className='col-lg-12 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          Job Description <span className='text-danger'>*</span>
                        </label>
                        <textarea
                          name=''
                          id=''
                          placeholder='Type your Description Here...'
                          className='form-control h-px-144'
                        ></textarea>
                      </div>
                      <div className='col-lg-12 pt-4'>
                        <button className='btn btn-primary text-uppercase w-100 h-px-48'>
                          Save & Publish
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CreateJob;
