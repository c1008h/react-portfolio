import React from 'react';
// import { picofme } from "../../aboutme"
import '../styles/index.css'

export default function About() {
  return (
    <div>
      <section>
        <h1>About</h1>
      </section>
      <div className='row'>
        <div className='col-4'>
          <img
            id='picofme'
            alt="picofme"
            //className="absolute inset-0 w-full h-full object-cover object-center col-6"
            src='/images/picofme.png'
          />
        </div>
        <div className='col-6'> 
          <p>
          Full-Stack developer with a strong background in customer service to deliver satisfaction through simplifying complex applications. 
          Earned a certificate in Full Stack Web Development from the University of Washington Coding Boot Camp with hands-on experience in HTML, CSS, JavaScript, React, and jQuery. 
          Driven to solve challenging problems and collaborate with a passionate team to build creative projects from ideation to execution. 
          I enjoy organizing code for easier collaboration and troubleshooting. 
          With a customer service mindset, I excel at improving user experiences through increased accessibility.
          </p>
        </div>
      </div>
      
    </div>
  );
}
