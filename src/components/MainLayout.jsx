// src/components/MainLayout.jsx

import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import VideoFeed from './VideoFeed';
import RightSideOptions from './RightSideOptions';
import TopNavigationBar from './TopNavigationBar';
import SOSModal from './SOSModal';

const MainLayout = () => {
    const [isSOSModalOpen, setIsSOSModalOpen] = useState(false);
    const [reports, setReports] = useState('13.1K');

    const handleSOSClick = () => {
        setIsSOSModalOpen(true);
    };

    const handleModalClose = () => {
        setIsSOSModalOpen(false);
    };

    const videoData = {
        likes: '2.5M',
        comments: '342',
        shares: '13.1K',
        reports: reports,
    };

    return (
        <div className="main-layout">
            <TopNavigationBar />
            <VideoFeed />
            <RightSideOptions
                likes={videoData.likes}
                comments={videoData.comments}
                shares={videoData.shares}
                reports={videoData.reports}
                onSOSClick={handleSOSClick}
            />
            <NavigationBar />
            {isSOSModalOpen && <SOSModal onClose={handleModalClose} />}
        </div>
    );
};

export default MainLayout;
