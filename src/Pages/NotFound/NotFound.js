import React from 'react';
import error from '../../images/404/E404.png'

const NotFound = () => {
    return (
        <div>
            <img src={error} className="img-fluid"  alt="" />
        </div>
    );
};

export default NotFound;