import React from 'react';
import { Link } from 'react-router-dom';

const AccessManagement = ({ createAssign, editAssign }) => {
  return (
    <div
      className='dashboard-main-container mt-25 mt-lg-24'
      id='dashboard-body'
    >
      <div className='container'>
        <div className='mb-18'>
          <div className='row mb-8 align-items-center'>
            <div className='col-lg-6 mb-lg-0 mb-4'>
              <h3 className='font-size-6 mb-0'>Access Management</h3>
            </div>
            <div className='col-lg-6'>
              <div className='d-flex flex-wrap align-items-center justify-content-lg-end'>
                <div className='h-px-48'>
                  <Link
                    to='#!'
                    className='btn btn-primary btn-lg pl-10 pr-10 w-100 text-uppercase'
                    onClick={(e) => {
                      e.preventDefault();
                      createAssign();
                    }}
                  >
                    <span className='mr-5 d-inline-block'>+</span>Add New User
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-white shadow-8 pt-7 rounded pb-9 px-11'>
            <div className='table-responsive '>
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='pl-0 border-0 font-size-4 font-weight-normal'
                    >
                      Fist name
                    </th>
                    <th
                      scope='col'
                      className='pl-4 border-0 font-size-4 font-weight-normal'
                    >
                      Last name
                    </th>
                    <th
                      scope='col'
                      className='pl-4 border-0 font-size-4 font-weight-normal'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='pl-4 border-0 font-size-4 font-weight-normal'
                    >
                      Role
                    </th>
                    <th
                      scope='col'
                      className='pl-4 border-0 font-size-4 font-weight-normal'
                    >
                      Expiry date
                    </th>
                    <th
                      scope='col'
                      className='pl-4 border-0 font-size-4 font-weight-normal'
                    >
                      Expiry time
                    </th>
                    <th
                      scope='col'
                      className='pl-4 border-0 font-size-4 font-weight-normal'
                    >
                      Status
                    </th>
                    <th
                      scope='col'
                      className='pl-4 border-0 font-size-4 font-weight-normal'
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border border-color-2'>
                    <th
                      scope='row'
                      className='table-y-middle py-7 min-width-px-80'
                    >
                      <div className=''>Asif</div>
                    </th>
                    <th
                      scope='row'
                      className='table-y-middle py-7 min-width-px-100'
                    >
                      <div className=''>Sayyed</div>
                    </th>
                    <td className='table-y-middle py-7 min-width-px-80'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        asif.sayyed@momenttext.com
                      </h3>
                    </td>
                    <td
                      className='table-y-middle py-7 min-width-px-185
                    '
                    >
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        COMPANY-ADMIN
                      </h3>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-135'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        12 July, 2020
                      </h3>
                    </td>

                    <td className='table-y-middle py-7 min-width-px-135'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        12 July, 2020
                      </h3>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-80 pr-10'>
                      <label className='switch'>
                        <input
                          type='checkbox'
                          defaultChecked
                          onChange={() => {
                            console.log('abc');
                          }}
                        />
                        <span className='slider round'></span>
                      </label>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-80'>
                      <Link
                        to='#!'
                        className='font-size-3 font-weight-bold text-green text-uppercase hover-green'
                        onClick={(e) => {
                          e.preventDefault();
                          editAssign(true);
                        }}
                      >
                        <i className='fas fa-edit  circle-40 mr-5 font-size-3 gr-color-eastern-opacity-visible font-weight-bold  '></i>
                        <span className='bg-bluez text-white font-size-3 rounded-3 px-3'>
                          Edit
                        </span>
                      </Link>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-80'>
                      <Link
                        to='#!'
                        className='font-size-3 font-weight-bold text-red-2 text-uppercase hover-danger'
                      >
                        <i className='fas fa-trash circle-40 mr-5 font-size-3 text-danger font-weight-bold  '></i>
                        <span className='bg-danger text-white font-size-3 rounded-3 px-3'>
                          Delete
                        </span>
                      </Link>
                    </td>
                  </tr>
                  <tr className='border border-color-2'>
                    <th
                      scope='row'
                      className='table-y-middle py-7 min-width-px-80'
                    >
                      <div className=''>Asif</div>
                    </th>
                    <th
                      scope='row'
                      className='table-y-middle py-7 min-width-px-100'
                    >
                      <div className=''>Sayyed</div>
                    </th>
                    <td className='table-y-middle py-7 min-width-px-80'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        asif.sayyed@momenttext.com
                      </h3>
                    </td>
                    <td
                      className='table-y-middle py-7 min-width-px-185
                    '
                    >
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        COMPANY-ADMIN
                      </h3>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-135'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        12 July, 2020
                      </h3>
                    </td>

                    <td className='table-y-middle py-7 min-width-px-135'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        12 July, 2020
                      </h3>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-80 pr-10'>
                      <label className='switch'>
                        <input
                          type='checkbox'
                          defaultChecked
                          onChange={() => {
                            console.log('abc');
                          }}
                        />
                        <span className='slider round'></span>
                      </label>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-80'>
                      <Link
                        to='#!'
                        className='font-size-3 font-weight-bold text-green text-uppercase hover-green'
                        onClick={(e) => {
                          e.preventDefault();
                          editAssign(true);
                        }}
                      >
                        <i className='fas fa-edit  circle-40 mr-5 font-size-3 gr-color-eastern-opacity-visible font-weight-bold  '></i>
                        <span className='bg-bluez text-white font-size-3 rounded-3 px-3'>
                          Edit
                        </span>
                      </Link>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-80'>
                      <Link
                        to='#!'
                        className='font-size-3 font-weight-bold text-red-2 text-uppercase hover-danger'
                      >
                        <i className='fas fa-trash circle-40 mr-5 font-size-3 text-danger font-weight-bold  '></i>
                        <span className='bg-danger text-white font-size-3 rounded-3 px-3'>
                          Delete
                        </span>
                      </Link>
                    </td>
                  </tr>
                  <tr className='border border-color-2'>
                    <th
                      scope='row'
                      className='table-y-middle py-7 min-width-px-80'
                    >
                      <div className=''>Asif</div>
                    </th>
                    <th
                      scope='row'
                      className='table-y-middle py-7 min-width-px-100'
                    >
                      <div className=''>Sayyed</div>
                    </th>
                    <td className='table-y-middle py-7 min-width-px-80'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        asif.sayyed@momenttext.com
                      </h3>
                    </td>
                    <td
                      className='table-y-middle py-7 min-width-px-185
                    '
                    >
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        COMPANY-ADMIN
                      </h3>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-135'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        12 July, 2020
                      </h3>
                    </td>

                    <td className='table-y-middle py-7 min-width-px-135'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        12 July, 2020
                      </h3>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-80 pr-10'>
                      <label className='switch'>
                        <input
                          type='checkbox'
                          defaultChecked
                          onChange={() => {
                            console.log('abc');
                          }}
                        />
                        <span className='slider round'></span>
                      </label>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-80'>
                      <Link
                        to='#!'
                        className='font-size-3 font-weight-bold text-green text-uppercase hover-green'
                        onClick={(e) => {
                          e.preventDefault();
                          editAssign(true);
                        }}
                      >
                        <i className='fas fa-edit  circle-40 mr-5 font-size-3 gr-color-eastern-opacity-visible font-weight-bold  '></i>
                        <span className='bg-bluez text-white font-size-3 rounded-3 px-3'>
                          Edit
                        </span>
                      </Link>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-80'>
                      <Link
                        to='#!'
                        className='font-size-3 font-weight-bold text-red-2 text-uppercase hover-danger'
                      >
                        <i className='fas fa-trash circle-40 mr-5 font-size-3 text-danger font-weight-bold  '></i>
                        <span className='bg-danger text-white font-size-3 rounded-3 px-3'>
                          Delete
                        </span>
                      </Link>
                    </td>
                  </tr>
                  <tr className='border border-color-2'>
                    <th
                      scope='row'
                      className='table-y-middle py-7 min-width-px-80'
                    >
                      <div className=''>Asif</div>
                    </th>
                    <th
                      scope='row'
                      className='table-y-middle py-7 min-width-px-100'
                    >
                      <div className=''>Sayyed</div>
                    </th>
                    <td className='table-y-middle py-7 min-width-px-80'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        asif.sayyed@momenttext.com
                      </h3>
                    </td>
                    <td
                      className='table-y-middle py-7 min-width-px-185
                    '
                    >
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        COMPANY-ADMIN
                      </h3>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-135'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        12 July, 2020
                      </h3>
                    </td>

                    <td className='table-y-middle py-7 min-width-px-135'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        12 July, 2020
                      </h3>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-80 pr-10'>
                      <label className='switch'>
                        <input
                          type='checkbox'
                          defaultChecked
                          onChange={() => {
                            console.log('abc');
                          }}
                        />
                        <span className='slider round'></span>
                      </label>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-80'>
                      <Link
                        to='#!'
                        className='font-size-3 font-weight-bold text-green text-uppercase hover-green'
                        onClick={(e) => {
                          e.preventDefault();
                          editAssign(true);
                        }}
                      >
                        <i className='fas fa-edit  circle-40 mr-5 font-size-3 gr-color-eastern-opacity-visible font-weight-bold  '></i>
                        <span className='bg-bluez text-white font-size-3 rounded-3 px-3'>
                          Edit
                        </span>
                      </Link>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-80'>
                      <Link
                        to='#!'
                        className='font-size-3 font-weight-bold text-red-2 text-uppercase hover-danger'
                      >
                        <i className='fas fa-trash circle-40 mr-5 font-size-3 text-danger font-weight-bold  '></i>
                        <span className='bg-danger text-white font-size-3 rounded-3 px-3'>
                          Delete
                        </span>
                      </Link>
                    </td>
                  </tr>
                  <tr className='border border-color-2'>
                    <th
                      scope='row'
                      className='table-y-middle py-7 min-width-px-80'
                    >
                      <div className=''>Asif</div>
                    </th>
                    <th
                      scope='row'
                      className='table-y-middle py-7 min-width-px-100'
                    >
                      <div className=''>Sayyed</div>
                    </th>
                    <td className='table-y-middle py-7 min-width-px-80'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        asif.sayyed@momenttext.com
                      </h3>
                    </td>
                    <td
                      className='table-y-middle py-7 min-width-px-185
                    '
                    >
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        COMPANY-ADMIN
                      </h3>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-135'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        12 July, 2020
                      </h3>
                    </td>

                    <td className='table-y-middle py-7 min-width-px-135'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        12 July, 2020
                      </h3>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-80 pr-10'>
                      <label className='switch'>
                        <input
                          type='checkbox'
                          defaultChecked
                          onChange={() => {
                            console.log('abc');
                          }}
                        />
                        <span className='slider round'></span>
                      </label>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-80'>
                      <Link
                        to='#!'
                        className='font-size-3 font-weight-bold text-green text-uppercase hover-green'
                        onClick={(e) => {
                          e.preventDefault();
                          editAssign(true);
                        }}
                      >
                        <i className='fas fa-edit  circle-40 mr-5 font-size-3 gr-color-eastern-opacity-visible font-weight-bold  '></i>
                        <span className='bg-bluez text-white font-size-3 rounded-3 px-3'>
                          Edit
                        </span>
                      </Link>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-80'>
                      <Link
                        to='#!'
                        className='font-size-3 font-weight-bold text-red-2 text-uppercase hover-danger'
                      >
                        <i className='fas fa-trash circle-40 mr-5 font-size-3 text-danger font-weight-bold  '></i>
                        <span className='bg-danger text-white font-size-3 rounded-3 px-3'>
                          Delete
                        </span>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessManagement;
