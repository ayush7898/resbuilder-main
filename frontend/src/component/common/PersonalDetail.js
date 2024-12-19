import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function PersonalDetail({ personalData, setPersonalData, handleChange, handleSubmitForm, toggleSection, expandedSection }) {

    return (
        <div className='Personal-information'>
            <a
                className="mx-auto bg-gray-100 border-t border-r border-l rounded px-6 pb-5 pt-5 text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out flex items-center justify-between gap-5"
                onClick={() => toggleSection('personal')}
                data-twe-collapse-init
                data-twe-ripple-init
                data-twe-ripple-color="light"
                href="#personal"
                role="button"
                aria-expanded={expandedSection === 'personal'}
                aria-controls="personal"
            >
                <p className='font-semibold'>Personal Information</p>
                {expandedSection === 'personal' ? <FaChevronUp className='ml-2' /> : <FaChevronDown className='ml-2' />}
            </a>
            {expandedSection === 'personal' && (
                <div
                    className="visible p-6 border-b border-r border-l bg-gray-100 flex flex-col gap-4"
                    data-twe-collapse-item
                    id="personal"
                >
                    {
                        !personalData.isEdit ?
                            <>
                                <label className="flex items-center gap-5">
                                    <span className="font-extralight text-[0.8vw] w-1/4">First Name</span>
                                    <input
                                        type="text"
                                        className="w-3/4 py-2 px-5 rounded-2xl"
                                        placeholder="Enter Your First Name"
                                        name='firstName'
                                        onChange={handleChange}
                                        value={personalData?.firstName}
                                    />

                                </label>
                                <label className="flex items-center gap-5">
                                    <span className="font-extralight text-[0.8vw] w-1/4">Last Name</span>
                                    <input
                                        type="text"
                                        className="w-3/4 py-2 px-5 rounded-2xl"
                                        placeholder="Enter Your Last Name"
                                        name='lastName'
                                        onChange={handleChange}
                                        value={personalData?.lastName}
                                    />

                                </label>
                                <label className="flex items-center gap-5">
                                    <span className="font-extralight text-[0.8vw] w-1/4">Gender</span>
                                    <input
                                        type="text  "
                                        className="w-3/4 py-2 px-5 rounded-2xl"
                                        placeholder="Enter Your Gender"
                                        name='gender'
                                        onChange={handleChange}
                                        value={personalData?.gender}
                                    />

                                </label>
                                <label className="flex items-center gap-5">
                                    <span className="font-extralight text-[0.8vw] w-1/4">Address</span>
                                    <input
                                        type="text"
                                        className="w-3/4 py-2 px-5 rounded-2xl"
                                        placeholder="Enter Your Address"
                                        name='address'
                                        onChange={handleChange}
                                        value={personalData?.address}

                                    />

                                </label>
                                <label className="flex items-center gap-5">
                                    <span className="font-extralight text-[0.8vw] w-1/4">City</span>
                                    <input
                                        type="text"
                                        className="w-3/4 py-2 px-5 rounded-2xl"
                                        placeholder="Enter Your City"
                                        name='city'
                                        onChange={handleChange}
                                        value={personalData?.city}

                                    />

                                </label>
                                <label className="flex items-center gap-5">
                                    <span className="font-extralight text-[0.8vw] w-1/4">State</span>
                                    <input
                                        type="text"
                                        className="w-3/4 py-2 px-5 rounded-2xl"
                                        placeholder="Enter Your State"
                                        name='state'
                                        onChange={handleChange}
                                        value={personalData?.state}

                                    />

                                </label>
                                <label className="flex items-center gap-5">
                                    <span className="font-extralight text-[0.8vw] w-1/4">Country</span>
                                    <input
                                        type="text"
                                        className="w-3/4 py-2 px-5 rounded-2xl"
                                        placeholder="Enter Your Country"
                                        name='country'
                                        onChange={handleChange}
                                        value={personalData?.country}

                                    />

                                </label>
                                <button className='bg-slate-600 w-32 text-white font-bold py-2  rounded-full text-lg' 
                                onClick={() => handleSubmitForm('PERSONAL_DETAIL')} 
                                >update
                                </button>
                            </> :
                            <>

                                <label className="flex items-center gap-5">
                                    <span className="font-medium text-md w-1/4">First Name</span>
                                    {personalData?.firstName}
                                </label>
                                <label className="flex items-center gap-5">
                                    <span className="font-medium text-md w-1/4">Last Name</span>
                                    {personalData?.lastName}
                                </label>
                                <label className="flex items-center gap-5">
                                    <span className="font-medium text-md w-1/4">Gender</span>
                                    {personalData?.gender}
                                </label>
                                <label className="flex items-center gap-5">
                                    <span className="font-medium text-md w-1/4">Address</span>
                                    {personalData?.address}
                                </label>
                                <label className="flex items-center gap-5">
                                    <span className="font-medium text-md w-1/4">City</span>
                                    {personalData?.city}
                                </label>
                                <label className="flex items-center gap-5">
                                    <span className="font-medium text-md w-1/4">State</span>
                                    {personalData?.state}
                                </label>
                                <label className="flex items-center gap-5">
                                    <span className="font-medium text-md w-1/4">Country</span>
                                    {personalData?.country}
                                </label>
                                <button className='bg-slate-600 w-32 text-white font-bold py-2  rounded-full text-lg'
                                onClick={() => setPersonalData((prev) => ({ ...prev, isEdit: false }))} 
                                >Edit</button>
                            </>
                    }
                </div>

            )}
        </div>
    )
}

export default PersonalDetail