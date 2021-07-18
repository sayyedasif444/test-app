import React from 'react';
import { Modal } from 'react-bootstrap';

const AssignUser = ({ showModal, setModal }) => {
  return (
    <div>
      <Modal size='lg' show={showModal}>
        <Modal.Header>
          {' '}
          <h3 className='font-size-6 mb-0'>Create and Assign User</h3>
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
                      <div className='col-lg-12 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          Company Name <span className='text-danger'>*</span>
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Ex: Google'
                        />
                      </div>
                      <div className='col-lg-12 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          Company Admin <span className='text-danger'>*</span>
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='example@admin.com'
                        />
                      </div>

                      <div className='col-lg-6 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          City
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Ex: Pune'
                        />
                      </div>
                      <div className='col-lg-6 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          State
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Ex: Maharashtra'
                        />
                      </div>
                      <div className='col-lg-6 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          Country
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Ex: India'
                        />
                      </div>
                      <div className='col-lg-6 mb-7'>
                        <label className='font-size-4 font-weight-semibold text-black-2 mb-5 line-height-reset'>
                          Zipcode
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Ex: 411001'
                        />
                      </div>

                      <div className='col-lg-12 pt-4'>
                        <button className='btn btn-primary text-uppercase w-100 h-px-48'>
                          Save & Proceed
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

export default AssignUser;
