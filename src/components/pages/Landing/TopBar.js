import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <header className='site-header site-header--menu-right bg-default position-fixed py-7 py-xs-0 site-header--absolute'>
      <div className='container'>
        <nav className='navbar site-navbar offcanvas-active navbar-expand-lg  px-0 py-0'>
          <div className='brand-logo'>
            <Link to='/'>
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
                  <Link className='nav-link' to='/worker'>
                    Worker
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
  );
};

export default TopBar;
