import React from 'react';
import '../images/Profile-Image.jpg';
import '../images/Columbia-Community-College.jpg';
import '../images/UC-Davis.png';
import '../App.css';

const About = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>

                            <div className='card-body'>
                                <div className="row simulation-back ">
                                    <img className='profile-image' src='../images/Profile-Image.jpg' />
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className='row'>
                                    <p className='p-about'>
                                        Entry Level Web Designer with a certified background in Digital Graphic Arts, as well as Full Stack Development. 
                                        Proficient in Adobe Illustrator, Photoshop, Javascript, CSS, HTML, Bootstrap, APIs, Handlebars, OOP, ORM, PWA, MERN, Mongooose, MongoDB, Express, NodeJS, SQL, MVC, NoSQL, React. 
                                    </p>
                                </div>
                            </div>

                            <div className='modal-footer' />

                            <div className='card-body'>
                                <h2 className='education'>Education</h2>
                                <br />

                                <div className='grid-container-profile'>
                                <h3 className='education'>Certifications</h3>
                                    
                                    <div className='grid-item'>
                                        <div className='title-college'>Columbia College, Sonora, CA</div>
                                        <div className='title-certificate'>Computer and Communications Technology <br /> Digital Graphic Arts for Entrepreneurs</div>
                                    </div>

                                    <div className='grid-item'>
                                        <a href='https://www.gocolumbia.edu/' target='_blank'><img className='college-logo' src='../images/Columbia-Community-College.jpg' /></a>
                                    </div>

                                    <div className='grid-item'>
                                        <div className='title-college'>University of California, Davis</div>
                                        <div className='title-certificate'>Full Stack Web Development</div>
                                    </div>

                                    <div className='grid-item'>
                                        <a href='https://bootcamp.ucdavis.edu/coding/' target='_blank'><img className='college-logo' src='../images/UC-Davis.png' /></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
