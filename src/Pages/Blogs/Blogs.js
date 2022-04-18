import React from 'react';
import './Blogs.css';
import question from '../../Images/question.png'
import { Accordion } from 'react-bootstrap';
const Blogs = () => {
    return (
        <div>
            <div className='container text-center p-3'>
                <img className='img-fluid question-img' src={question} alt="" />
            </div>
            <h2 className='text-center question-answer-header'>Question Answers:</h2>
            <div className='container mx-auto py-3 pt-1 pb-5'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Difference between authorization and authentication</Accordion.Header>
                        <Accordion.Body>
                            <p><span className='fw-bold'>Authorization: </span> Authorization is a process by which a server determines if the client has permission to use a resource or access a file</p>
                            <p><span className='fw-bold'>Authentication: </span> Authentication is the process of verifying the identity of an individual.</p>
                            <p>There is clear difference between authorization and authentication which are shown below:</p>
                            <ul>
                                <li>Authentication verifies who the user is.However, Authorization determines what resources a user can access.</li>
                                <li>
                                    Authentication is the first step of a good identity and access management process.On the other hand, Authorization always takes place after authentication.
                                </li>
                                <li>
                                    Authentication is visible to and partially changeable by the user.But, Authorization isn’t visible to or changeable by the user.
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                        <Accordion.Body>
                            <p> Firebase is a real-time database that enables me to build sophisticated, collaborative apps by allowing secure access to the database from client-side code.Moreover,Firebase Authentication promises to make creating secure authentication systems simple while also enhancing end-user sign-in and onboarding. It provides an end-to-end identity solution that includes, among other things, email and password accounts, phone authentication, and login to Google, Twitter, Facebook, and GitHub.</p>
                            <p>But there are other option for implementing Authentication system besides firebase.Some of them are given below:</p>
                            <ul>
                                <li>Auth0</li>
                                <li>MongoDB</li>
                                <li>Okta</li>
                                <li>JSON Web Token</li>
                                <li>Amazon Cognito</li>
                                <li>Keycloak</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            What other services does firebase provide other than authentication</Accordion.Header>
                        <Accordion.Body>
                            <p>Firebase is very well known for email and social authentications.However There are other feature of Firebase which can easier our web development in many cases.Some of the other Services are given below:</p>
                            <ul>
                                <li>Cloud Firestore</li>
                                <li>Cloud Functions</li>
                                <li>Hosting</li>
                                <li>Cloud Storage</li>
                                <li>Google Analytics</li>
                                <li>Predictions</li>
                                <li>Cloud Messaging</li>
                                <li>Remote Configuration</li>
                                <li>Realtime Database</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blogs;