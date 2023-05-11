import React from 'react';
import Illustrator from '../assets/images/adobe-illustrator.png';
import Photoshop from '../assets/images/photoshop.png';
import Basics from '../assets/images/basics.png';
import Bootstrap from '../assets/images/bootstrap.png';
import Handlebars from '../assets/images/handlebars.png';
import Mern from '../assets/images/mern.png';
import Mongoose from '../assets/images/vuejs-logo.png';
import Express from '../assets/images/express.png';
import Node from '../assets/images/node.png';
import SQL from '../assets/images/sql.png';
import ReactLogo from '../assets/images/react.png';
import '../App.css';
import '../portfolio.css';

const Resume = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className="header">
                                <h3>Download Resume: <a href="https://1drv.ms/w/s!AsCs8MX6Nl3-slcT-4Xkg9ZrZKlf?e=ldKFAL">Kyle Kryst</a>
                                </h3>
                            </div>

                            <div className="modal-footer"/>

                            <div className="header">
                                <h3>Proficiencies</h3>
                            </div>
                            <div className="modal-footer"/>

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Full Stack Web Development</div>
                                </div>
                                <div className='grid-container-skills'>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Javascript</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>HTML</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>CSS</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Bootstrap</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>APIs</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Handlebars</p>
                                    </div>
                                    
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>OOP</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>ORM</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>PWA</p>
                                    </div>

                                    
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>MERN</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Mongoose/MongoDB</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Express</p>
                                    </div>

                                    
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>NodeJS</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>SQL/NoSQL</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>MVC</p>
                                    </div>                               
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>React</p>
                                    </div>
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Digital Graphic Arts</div>
                                </div>
                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Adobe Illustrator</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Adobe Photoshop</p>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Technologies</div>
                                </div>

                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <img src={Illustrator} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={Photoshop} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={Basics} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={Bootstrap} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={Handlebars} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={Mern} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={Mongoose} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={Express} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={Node} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={SQL} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={ReactLogo} className='img-skills' />
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

export default Resume;
