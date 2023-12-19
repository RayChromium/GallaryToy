import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import '../index.css';

export const Header = () => (
  <header className='storybook-header py-3 bg-blue-800 text-white shadow-md'>
    <div className="relative container mx-auto p-2">
      <div className='flex items-center justify-between space-x-4'>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>GalleryToy</h1>
        <nav className='relative container mx-auto p-6'>
          <div className="flex items-center justify-between space-x-4">
            <a href='/' className='hover:text-blue-300 hover:bg-white hover:bg-opacity-10 rounded-lg px-2 py-1 transition-all duration-200 ease-in-out'>Home</a>
            <a href='/' className='hover:text-blue-300 hover:bg-white hover:bg-opacity-10 rounded-lg px-2 py-1 transition-all duration-200 ease-in-out'>About</a>
            <a href='/' className='hover:text-blue-300 hover:bg-white hover:bg-opacity-10 rounded-lg px-2 py-1 transition-all duration-200 ease-in-out'>Contact</a>
          </div>
        </nav>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  // user: PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  // }),
  // onLogin: PropTypes.func.isRequired,
  // onLogout: PropTypes.func.isRequired,
  // onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};

export default Header;