import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function Contact({ personalData, toggleSection, expandedSection, handleChange, handleSubmitForm, setPersonalData }) {
  return (
    <div className="Contact-information">
      <a
        className="mx-auto bg-gray-100 border-t border-r border-l rounded px-6 pb-5 pt-5 text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out flex items-center justify-between gap-5"
        onClick={() => toggleSection('contactInfo')}
        href="#contactInfo"
        role="button"
        aria-expanded={expandedSection === 'contactInfo'}
        aria-controls="contactInfo"
      >
        <p className="font-semibold">Contact Information</p>
        {expandedSection === 'contactInfo' ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
      </a>
      {expandedSection === 'contactInfo' && (
        <div className="visible p-6 border-b border-r border-l bg-gray-100 flex flex-col gap-4" id="contactInfo">
          {
            !personalData.isEdit ?
              <>
                <label className="flex items-center gap-5">
                  <span className="font-extralight text-[0.8vw] w-1/4">Email</span>
                  <input
                    type="text"
                    className="w-3/4 py-2 px-5 rounded-2xl"
                    placeholder="Enter Your Email"
                    name="email"
                    onChange={handleChange}
                    value={personalData?.email}
                  />
                </label>
                <label className="flex items-center gap-5">
                  <span className="font-extralight text-[0.8vw] w-1/4">Phone Number</span>
                  <input
                    type="text"
                    className="w-3/4 py-2 px-5 rounded-2xl"
                    placeholder="Enter Your Phone Number"
                    name="phoneNumber"
                    onChange={handleChange}
                    value={personalData?.phoneNumber}
                  />
                </label>
                <label className="flex items-center gap-5">
                  <span className="font-extralight text-[0.8vw] w-1/4">LinkedIn</span>
                  <input
                    type="text"
                    className="w-3/4 py-2 px-5 rounded-2xl"
                    placeholder="Enter Your LinkedIn"
                    name="linkedin"
                    onChange={handleChange}
                    value={personalData?.linkedin}
                  />
                </label>
                <label className="flex items-center gap-5">
                  <span className="font-extralight text-[0.8vw] w-1/4">GitHub</span>
                  <input
                    type="text"
                    className="w-3/4 py-2 px-5 rounded-2xl"
                    placeholder="Enter Your GitHub"
                    name="github"
                    onChange={handleChange}
                    value={personalData?.github}
                  />
                </label>
                <button className="bg-slate-600 w-32 text-white font-bold py-2 rounded-full text-lg" onClick={() => handleSubmitForm('PERSONAL_DETAIL')} >
                  update
                </button>
              </>
              : <>
                <label className="flex items-center gap-5">
                  <span className="font-extralight text-[0.8vw] w-1/4">Email</span>
                  {personalData.email}
                </label>
                <label className="flex items-center gap-5">
                  <span className="font-extralight text-[0.8vw] w-1/4">Phone Number</span>
                  {personalData.phoneNumber}
                </label>
                <label className="flex items-center gap-5">
                  <span className="font-extralight text-[0.8vw] w-1/4">LinkedIn</span>
                  {personalData.linkedin}
                </label>
                <label className="flex items-center gap-5">
                  <span className="font-extralight text-[0.8vw] w-1/4">GitHub</span>
                  {personalData.github}
                </label>
                <button className="bg-slate-600 w-32 text-white font-bold py-2 rounded-full text-lg" onClick={() => setPersonalData((prev) => ({ ...prev, isEdit: false }))}>
                  Edit
                </button>
              </>
          }
        </div>
      )}
    </div>
  )
}

export default Contact