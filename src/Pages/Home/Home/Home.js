import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css'
const Home = () => {
    return (
        <div className='home-banner'>
            <div className='row justify-content-center align-items-center'>
                <div className='col-md-6 text-center'>
                    <h1 className='welcome pt-4'>Welcome to Tutor Master!</h1>
                    <h4>With <span className='welcome'>Mehedi Hasan</span></h4>
                    <div className='px-5 py-3'>
                        <p>Expore Amazing study journy with me!! i am a professional student tutor and worked under brac university as a student tutor for almost 1 years and i want to teach about ICT and programming for the newbiee juniors!!</p>
                    </div>

                </div>
                <div className='col-md-6 mx-auto py-3'>
                    <Banner></Banner>
                </div>
            </div>

        </div>
    );
};

export default Home;