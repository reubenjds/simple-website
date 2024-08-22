import React from 'react';

function Badge({ type }) {
    return (
        <span className={`badge ${type.toLowerCase()}`}>
            {type}
        </span>
    );
}

export default Badge;
