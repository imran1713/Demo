import React from 'react';

const Info = ({href, text, children}) => {
    return (
        <div className="info">
            {text} <a href={href}>{children}</a> instead.
        </div>
    );
};

export default Info;