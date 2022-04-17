import React from 'react';
import useService from '../../CustomHooks/useService';

const Special = () => {
    const [services, setServices] = useService();
    console.log(services);
    return (
        <div>
            <h2>This is speical page</h2>
            <h2>{services.length}</h2>
        </div>
    );
};

export default Special;