import React from 'react';
import './styles/index.css'


function Footer ({ currentPage, handlePageChange }) {
    return (
        <div className='mt-auto' id='footer'>
            <div className='d-flex flex-row justify-content-center'>
                <div className='col-1'>
                    <a rel="noreferrer"
                    target="_blank" href='https://github.com/c1008h'>
                        <img 
                            src='images/github-square-512.webp' 
                            alt='github'
                            className='github'
                            style={{width:'30px', height:'auto'}}
                        />
                    </a>
                </div>
                <div className='col-1'>
                    <a rel="noreferrer"
                    target="_blank" href='https://www.linkedin.com/in/chris-hong97/'>
                        <img 
                            src='images/linkedinlogo.png' 
                            alt='linkedin'
                            className='linkedin'
                            style={{width:'30px', height:'auto'}}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Footer;