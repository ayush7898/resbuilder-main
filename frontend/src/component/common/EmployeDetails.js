import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { updateEmploymentDetail } from '../../api/employmentApi'
function EmployeDetails({ toggleSection, expandedSection, handleEmployementChange, setCompanyDetail, companyDetail, handleSubmitForm, companies, handleUpdateForm,setCompanies }) {

    const [editIndex, setEditIndex] = useState("")
    const [isAddButtonClicked, setIsAddButtonClicked] = useState(false);
    
    const handleUpdateEmployee = async (id) => {
        try {
            await updateEmploymentDetail(companyDetail, id);
            setEditIndex(""); // Close the edit mode
            // setCompanies(companyDetail)
            // setEducationDetails(educations);
        } catch (error) {
            console.error("Error updating education:", error);
        }
    };
    return (

        <div className='Experience'>
            <a
                className="mx-auto bg-gray-100 border-t border-r border-l rounded px-6 pb-5 pt-5 text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out flex items-center justify-between gap-5"
                onClick={() => toggleSection('experience')}
                data-twe-collapse-init
                data-twe-ripple-init
                data-twe-ripple-color="light"
                href="#experience"
                role="button"
                aria-expanded={expandedSection === 'experience'}
                aria-controls="experience"
            >
                <p className='font-semibold'>Experience</p>
                <div className="flex items-center gap-4">
                    {expandedSection === 'experience' && (
                        <button
                            className='bg-slate-600 text-white font-bold py-2 px-5 rounded-full text-lg'
                            onClick={() => setIsAddButtonClicked(true)}
                        >
                            Add Experience
                        </button>
                    )}
                    
                {expandedSection === 'experience' ? <FaChevronUp className='ml-2' /> : <FaChevronDown className='ml-2' />}
                </div>
            </a>
            {expandedSection === 'experience' && (
                <div
                    className="visible p-6 border-b border-r border-l bg-gray-100 flex flex-col gap-4"
                    data-twe-collapse-item
                    id="experience" >
                    <div className="visible p-6 border-b border-r border-l bg-gray-100 flex flex-col gap-4" data-twe-collapse-item>

                        {companies.map((company, key) => {
                            const companyKey = `company_${key}`
                            return <div key={key}>
                                {
                                    editIndex !== companyKey ?(
                                        <>
                                        <div>
                                            <label className="flex items-center gap-5">
                                                <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Company</span>
                                                {company.companyName}
                                            </label>
                                            <label className="flex items-center gap-5">
                                                <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Position</span>
                                                {company.position}
                                            </label>
                                            <label className="flex items-center gap-5">
                                                <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Start Date</span>
                                                {company.startDate}
                                            </label>
                                            <label className="flex items-center gap-5">
                                                <span className="font-extralight text-[0.8vw] pl-5 w-1/4">End Date</span>
                                                {company.endDate}
                                            </label>
                                            <label className="flex items-center gap-5">
                                                <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Location</span>
                                                {company.location}
                                            </label>
                                            <label className="flex items-center gap-5">
                                                <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Description</span>
                                                {company.description}
                                            </label>
                                        </div>    
                                            <button className='bg-slate-600 w-32 text-white font-bold py-2  rounded-full text-lg' onClick={() => {
                                                setEditIndex(companyKey)
                                                setCompanyDetail(company)
                                            }} 
                                            >
                                                Edit
                                            </button>
                                        </>
                                        ) : ( 
                                        <>
                                        <div>
                                            <label className="flex flex-col gap-5">
                                                <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Company</span>
                                                <input
                                                    type="text"
                                                    className="w-3/4 py-2 px-5 rounded-2xl"
                                                    placeholder="Enter Your Company Name"
                                                    name='companyName'
                                                    onChange={handleEmployementChange}
                                                    value={companyDetail.companyName}
                                                />
                                            </label>
                                            <label className="flex flex-col gap-5">
                                                <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Position</span>
                                                <input
                                                    type="text"
                                                    className="w-3/4 py-2 px-5 rounded-2xl"
                                                    placeholder="Enter Your Position"
                                                    name='position'
                                                    onChange={handleEmployementChange}
                                                    value={companyDetail.position}
                                                />
                                            </label>
                                            <label className="flex flex-col gap-5">
                                                <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Start Date</span>
                                                <input
                                                    type="date"
                                                    className="w-3/4 py-2 px-5 rounded-2xl"
                                                    placeholder="Enter Your Start Date"
                                                    name='startDate'
                                                    onChange={handleEmployementChange}
                                                    value={companyDetail.startDate}
                                                />
                                            </label>
                                            <label className="flex flex-col gap-5">
                                                <span className="font-extralight text-[0.8vw] pl-5 w-1/4">End Date</span>
                                                <input
                                                    type="date"
                                                    className="w-3/4 py-2 px-5 rounded-2xl"
                                                    placeholder="Enter Your End Date"
                                                    name='endDate'
                                                    onChange={handleEmployementChange}
                                                    value={companyDetail.endDate}
                                                />
                                            </label>
                                            <label className="flex flex-col gap-5">
                                                <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Location</span>
                                                <input
                                                    type="text"
                                                    className="w-3/4 py-2 px-5 rounded-2xl"
                                                    placeholder="Enter Your location"
                                                    name='location'
                                                    onChange={handleEmployementChange}
                                                    value={companyDetail.location}
                                                />
                                            </label>
                                            <label className="flex flex-col gap-5">
                                                <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Location</span>
                                                <input
                                                    type="text"
                                                    className="w-3/4 py-2 px-5 rounded-2xl"
                                                    placeholder="Enter Your description"
                                                    name='description'
                                                    onChange={handleEmployementChange}
                                                    value={companyDetail.description}
                                                />
                                            </label>
                                        </div>
                                            <button className='bg-slate-600 w-32 text-white font-bold py-2  rounded-full text-lg' onClick={() => {
                                                // handleSubmitForm("COMPANY_INFORMATION")
                                                // setEditIndex("")
                                                handleUpdateEmployee(company._id)
                                            }} >Update</button>
                                        </>)
                                }
                            </div>
                        })}

                        
                    </div>

                    
                    {isAddButtonClicked && (
                        <div className='new-employee-item'>
                            <div>
                                <label className="flex flex-col gap-5">
                                    <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Company</span>
                                    <input
                                        type="text"
                                        className="w-3/4 py-2 px-5 rounded-2xl"
                                        placeholder="Enter Your Company Name"
                                        name='companyName'
                                        onChange={handleEmployementChange}
                                        value={companyDetail.companyName}
                                    />
                                </label>
                                <label className="flex flex-col gap-5">
                                    <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Position</span>
                                    <input
                                        type="text"
                                        className="w-3/4 py-2 px-5 rounded-2xl"
                                        placeholder="Enter Your Position"
                                        name='position'
                                        onChange={handleEmployementChange}
                                        value={companyDetail.position}
                                    />
                                </label>
                                <label className="flex flex-col gap-5">
                                    <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Start Date</span>
                                    <input
                                        type="date"
                                        className="w-3/4 py-2 px-5 rounded-2xl"
                                        placeholder="Enter Your Start Date"
                                        name='startDate'
                                        onChange={handleEmployementChange}
                                        value={companyDetail.startDate}
                                    />
                                </label>
                                <label className="flex flex-col gap-5">
                                    <span className="font-extralight text-[0.8vw] pl-5 w-1/4">End Date</span>
                                    <input
                                        type="date"
                                        className="w-3/4 py-2 px-5 rounded-2xl"
                                        placeholder="Enter Your End Date"
                                        name='endDate'
                                        onChange={handleEmployementChange}
                                        value={companyDetail.endDate}
                                    />
                                </label>
                                <label className="flex flex-col gap-5">
                                    <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Location</span>
                                    <input
                                        type="text"
                                        className="w-3/4 py-2 px-5 rounded-2xl"
                                        placeholder="location"
                                        name='location'
                                        onChange={handleEmployementChange}
                                        value={companyDetail.location}
                                    />
                                </label>
                                <label className="flex flex-col gap-5">
                                    <span className="font-extralight text-[0.8vw] pl-5 w-1/4">Location</span>
                                    <input
                                        type="text"
                                        className="w-3/4 py-2 px-5 rounded-2xl"
                                        placeholder="location"
                                        name='location'
                                        onChange={handleEmployementChange}
                                        value={companyDetail.description}
                                    />
                                </label>
                            </div>
                            {/* Repeat for other fields */}
                            <button
                                className='bg-slate-600 w-32 text-white font-bold py-2 rounded-full text-lg mt-8'
                                onClick={() => handleSubmitForm('COMPANY_INFORMATION')}
                            >
                                Submit
                            </button>
                        </div>
                    )}
                </div>
                
            )}
        </div>
    )
}

export default EmployeDetails
