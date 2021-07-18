import React from 'react';
import { Link } from 'react-router-dom';

const CompanyManagement = ({ createCompany, editCompany }) => {
  return (
    <div
      className='dashboard-main-container mt-25 mt-lg-24'
      id='dashboard-body'
    >
      <div className='container'>
        <div className='mb-18'>
          <div className='row mb-8 align-items-center'>
            <div className='col-lg-6 mb-lg-0 mb-4'>
              <h3 className='font-size-6 mb-0'>Company Management</h3>
            </div>
            <div className='col-lg-6'>
              <div className='d-flex flex-wrap align-items-center justify-content-lg-end'>
                <div className='h-px-48'>
                  <button
                    onClick={() => {
                      createCompany();
                    }}
                    className='btn btn-primary btn-lg pl-10 pr-10 w-100 text-uppercase'
                  >
                    <span className='mr-5 d-inline-block'>+</span>Add New
                    Company
                  </button>
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
                      Name
                    </th>
                    <th
                      scope='col'
                      className='pl-4 border-0 font-size-4 font-weight-normal'
                    >
                      Company Admin
                    </th>

                    <th
                      scope='col'
                      className='pl-4 border-0 font-size-4 font-weight-normal'
                    >
                      Created on
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
                      className='pl-6 border-0 py-7 min-width-px-235'
                    >
                      <div className=''>
                        <Link
                          to='#!'
                          className='font-size-4 mb-0 font-weight-semibold text-black-2'
                        >
                          Momenttext
                        </Link>
                      </div>
                    </th>
                    <td className='table-y-middle py-7 min-width-px-135'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        asif.sayyed@momenttext.com
                      </h3>
                    </td>

                    <td className='table-y-middle py-7 min-width-px-155'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        12 July, 2020
                      </h3>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-205'>
                      <label className='switch'>
                        <input
                          type='checkbox'
                          defaultChecked
                          onChange={(e) => {
                            console.log(e.target.hasAttribute('checked'));
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
                          editCompany(true);
                        }}
                      >
                        <i className='fas fa-edit  circle-40 mr-5 font-size-3 gr-color-eastern-opacity-visible font-weight-bold '></i>
                        <span className='bg-bluez text-white font-size-3 rounded-3 px-3'>
                          Edit
                        </span>
                      </Link>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-100'>
                      <Link
                        to='#!'
                        className='font-size-3 font-weight-bold text-red-2 text-uppercase hover-danger'
                      >
                        <i className='fas fa-trash circle-40 mr-5 font-size-3 text-danger font-weight-bold '></i>
                        <span className='bg-danger text-white font-size-3 rounded-3 px-3'>
                          Delete
                        </span>
                      </Link>
                    </td>
                  </tr>
                  <tr className='border border-color-2'>
                    <th
                      scope='row'
                      className='pl-6 border-0 py-7 min-width-px-235'
                    >
                      <div className=''>
                        <Link
                          to='#!'
                          className='font-size-4 mb-0 font-weight-semibold text-black-2'
                        >
                          Momenttext
                        </Link>
                      </div>
                    </th>
                    <td className='table-y-middle py-7 min-width-px-135'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        asif.sayyed@momenttext.com
                      </h3>
                    </td>

                    <td className='table-y-middle py-7 min-width-px-155'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        12 July, 2020
                      </h3>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-205'>
                      <label className='switch'>
                        <input
                          type='checkbox'
                          defaultChecked
                          onChange={(e) => {
                            console.log(e.target.hasAttribute('checked'));
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
                          editCompany(true);
                        }}
                      >
                        <i className='fas fa-edit  circle-40 mr-5 font-size-3 gr-color-eastern-opacity-visible font-weight-bold '></i>
                        <span className='bg-bluez text-white font-size-3 rounded-3 px-3'>
                          Edit
                        </span>
                      </Link>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-100'>
                      <Link
                        to='#!'
                        className='font-size-3 font-weight-bold text-red-2 text-uppercase hover-danger'
                      >
                        <i className='fas fa-trash circle-40 mr-5 font-size-3 text-danger font-weight-bold '></i>
                        <span className='bg-danger text-white font-size-3 rounded-3 px-3'>
                          Delete
                        </span>
                      </Link>
                    </td>
                  </tr>
                  <tr className='border border-color-2'>
                    <th
                      scope='row'
                      className='pl-6 border-0 py-7 min-width-px-235'
                    >
                      <div className=''>
                        <Link
                          to='#!'
                          className='font-size-4 mb-0 font-weight-semibold text-black-2'
                        >
                          Momenttext
                        </Link>
                      </div>
                    </th>
                    <td className='table-y-middle py-7 min-width-px-135'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        asif.sayyed@momenttext.com
                      </h3>
                    </td>

                    <td className='table-y-middle py-7 min-width-px-155'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        12 July, 2020
                      </h3>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-205'>
                      <label className='switch'>
                        <input
                          type='checkbox'
                          defaultChecked
                          onChange={(e) => {
                            console.log(e.target.hasAttribute('checked'));
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
                          editCompany(true);
                        }}
                      >
                        <i className='fas fa-edit  circle-40 mr-5 font-size-3 gr-color-eastern-opacity-visible font-weight-bold '></i>
                        <span className='bg-bluez text-white font-size-3 rounded-3 px-3'>
                          Edit
                        </span>
                      </Link>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-100'>
                      <Link
                        to='#!'
                        className='font-size-3 font-weight-bold text-red-2 text-uppercase hover-danger'
                      >
                        <i className='fas fa-trash circle-40 mr-5 font-size-3 text-danger font-weight-bold '></i>
                        <span className='bg-danger text-white font-size-3 rounded-3 px-3'>
                          Delete
                        </span>
                      </Link>
                    </td>
                  </tr>
                  <tr className='border border-color-2'>
                    <th
                      scope='row'
                      className='pl-6 border-0 py-7 min-width-px-235'
                    >
                      <div className=''>
                        <Link
                          to='#!'
                          className='font-size-4 mb-0 font-weight-semibold text-black-2'
                        >
                          Momenttext
                        </Link>
                      </div>
                    </th>
                    <td className='table-y-middle py-7 min-width-px-135'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        asif.sayyed@momenttext.com
                      </h3>
                    </td>

                    <td className='table-y-middle py-7 min-width-px-155'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        12 July, 2020
                      </h3>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-205'>
                      <label className='switch'>
                        <input
                          type='checkbox'
                          defaultChecked
                          onChange={(e) => {
                            console.log(e.target.hasAttribute('checked'));
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
                          editCompany(true);
                        }}
                      >
                        <i className='fas fa-edit  circle-40 mr-5 font-size-3 gr-color-eastern-opacity-visible font-weight-bold '></i>
                        <span className='bg-bluez text-white font-size-3 rounded-3 px-3'>
                          Edit
                        </span>
                      </Link>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-100'>
                      <Link
                        to='#!'
                        className='font-size-3 font-weight-bold text-red-2 text-uppercase hover-danger'
                      >
                        <i className='fas fa-trash circle-40 mr-5 font-size-3 text-danger font-weight-bold '></i>
                        <span className='bg-danger text-white font-size-3 rounded-3 px-3'>
                          Delete
                        </span>
                      </Link>
                    </td>
                  </tr>
                  <tr className='border border-color-2'>
                    <th
                      scope='row'
                      className='pl-6 border-0 py-7 min-width-px-235'
                    >
                      <div className=''>
                        <Link
                          to='#!'
                          className='font-size-4 mb-0 font-weight-semibold text-black-2'
                        >
                          Momenttext
                        </Link>
                      </div>
                    </th>
                    <td className='table-y-middle py-7 min-width-px-135'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        asif.sayyed@momenttext.com
                      </h3>
                    </td>

                    <td className='table-y-middle py-7 min-width-px-155'>
                      <h3 className='font-size-4 font-weight-normal text-black-2 mb-0'>
                        12 July, 2020
                      </h3>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-205'>
                      <label className='switch'>
                        <input
                          type='checkbox'
                          defaultChecked
                          onChange={(e) => {
                            console.log(e.target.hasAttribute('checked'));
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
                          editCompany(true);
                        }}
                      >
                        <i className='fas fa-edit  circle-40 mr-5 font-size-3 gr-color-eastern-opacity-visible font-weight-bold  '></i>
                        <span className='bg-bluez text-white font-size-3 rounded-3 px-3'>
                          Edit
                        </span>
                      </Link>
                    </td>
                    <td className='table-y-middle py-7 min-width-px-100'>
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

export default CompanyManagement;
