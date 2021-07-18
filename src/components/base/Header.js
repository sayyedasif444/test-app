import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className='site-header site-header--menu-right bg-default position-fixed py-7 py-xs-0 site-header--absolute'>
        <div className='container-fluid-fluid px-10'>
          <nav className='navbar site-navbar offcanvas-active navbar-expand-lg  px-0 py-0'>
            <div className='brand-logo'>
              <Link to='#!'>
                <img
                  src='/assets/image/logo-main-black.png'
                  alt=''
                  className='light-version-logo default-logo'
                />
                <img
                  src='/assets/image/logo-main-white.png'
                  alt=''
                  className='dark-version-logo'
                />
              </Link>
            </div>
            <div className='collapse navbar-collapse' id='mobile-menu'>
              <div className='navbar-nav-wrapper'>
                <ul className='navbar-nav main-menu'>
                  <li className='nav-item'>
                    <Link className='nav-link' to='#!'>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='#!'>
                      Jobs
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='#!'>
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
              <button
                className='d-block d-lg-none offcanvas-btn-close focus-reset'
                type='button'
                data-toggle='collapse'
                data-target='#mobile-menu'
                aria-controls='mobile-menu'
                aria-expanded='true'
                aria-label='Toggle navigation'
              >
                <i className='gr-cross-icon'></i>
              </button>
            </div>
            <div className='header-btn-devider ml-auto ml-lg-5 pl-2 d-none d-xs-flex align-items-center'>
              <div>
                <Link
                  to='#!'
                  className='px-3 ml-7 font-size-7 notification-block flex-y-center position-relative'
                >
                  <i className='fas fa-bell heading-default-color'></i>
                  <span className='font-size-3 count font-weight-semibold text-white bg-primary circle-24 border border-width-3 border border-white'>
                    3
                  </span>
                </Link>
              </div>
              <div>
                <div className='dropdown show-gr-dropdown py-5'>
                  <Link
                    className='proile media ml-7 flex-y-center'
                    to='#!'
                    role='button'
                    id='dropdownMenuLink'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <div className='circle-40'>
                      <img src='/assets/image/header-profile.png' alt='' />
                    </div>
                    <i className='fas fa-chevron-down heading-default-color ml-6'></i>
                  </Link>
                  <div
                    className='dropdown-menu gr-menu-dropdown dropdown-right border-0 border-width-2 py-2 w-auto bg-default'
                    aria-labelledby='dropdownMenuLink'
                  >
                    <Link
                      className='dropdown-item py-2 font-size-3 font-weight-semibold line-height-1p2 text-uppercase'
                      to='/edit-profile'
                    >
                      Edit Profile
                    </Link>
                    <Link
                      className='dropdown-item py-2 text-red font-size-3 font-weight-semibold line-height-1p2 text-uppercase'
                      to='#!'
                    >
                      Log Out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <button
              className='navbar-toggler btn-close-off-canvas  hamburger-icon border-0'
              type='button'
              data-toggle='collapse'
              data-target='#mobile-menu'
              aria-controls='mobile-menu'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='hamburger hamburger--squeeze js-hamburger'>
                <span className='hamburger-box'>
                  <span className='hamburger-inner'></span>
                </span>
              </span>
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
