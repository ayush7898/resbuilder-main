import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { addEducationDetail } from '../../api/educationApi';
import { updateEducationDetail } from '../../api/educationApi'; // Assuming you have an update API
import { getUser } from "../../api/userApi";

function EducationDetail({ educations, toggleSection, expandedSection, handleEducationChange, handleUpdateForm,handleSubmitForm, setEducationDetails, educationDetails }) {
    const [editIndex, setEditIndex] = useState("");
    const [isAddButtonClicked, setIsAddButtonClicked] = useState(false);
    
    // // Update existing education
    const handleUpdateEducation = async (id) => {
        try {
            await updateEducationDetail(educationDetails, id);
            setEditIndex(""); // Close the edit mode
            // setEducationDetails(educations);
        } catch (error) {
            console.error("Error updating education:", error);
        }
    };

    return (
        <div className='Education'>
            <div className="flex items-center justify-between bg-gray-100 px-6 py-5 border-t border-r border-l rounded"
            onClick={() => toggleSection('education')}>
                <div className="flex items-center gap-5">
                    <p className='font-semibold'>Education</p>
                </div>
                <div className="flex items-center gap-4">
                    {expandedSection === 'education' && (
                        <button
                            className='bg-slate-600 text-white font-bold py-2 px-5 rounded-full text-lg'
                            onClick={() => setIsAddButtonClicked(true)}
                        >
                            Add Education
                        </button>
                    )}
                    <div className="chevron-icon" >
                        {expandedSection === 'education' ? (
                            <FaChevronUp />
                        ) : (
                            <FaChevronDown />
                        )}
                    </div>
                </div>
            </div>

            {expandedSection === 'education' && (
                <div className="content p-6 bg-gray-100 border-b border-r border-l flex flex-col gap-4" id="education">
                    {educations.map((education, key) => {
                        // console.log(`education: ${education}`)
                        const educationKey = `education_${key}`;
                        return (
                            <div key={key} className="education-item">
                                {editIndex !== educationKey ? (
                                    <>
                                    <div>
                                        <label className="flex items-center gap-5">
                                            <span className="font-extralight text-[0.8vw] pl-5 w-1/4">College/Institute</span>
                                            {education.instituteName}
                                        </label>
                                        <label className="flex items-center gap-5">
                                            <span className="font-extralight text-[0.8vw] pl-5 w-1/4">University</span>
                                            {education.university}
                                        </label>
                                        <label className="flex items-center gap-5">
                                            <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Stream</span>
                                            {education.stream}
                                        </label>
                                        <label className="flex items-center gap-5">
                                            <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Start Date</span>
                                            {education.startDate}
                                        </label>
                                        <label className="flex items-center gap-5">
                                            <span className="font-extralight text-[0.8vw] pl-5 w-1/4">End Date</span>
                                            {education.endDate}
                                        </label>
                                        <label className="flex items-center gap-5">
                                            <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Location</span>
                                            {education.location}
                                        </label>
                                        {/* Repeat the label structure for other fields */}
                                    </div>
                                        <button
                                            className='bg-slate-600 w-32 text-white font-bold py-2 rounded-full text-lg'
                                            onClick={() => {
                                                setEditIndex(educationKey);
                                                setEducationDetails(education);//
                                            }}
                                        >
                                            Edit
                                        </button>
                                    </>
                                ) : (
                                    <>
                                    <div>
                                        {/* Input fields for editing */}
                                        <label className="flex flex-col gap-5">
                                            <span className="font-extralight text-[0.8vw] pl-5 w-1/4">College/Institute</span>
                                            <input
                                                type="text"
                                                className="w-3/4 py-2 px-5 rounded-2xl"
                                                placeholder="Enter Your College/Institute Name"
                                                name='instituteName'
                                                onChange={handleEducationChange}
                                                value={educationDetails.instituteName}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-5">
                                            <span className="font-extralight text-[0.8vw] pl-5 w-1/4">University</span>
                                            <input
                                                type="text"
                                                className="w-3/4 py-2 px-5 rounded-2xl"
                                                placeholder="Enter Your University"
                                                name='university'
                                                onChange={handleEducationChange}
                                                value={educationDetails.university}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-5">
                                            <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Stream</span>
                                            <input
                                                type="text"
                                                className="w-3/4 py-2 px-5 rounded-2xl"
                                                placeholder="Enter Your Stream"
                                                name='stream'
                                                onChange={handleEducationChange}
                                                value={educationDetails.stream}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-5">
                                            <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Start Date</span>
                                            <input
                                                type="date"
                                                className="w-3/4 py-2 px-5 rounded-2xl"
                                                placeholder="Enter Your Start Date"
                                                name='startDate'
                                                onChange={handleEducationChange}
                                                value={educationDetails.startDate}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-5">
                                            <span className="font-extralight text-[0.8vw] pl-5 w-1/4">End Date</span>
                                            <input
                                                type="date"
                                                className="w-3/4 py-2 px-5 rounded-2xl"
                                                placeholder="Enter Your End Date"
                                                name='endDate'
                                                onChange={handleEducationChange}
                                                value={educationDetails.endDate}
                                            />
                                        </label>
                                        <label className="flex flex-col gap-5">
                                            <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Location</span>
                                            <input
                                                type="text"
                                                className="w-3/4 py-2 px-5 rounded-2xl"
                                                placeholder="Enter Your Location"
                                                name='location'
                                                onChange={handleEducationChange}
                                                value={educationDetails.location}
                                            />
                                        </label>
                                    </div>
                                        {/* Repeat the label structure for other fields */}
                                        <button
                                            className='bg-slate-600 w-32 text-white font-bold py-2 rounded-full text-lg mt-8'
                                            onClick={() => handleUpdateEducation(education._id)}
                                        >
                                            SAVE
                                        </button>
                                    </>
                                )}
                            </div>
                        );
                    })}

                    {isAddButtonClicked && (
                        <div className='new-education-item'>
                            <div> 
                                {/* Add new education input fields */}
                                <label className="flex flex-col gap-5">
                                    <span className="font-extralight text-[0.8vw] pl-5 w-1/4">College/Institute</span>
                                    <input
                                        type="text"
                                        className="w-3/4 py-2 px-5 rounded-2xl"
                                        placeholder="Enter Your College/Institute Name"
                                        name='instituteName'
                                        onChange={handleEducationChange}
                                        value={educationDetails.instituteName}
                                    />
                                </label>
                                <label className="flex flex-col gap-5">
                                    <span className="font-extralight text-[0.8vw] pl-5 w-1/4">University</span>
                                    <input
                                        type="text"
                                        className="w-3/4 py-2 px-5 rounded-2xl"
                                        placeholder="Enter Your University"
                                        name='university'
                                        onChange={handleEducationChange}
                                        value={educationDetails.university}

                                    />
                                </label>
                                <label className="flex flex-col gap-5">
                                    <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Stream</span>
                                    <input
                                        type="text"
                                        className="w-3/4 py-2 px-5 rounded-2xl"
                                        placeholder="Enter Your Stream"
                                        name='stream'
                                        onChange={handleEducationChange}
                                        value={educationDetails.stream}

                                    />
                                </label>
                                <label className="flex flex-col gap-5">
                                    <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Start Date</span>
                                    <input
                                        type="date"
                                        className="w-3/4 py-2 px-5 rounded-2xl"
                                        placeholder="Enter Your Start Date"
                                        name='startDate'
                                        onChange={handleEducationChange}
                                        value={educationDetails.startDate}

                                    />
                                </label>
                                <label className="flex flex-col gap-5">
                                    <span className="font-extralight text-[0.8vw] pl-5 w-1/4">End Date</span>
                                    <input
                                        type="date"
                                        className="w-3/4 py-2 px-5 rounded-2xl"
                                        placeholder="Enter Your End Date"
                                        name='endDate'
                                        onChange={handleEducationChange}
                                        value={educationDetails.endDate}

                                    />
                                </label>
                                <label className="flex flex-col gap-5">
                                    <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Location</span>
                                    <input
                                        type="text"
                                        className="w-3/4 py-2 px-5 rounded-2xl"
                                        placeholder="Enter Your Location"
                                        name='location'
                                        onChange={handleEducationChange}
                                        value={educationDetails.location}

                                    />
                                </label>
                            </div>
                            {/* Repeat for other fields */}
                            <button
                                className='bg-slate-600 w-32 text-white font-bold py-2 rounded-full text-lg mt-5'
                                onClick={() => handleSubmitForm('EDUCATION-INFORMATION')}
                            >
                                Submit
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default EducationDetail;

