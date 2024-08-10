// src/components/RightSideOptions.jsx

import React from 'react';

const RightSideOptions = ({ likes, comments, shares, reports, onSOSClick }) => {
    return (
        <div className="right-side-options">
            <div className="option-icon">
                <span className="icon">❤️</span>
                <span className="count">{likes}</span>
            </div>
            <div className="option-icon">
                <span className="icon">💬</span>
                <span className="count">{comments}</span>
            </div>
            <div className="option-icon">
                <span className="icon">🔗</span>
                <span className="count">{shares}</span>
            </div>
            <div className="option-icon sos-option" onClick={onSOSClick}>
                <span className="icon">❗</span>
                <span className="count">{reports}</span>
            </div>
        </div>
    );
};

export default RightSideOptions;
