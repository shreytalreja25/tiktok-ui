// src/components/NavigationBar.jsx

import React from 'react';

const NavigationBar = () => {
    return (
        <nav className="navigation-bar">
            <div className="nav-icon">
                <span className="icon">🏠</span>
                <span className="label">Home</span>
            </div>
            <div className="nav-icon">
                <span className="icon">🔍</span>
                <span className="label">Discover</span>
            </div>
            <div className="nav-icon special">
                <span className="icon">➕</span>
            </div>
            <div className="nav-icon">
                <span className="icon">💬</span>
                <span className="label">Inbox</span>
            </div>
            <div className="nav-icon">
                <span className="icon">👤</span>
                <span className="label">Me</span>
            </div>
        </nav>
    );
};

export default NavigationBar;
