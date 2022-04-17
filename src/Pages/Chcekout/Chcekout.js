import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useService from '../../CustomHooks/useService';

import './Chcekout.css';
const Chcekout = () => {
    const { serviceId } = useParams();
    // const [services, setServices] = useService();
    const location = useLocation();

    return (
        <div>
            <h1 className='text-center'>Thanks for Checking out: {serviceId}</h1>
            {
                location?.state?.id ?
                    <div className='container text-center'>
                        <img src={location?.state?.img} alt="" />
                        <h1>{location?.state?.name}</h1>
                        <h4>Price: {location?.state?.price} BDT</h4>
                        <p>{location?.state?.description}</p>
                    </div>
                    :
                    <div></div>
            }






        </div>
    );
};

export default Chcekout;