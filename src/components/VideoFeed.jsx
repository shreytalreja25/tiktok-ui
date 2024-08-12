// src/components/VideoFeed.jsx

import React from 'react';

const VideoFeed = () => {
    return (
        <div className="video-feed">
            <video className="background-video" autoPlay loop muted>
                <source src="/videos/tiktok.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="video-details">
                <div className="username">@mediamodifier</div>
                <div className="description">This is a TikTok mobile video mockup. Add your own text, images, and use Emoji #mockup #tiktok #staycool</div>
                <div className="music">
                    <span role="img" aria-label="music-note">🎵</span>
                    Original sound - mediamodifier
                </div>
            </div>
        </div>
    );
};

export default VideoFeed;
