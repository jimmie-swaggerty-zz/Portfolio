import { faAws, faBootstrap, faCss3, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import MainBanner from '../Components/MainBanner'
import NavBar from '../Components/NavBar'
import mongodb from '../images/mongodb.png'
import wix from '../images/wix.png'
import jquery from '../images/jquery.png'
import mysql from '../images/mysql.png'
import adobecc from '../images/adobecc.png'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Components/Footer'
import Slider from '../Components/Slider'
import { projects } from '../projects/projects'

const Main = () => {
        return (
                <div className="">
                        <MainBanner />
                        <NavBar />
                        <div className="container-fluid">
                                <div className="d-flex row p-2 mt-3 justify-content-around">
                                        <div className="col-lg-4 col-12 text-center" id="mystory">
                                                <div className="bg-decorative teal-border h-100">
                                                        <h1 className="section-header">My Story</h1>
                                                </div>
                                        </div>
                                        <div className="col-lg-8 col-12">
                                                <div className="text-body text-center">
                                                        <p>
                                                                My passion for <div className="highlight">web development</div>  started in 6th grade when my tech teacher introduced me to basic HTML. That year, I competed against my upperclassmen in a timed code off and won!
                                                        </p>
                                                        <p>
                                                                As a child of the MySpace era, I began to learn <div className="highlight">CSS</div> to assist my friends in customizing their profiles. I was completely obsessed with the different aspects of design that I could accomplish with simple strings of code!
                                                        </p>
                                                        <p>
                                                                As an adult, I put my focus into entrepreneurship, doing everything from business adminstration to <div className="highlight">graphic design</div> and <div className="highlight">web development</div>. This eventually led me to Wix, where I got my initial introduction to <div className="highlight">JQuery</div> and their custom language, Velo. I have been designing with Wix for over 10 years, but I was desperate to learn more.
                                                        </p>
                                                        <p>
                                                                In the Spring of 2020 I decided to enroll in Coding Dojo for a self-paced course in the MERN stack. I became enthralled in the different ways you can develop using languages like <div className="highlight">React</div>, <div className="highlight">Node.js</div>, <div className="highlight">MongoDB</div>, and <div className="highlight">Express</div>. I decided to continue my education by enrolling in the part time bootcamp in Winter of 2020 to get a more one on one experience learning development. Since then I have expanded my developmental knowledge into many other languages including <div className="highlight">MySQL</div>, <div className="highlight">JQuery</div>, and so much more!
                                                        </p>
                                                        <p>I am excited to take the dive into doing what I love full time. My hopes are to expand accessibility and inclusivity in the development industry and to one day inspire others to become developers too!</p>
                                                </div>
                                        </div>
                                </div>
                                <div className="d-flex row p-2 justify-content-around mt-3">
                                        <div className="col-12 text-center" id="mytools">
                                                <div className="bg-decorative teal-border">
                                                        <h1 className="section-header">My Toolkit</h1>
                                                </div>
                                        </div>
                                        <div className="col-12">
                                                <div className="text-body">
                                                        <div className="d-flex justify-content-around">
                                                                <div className="col text-teal text-center">
                                                                        <FontAwesomeIcon icon={faReact} className="fa-3x" />
                                                                        <br />React
                                                                </div>
                                                                <div className="col text-teal text-center">
                                                                        <FontAwesomeIcon icon={faNodeJs} className="fa-3x text-teal" />
                                                                        <br />Node.js
                                                                </div>
                                                                <div className="col text-teal text-center">
                                                                        <FontAwesomeIcon icon={faAws} className="fa-3x text-teal" />
                                                                        <br />Amazon AWS
                                                                </div>
                                                                <div className="col text-teal text-center">
                                                                        <img src={mongodb} className="icon" />
                                                                        <br />MongoDB
                                                                </div>
                                                                <div className="col text-teal text-center">
                                                                        <FontAwesomeIcon icon={faBootstrap} className="fa-3x text-teal" />
                                                                        <br />Bootstrap
                                                                </div>
                                                        </div>
                                                        <div className="d-flex justify-content-around mt-3">
                                                                <div className="col text-teal text-center">
                                                                        <img src={mysql} className="icon" />
                                                                        <br />MySQL
                                                                </div>
                                                                <div className="col text-teal text-center">
                                                                        <img src={jquery} className="icon" />
                                                                        <br />JQuery
                                                                </div>
                                                                <div className="col text-teal text-center">
                                                                        <img src={adobecc} className="icon" />
                                                                        <br />Creative Cloud
                                                                </div>
                                                                <div className="col text-teal text-center">
                                                                        <FontAwesomeIcon icon={faCss3} className="fa-3x text-teal" />
                                                                        <br />CSS
                                                                </div>
                                                                <div className="col text-teal text-center">
                                                                        <FontAwesomeIcon icon={faPlus} className="fa-3x text-teal" />
                                                                        <br />and more!
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className="d-flex row p-2 mt-3 justify-content-around">
                                        <div className="col-12 text-center" id="myprojects">
                                                <div className="bg-decorative teal-border">
                                                        <h1 className="section-header">My Projects</h1>
                                                </div>
                                        </div>
                                        {/* <div className="col-12">
                                                <div className="teal-border" id="projects">
                                                        <Slider divid="projects" childstyle="col-3">
                                                                {projects.map((project) => {
                                                                        return (
                                                                                <div className="card p-3">
                                                                                        <h3 className="card-title text-center">{project.title}</h3>
                                                                                        <img src={project.image || ""} className="card-top-img" />
                                                                                        <div className="card-body"><p>{project.description}</p></div>
                                                                                </div>
                                                                        )
                                                                })}
                                                        </Slider>
                                                </div>
                                        </div> */}
                                </div>
                        </div>
                        <Footer />

                </div>
        )
}

export default Main