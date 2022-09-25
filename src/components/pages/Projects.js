import React from "react";
import { projects } from "../../data"
import '../styles/index.css'


export default function Projects() {

  return (
      <section id="projects" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40 col-12">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
              My Projects
          </h1>

        <div className="flex flex-wrap m-1 row">
          {projects.map((project) => (
            <div className="col-lg-6">
          
              <div className="flex relative" id='portfolioSquares'>
                  <img 
                    key={projects}
                    alt="gallery"
                    className="col-12 m-4"
                    src={project.image}
                    style={{height:'300px', opacity:'.85'}}
                  />
              </div>                          
              <div 
                className='d-flex flex-row justify-content-center col-7' 
                id='showAfter'>
                  <div className="col" 
                    style={{
                    zIndex: 'auto',
                    position:'relative',
                    bottom:'250px',
                    left:'150px'}}>
                    <a href={project.link} rel="noreferrer"
                    target="_blank" style={{textDecoration:'none', color:'black'}}>
                      <h1 className="mb-3 col-12 title" key={projects}>
                        {project.title}
                      </h1>
                    </a>
                    <a key={projects} href={project.github} rel="noreferrer"
                    target="_blank" className='col-2'>
                      <img
                        className='col-1 github'
                        src='images/github-square-512.webp' 
                        alt='githubimage'
                        style={{width:'25px', height:'auto'}}
                      />
                    </a>
                    <div className="d-flex flex-row justify-content-center">   
                      <h2 key={projects}>
                        {project.subtitle}
                      </h2>
                    </div>
                  </div>
                </div>               
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}