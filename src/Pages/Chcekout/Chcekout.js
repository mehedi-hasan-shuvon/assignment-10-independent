import React from 'react';
import { useParams } from 'react-router-dom';
import './Chcekout.css';
const Chcekout = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>This is Checkout Page</h2>
            <h1>Thanks for Checking out: {serviceId}</h1>
        </div>
    );
};

export default Chcekout;