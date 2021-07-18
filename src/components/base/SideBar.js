import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ createjob }) => {
  const [company, setCompany] = useState(0);
  const [job, setJob] = useState(0);
  const [applicants, setApplicants] = useState(0);
  const [user, setUser] = useState(0);
  const [settings, setSettings] = useState(0);
  const getLastItem = (thePath) =>
    thePath.substring(thePath.lastIndexOf('/') + 1);
  const url = getLastItem(window.location.href);
  useEffect(() => {
    setCompany(0);
    setJob(0);
    setApplicants(0);
    setUser(0);
    setSettings(0);
    changeLink(url);
  }, [url]);
  const changeLink = (url) => {
    if (url === 'company-management') {
      setCompany(1);
    }
    if (url === 'job-management') {
      setJob(1);
    }
    if (url === 'access-management') {
      setApplicants(1);
    }
    if (url === 'user-management') {
      setUser(1);
    }
    if (url === 'settings') {
      setSettings(1);
    }
    if (url === 'view') {
      setJob(1);
    }
  };

  return (
    <div>
      <div className='dashboard-sidebar-wrapper pt-11' id='sidebar'>
        <div className='brand-logo px-11'>
          <Link to='https://shade.uxtheme.net/shade-pro'>
            <img src='image/logo-main-black.png' alt='' />
          </Link>
        </div>
        <div className='my-15 px-11'>
          <button
            to='create-job'
            className='btn btn-primary btn-xl w-100 text-uppercase'
            onClick={() => {
              createjob();
            }}
          >
            <span className='mr-5 d-inline-block'>+</span>Post a new job
          </button>
        </div>
        <ul className='list-unstyled dashboard-layout-sidebar'>
          <li
            className={company === 1 ? 'active' : ''}
            onClick={() => {
              changeLink(getLastItem(window.location.href));
            }}
          >
            <Link
              to='/company-management'
              className='px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center'
            >
              <i className='icon icon-layout-11 mr-7'></i>Company Management
            </Link>
          </li>
          <li
            className={job === 1 ? 'active' : ''}
            onClick={() => {
              changeLink(getLastItem(window.location.href));
            }}
          >
            <Link
              to='/job-management'
              className='px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center'
            >
              <i className='fas fa-briefcase mr-7'></i>Posted Jobs
            </Link>
          </li>
          <li
            className={applicants === 1 ? 'active' : ''}
            onClick={() => {
              changeLink(getLastItem(window.location.href));
            }}
          >
            <Link
              to='/access-management'
              className='px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center'
            >
              <i className='fas fa-user mr-7'></i>Access Management{' '}
            </Link>
          </li>
          <li
            className={user === 1 ? 'active' : ''}
            onClick={() => {
              changeLink(getLastItem(window.location.href));
            }}
          >
            <Link
              to='/user-management'
              className='px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center'
            >
              <i className='fas fa-users mr-7'></i>User Management
            </Link>
          </li>
          <li
            className={settings === 1 ? 'active' : ''}
            onClick={() => {
              changeLink(getLastItem(window.location.href));
            }}
          >
            <Link
              to='/settings'
              className='px-10 py-1 my-5 font-size-4 font-weight-semibold flex-y-center'
            >
              <i className='fas fa-cog mr-7'></i>Settings
            </Link>
          </li>
        </ul>
      </div>
      <Link
        className='sidebar-mobile-button'
        data-toggle='collapse'
        to='#sidebar'
        role='button'
        aria-expanded='false'
        aria-controls='sidebar'
      >
        <i className='icon icon-sidebar-2'></i>
      </Link>
    </div>
  );
};

export default SideBar;
