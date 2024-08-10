// src/components/VideoFeed.jsx

import React from 'react';

const VideoFeed = () => {
    // Dummy data
    const videoData = {
        username: '@mediamodifier',
        description: 'This is a TikTok mobile video mockup. Add your own text, images, and use Emoji #mockup #tiktok #staycool',
        music: 'Original sound - mediamodifier',
    };

    return (
        <div className="video-feed">
            {/* Video content placeholder */}
            <div className="video-placeholder">Video Content</div>
            {/* Video details */}
            <div className="video-details">
                <p className="username">{videoData.username}</p>
                <p className="description">{videoData.description}</p>
                <div className="music">
                    <span role="img" aria-label="music-note">🎵</span>
                    {videoData.music}
                </div>
            </div>
        </div>
    );
};

export default VideoFeed;
