import React from 'react';

const Info = ({href, children}) => {
    return (
        <div className="info">
            Already have an account? <a href={href}>{children}</a> instead.
        </div>
    );
};

export default Info;