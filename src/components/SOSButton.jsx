// src/components/SOSButton.jsx

import React from 'react';

const SOSButton = ({ onClick }) => {
    return (
        <div className="sos-button-container">
            <button className="sos-button" onClick={onClick}>
                SOS
            </button>
        </div>
    );
};

export default SOSButton;
