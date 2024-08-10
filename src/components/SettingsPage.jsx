// src/components/SettingsPage.jsx

import React, { useState } from 'react';

const SettingsPage = () => {
    const [doubleTapEnabled, setDoubleTapEnabled] = useState(true);
    const [voiceCommandEnabled, setVoiceCommandEnabled] = useState(false);

    return (
        <div className="settings-page">
            <h2>Settings</h2>
            <div className="setting-item">
                <label>
                    <input
                        type="checkbox"
                        checked={doubleTapEnabled}
                        onChange={(e) => setDoubleTapEnabled(e.target.checked)}
                    />
                    Enable Double-Tap SOS
                </label>
            </div>
            <div className="setting-item">
                <label>
                    <input
                        type="checkbox"
                        checked={voiceCommandEnabled}
                        onChange={(e) => setVoiceCommandEnabled(e.target.checked)}
                    />
                    Enable Voice Command SOS
                </label>
            </div>
        </div>
    );
};

export default SettingsPage;
