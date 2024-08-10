// src/components/TopNavigationBar.jsx

import React from 'react';

const TopNavigationBar = () => {
    return (
        <div className="top-navigation-bar">
            <div className="nav-options">
                <span className="nav-option active">Following</span>
                <span className="nav-separator">|</span>
                <span className="nav-option">For You</span>
            </div>
            <div className="search-icon">
                🔍
            </div>
        </div>
    );
};

export default TopNavigationBar;
