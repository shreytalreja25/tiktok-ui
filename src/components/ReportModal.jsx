// src/components/ReportModal.jsx

import React, { useState } from 'react';

const ReportModal = ({ onClose }) => {
    const [reportType, setReportType] = useState('');
    const [subTypeOptions, setSubTypeOptions] = useState([]);
    const [selectedSubType, setSelectedSubType] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    const handleTypeChange = (e) => {
        const selectedType = e.target.value;
        setReportType(selectedType);

        // Update the subTypeOptions based on the selected report type
        switch (selectedType) {
            case 'bullying':
                setSubTypeOptions(['Cyberbullying', 'Verbal Bullying', 'Physical Bullying']);
                break;
            case 'harassment':
                setSubTypeOptions(['Sexual Harassment', 'Verbal Harassment', 'Stalking']);
                break;
            case 'threat':
                setSubTypeOptions(['Threat of Violence', 'Verbal Threat', 'Online Threat']);
                break;
            case 'other':
                setSubTypeOptions(['Spam', 'Inappropriate Content', 'Other']);
                break;
            default:
                setSubTypeOptions([]);
                break;
        }
    };

    const handleSubTypeChange = (e) => {
        setSelectedSubType(e.target.value);
    };

    const handleInfoChange = (e) => {
        setAdditionalInfo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send the data to the server or process it accordingly
        console.log('Report Type:', reportType);
        console.log('Sub-Type:', selectedSubType);
        console.log('Additional Info:', additionalInfo);
        onClose(); // Close the modal after submission
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Report Activated</h2>
                <p>This is a reporting action. Please provide more details:</p>
                
                <form onSubmit={handleSubmit}>
                    <label>
                        Type of Report:
                        <select value={reportType} onChange={handleTypeChange} required>
                            <option value="">Select an option</option>
                            <option value="bullying">Bullying</option>
                            <option value="harassment">Harassment</option>
                            <option value="threat">Threat</option>
                            <option value="other">Other</option>
                        </select>
                    </label>

                    {subTypeOptions.length > 0 && (
                        <label>
                            Detailed Report:
                            <select value={selectedSubType} onChange={handleSubTypeChange} required>
                                <option value="">Select an option</option>
                                {subTypeOptions.map((subType, index) => (
                                    <option key={index} value={subType}>
                                        {subType}
                                    </option>
                                ))}
                            </select>
                        </label>
                    )}

                    <label>
                        Additional Information:
                        <textarea
                            value={additionalInfo}
                            onChange={handleInfoChange}
                            placeholder="Describe the situation..."
                            required
                        />
                    </label>

                    <button type="submit" className="confirm-button">Submit</button>
                    <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default ReportModal;


// // src/components/ReportModal.jsx

// import React, { useState } from 'react';

// const ReportModal = ({ onClose }) => {
//     const [reportType, setReportType] = useState('');
//     const [additionalInfo, setAdditionalInfo] = useState('');

//     const handleTypeChange = (e) => {
//         setReportType(e.target.value);
//     };

//     const handleInfoChange = (e) => {
//         setAdditionalInfo(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Here you would handle the form submission, e.g., send the data to the server or process it accordingly
//         console.log('Report Type:', reportType);
//         console.log('Additional Info:', additionalInfo);
//         onClose(); // Close the modal after submission
//     };

//     return (
//         <div className="modal-overlay">
//             <div className="modal-content">
//                 <h2>Report Activated</h2>
//                 <p>This is a reporting action. Please provide more details:</p>
                
//                 <form onSubmit={handleSubmit}>
//                     <label>
//                         Type of Report:
//                         <select value={reportType} onChange={handleTypeChange} required>
//                             <option value="">Select an option</option>
//                             <option value="bullying">Bullying</option>
//                             <option value="harassment">Harassment</option>
//                             <option value="threat">Threat</option>
//                             <option value="other">Other</option>
//                         </select>
//                     </label>

//                     <label>
//                         Additional Information:
//                         <textarea
//                             value={additionalInfo}
//                             onChange={handleInfoChange}
//                             placeholder="Describe the situation..."
//                             required
//                         />
//                     </label>

//                     <button type="submit" className="confirm-button">Submit</button>
//                     <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ReportModal;



// // // src/components/SOSModal.jsx

// // import React, { useState } from 'react';

// // const SOSModal = ({ onClose }) => {
// //     const [emergencyType, setEmergencyType] = useState('');
// //     const [additionalInfo, setAdditionalInfo] = useState('');

// //     const handleTypeChange = (e) => {
// //         setEmergencyType(e.target.value);
// //     };

// //     const handleInfoChange = (e) => {
// //         setAdditionalInfo(e.target.value);
// //     };

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         // Here you would handle the form submission, e.g., send the data to the server or process it accordingly
// //         console.log('Emergency Type:', emergencyType);
// //         console.log('Additional Info:', additionalInfo);
// //         onClose(); // Close the modal after submission
// //     };

// //     return (
// //         <div className="modal-overlay">
// //             <div className="modal-content">
// //                 <h2>SOS Activated</h2>
// //                 <p>This is an emergency action. Please provide more details:</p>
                
// //                 <form onSubmit={handleSubmit}>
// //                     <label>
// //                         Type of Emergency:
// //                         <select value={emergencyType} onChange={handleTypeChange} required>
// //                             <option value="">Select an option</option>
// //                             <option value="bullying">Bullying</option>
// //                             <option value="harassment">Harassment</option>
// //                             <option value="threat">Threat</option>
// //                             <option value="other">Other</option>
// //                         </select>
// //                     </label>

// //                     <label>
// //                         Additional Information:
// //                         <textarea
// //                             value={additionalInfo}
// //                             onChange={handleInfoChange}
// //                             placeholder="Describe the situation..."
// //                             required
// //                         />
// //                     </label>

// //                     <button type="submit" className="confirm-button">Submit</button>
// //                     <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default SOSModal;
