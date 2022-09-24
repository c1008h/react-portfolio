import React from 'react';
import './styles/index.css'


function Footer ({ currentPage, handlePageChange }) {
    return (
        <div>
            <div className='row'>
                <a href='https://github.com/c1008h'>
                    <img 
                        src='images/github-square-512.webp' 
                        alt='github'
                        className='col-6 github'
                    />
                </a>
            </div>
            <div className='row'>
                <a href='https://www.linkedin.com/in/chris-hong97/'>
                    <img 
                        src='images/linkedinlogo.png' 
                        alt='linkedin'
                        className='col-6 linkedin'
                    />
                </a>
            </div>
        </div>
    )
}
export default Footer;