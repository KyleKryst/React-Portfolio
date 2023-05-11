import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from '../components/contact-form';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import '../App.css';

function Contact() {
    return (
      <div className='container'>
          <Jumbotron fluid className="p-5 mt-5">
              <Container className="text-center">
                  <div className="p-md-5">
                      <h1>Contact Me Here</h1>
                  </div>
              </Container>
          </Jumbotron>
  
          <Container fluid className="shadow bg-light mb-5">
              <Container className="p-5">
                  <Row>
                      <Col>
                          <Container>
                              <h4 style={{color: "#4fc01a"}}>Contact Info</h4>
                              <p>
                                  <a href="mailto:kryst.kyle@gmail.com">
                                      <span className="pr-3">
                                          <FaEnvelope />
                                      </span>
                                      kryst.kyle@gmail.com
                                  </a>
                              </p>
                              
                              <p>
                                  <a href="https://github.com/KyleKryst" target='_blank'>
                                      <span className="pr-3">
                                          <FaGithub />
                                      </span>
                                      KyleKryst
                                  </a>
                              </p>
                              <p>
                                  <a href="https://www.linkedin.com/in/kyle-kryst-2872a3267/" target='_blank'>
                                      <span className="pr-3">
                                          <FaLinkedin />
                                      </span>
                                      kyle-kryst-2872a3267
                                  </a>
                              </p>
                          </Container>
                      </Col>
  
                      <Col sm={12} md={6} lg={8} className="pt-sm-4 pt-lg-2">
                          <Container>
                              <h4 style={{color: "#4fc01a"}}>Send Email Here</h4>
                              <ContactForm />
                          </Container>
                      </Col>
                  </Row>
              </Container>
          </Container>
      </div>
    )
  }
  
  export default Contact;
