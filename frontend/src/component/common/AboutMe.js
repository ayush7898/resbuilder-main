import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


function AboutMe({ personalData, toggleSection, expandedSection, handleChange, handleSubmitForm, setPersonalData }) {
  return (
    <div className='AboutMe rounded-2xl'>
      <a
        className="mx-auto bg-gray-100 border-t border-r border-l rounded px-6 pb-5 pt-5 text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out flex items-center justify-between gap-5"
        onClick={() => toggleSection('aboutMe')}
        data-twe-collapse-init
        data-twe-ripple-init
        data-twe-ripple-color="light"
        href="#aboutMe"
        role="button"
        aria-expanded={expandedSection === 'aboutMe'}
        aria-controls="aboutMe"
      >
        <p className='font-semibold'>About Me</p>
        {expandedSection === 'aboutMe' ? <FaChevronUp className='ml-2' /> : <FaChevronDown className='ml-2' />}
      </a>
      {expandedSection === 'aboutMe' && (
        <div
          className="visible p-6 border-b border-r border-l bg-gray-100"
          data-twe-collapse-item
          id="aboutMe"
        >
          {
            !personalData.isEdit ?
              <>
                <label className="text-bold">Write a short description</label>
                <textarea className='border w-full h-[200px] outline-none resize-none' name='discription' onChange={handleChange} value={personalData?.discription} />
                <button className='bg-slate-600 w-32 text-white font-bold py-2  rounded-full text-lg' onClick={() => handleSubmitForm('PERSONAL_DETAIL')} >Update</button>
              </> :
              <>
                <label className='flex items-center 5'>
                  <span className='font-medium text-md w-1/4'>Discription</span>
                  {personalData?.discription}
                </label>
                <button className='bg-slate-600 w-32 mt-5 text-white font-bold py-2  rounded-full text-lg' onClick={() => setPersonalData(prev => ({ ...prev, isEdit: false }))} >Edit</button>
              </>
          }
        </div>
      )}
    </div>
  )
}

export default AboutMe