import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer className='text-center mt-3 footer'>
            <p>Alright received<small> copyright© {new Date().getFullYear()}</small></p>
        </footer>
    );
};

export default Footer;