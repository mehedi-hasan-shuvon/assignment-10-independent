import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useService from '../../CustomHooks/useService';
import './Chcekout.css';
const Chcekout = () => {
    const { serviceId } = useParams();
    // const [services, setServices] = useService();

    return (
        <div>
            <h2>This is Checkout Page</h2>
            <h1>Thanks for Checking out: {serviceId}</h1>
        </div>
    );
};

export default Chcekout;