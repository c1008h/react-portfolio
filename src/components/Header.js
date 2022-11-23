import React from 'react';
import './styles/header.css'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Header({ currentPage, handlePageChange }) {
  return (
    <div className='row'
      style={{height: '150px', width:'auto', backgroundColor:'gray'}}
    >
      <div 
        className='col-4'
      >
        <h1>
          <a href='#about' className='name col-12'
          style={{color:'whitesmoke', textDecoration: 'none'}}>Chris Hong</a>
        </h1>
      </div>
      <div className='col-8'>
        <ul className="nav">
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              style={{color:'whitesmoke'}}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#projects"
              onClick={() => handlePageChange('Projects')}
              className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
              style={{color:'whitesmoke'}}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              style={{color:'whitesmoke'}}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              style={{color:'whitesmoke'}}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default Header;
