import React, { useEffect, useState } from 'react';
import { Collapse, Ripple, initTWE } from "tw-elements";
import { MdDownloadForOffline } from "react-icons/md";
import { addPersonalDetail, getUser } from "../api/userApi";
import { addEmploymentnDetail } from "../api/employmentApi"
import { addEducationDetail } from "../api/educationApi"
import PersonalDetail from "./common/PersonalDetail";
import AboutMe from './common/AboutMe';
import Contact from './common/Contact';
import EducationDetails from './common/EducationDetails';
import EmployeDetails from './common/EmployeDetails';
import Skills from './common/Skills';
import { addUserSkill } from '../api/skillApi';
import Preview from './Preview';
import { Link } from 'react-router-dom';

function Profile() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [personalData, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    country: "",
    discription: "",
    email: "",
    phoneNumber: "",
    linkedin: "",
    github: "",
    isEdit: false
  })

  const [companyDetail, setCompanyDetail] = useState({
    companyName: "",
    position: "",
    startDate: "",
    endDate: "",
    location: ""
  })
  const [companies, setCompanies] = useState([])
  const [educationDetails, setEducationDetails] = useState({
    instituteName: "",
    university: "",
    stream: "",
    startDate: "",
    endDate: "",
    location: ""
  })

  const [educations, setEducations] = useState([])
  
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([]);
  // console.log('skills', skills);
  const [isButtonClick, setIsButtonClick] = useState(false)

  
  // const navigate = useNavigate()
  useEffect(() => {
    initTWE({ Collapse, Ripple });
    getuserData()
    // getUserSkill()
  }, []);

  const getuserData = async () => {
    const getUserdata = await getUser()
    
    setPersonalData({
      ...getUserdata?.user, ...getUserdata?.persnalDetail, isEdit: true,
    })

    if (getUserdata.education) {
      setEducations(getUserdata.education)
    }
    
    if (getUserdata.employement) {
      setCompanies(getUserdata.employement)
    }
    
    if (getUserdata.UserSkill) {
      setSkills(getUserdata.UserSkill)
    }
  }
  
  const toggleSection = (section) => {
    setExpandedSection(prevSection => (prevSection === section ? null : section));
  };

  
  const handleChange = (e) => {
    const value = e.target.value
    setPersonalData((prev) => {
      return { ...prev, [e.target.name]: value }
    })
  }
  
  const handleEducationChange = (e) => {
    const value = e.target.value
    setEducationDetails((prev) => {
      return { ...prev, [e.target.name]: value }
    })
  }

  const handleEmployementChange = (e) => {
    const value = e.target.value
    setCompanyDetail((prev) => {
      return { ...prev, [e.target.name]: value }
    })
  }
  
  const handleSubmitForm = async (slug) => {
    if (slug === 'PERSONAL_DETAIL') {
      await addPersonalDetail(personalData)
      setPersonalData((prev) => ({ ...prev, ...personalData, isEdit: true }))
    }
    else if (slug === "EDUCATION-INFORMATION") {
      await addEducationDetail(educationDetails)
      setEducations((prev) => ({ ...prev, educationDetails: educations, isEdit: true }))
    }
    else if (slug === "COMPANY_INFORMATION") {
      await addEmploymentnDetail(companyDetail)
      // setCompanyDetail((prev) => ({ ...prev, companyDetail: companies, isEdit: true }))
      setEducations((prev) => [...prev, educationDetails]);

    }
    // else if (slug === "SKILL_INFORMATION") {
    //   await addUserSkill(newSkill)
    //   setSkills((prev) => ({ ...prev, newSkill: skills , isEdit: true }))
    //   // setSkills([...skills, newSkill]);

    // }
  }
  
  return (
  <>
    <div className="bg-yellow-100 pt-28 pb-20 flex justify-center">
      <div className='container w-3/4 bg-white min-h-full rounded-2xl flex flex-col px-28 border border-slate-300'>
        <div className='py-5 flex items-center '>
          <div className='flex items-center w-1/2'>
            <div className='w-24 h-24 bg-gray-100 rounded-full'>
              <label htmlFor="fileInput" className='cursor-pointer'>
                <svg viewBox="0 0 128 128" className="chakra-avatar__svg css-16ite8i" role="img" aria-label=" avatar">
                  <path fill="currentColor" d="M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"></path>
                  <path fill="currentColor" d="M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"></path></svg>
              </label>
              <input type="file" id="fileInput" className='hidden' />
            </div>
            <h1 className='text-2xl ms-5'>{personalData?.firstName}</h1>
          </div>
          
          <div className='items-center p-5 flex justify-end'>
            <button className='bg-slate-600 text-white font-bold py-2 px-4 rounded-full flex items-center justify-between text-lg'>
              <MdDownloadForOffline className='mr-2' />
              Download
            </button>
          </div>

          {/* Preview */}
          <div className=''>
            <Link 
              className='bg-slate-600 text-white font-bold py-2 px-4 rounded-full flex items-center justify-between text-lg gap-2'
              to='/profile/preview'
              state={{ personalData, educations, companies, skills }}
              onClick={() => setIsButtonClick(true)}
              >
                <img src='view.png' className=' size-4 bg-white rounded-full py-0' />
              Preview
            </Link>
          </div>
           {/* Logout Button */}
          <div className='flex items-center ml-auto'>
            <button
              className='bg-slate-600 font-bold text-lg text-white px-5 py-2 w-24 rounded-3xl'
              onClick={() => {
                localStorage.removeItem('token');
                window.location.reload();
              }}
            >
              Logout
            </button>
          </div>
        </div>
      
        <div className='py-5 flex flex-col gap-5'>
        
          <PersonalDetail
            personalData={personalData}
            setPersonalData={setPersonalData}
            handleSubmitForm={handleSubmitForm}
            toggleSection={toggleSection}
            expandedSection={expandedSection}
            handleChange={handleChange}
            // handleChange={(e) => handleChange(e, setPersonalData)}
          />
          <AboutMe
            personalData={personalData}
            handleSubmitForm={handleSubmitForm}
            setPersonalData={setPersonalData}
            toggleSection={toggleSection}
            expandedSection={expandedSection}
            handleChange={handleChange}
          />
          <Contact
            personalData={personalData}
            handleSubmitForm={handleSubmitForm}
            setPersonalData={setPersonalData}
            toggleSection={toggleSection}
            expandedSection={expandedSection}
            handleChange={handleChange} />

          <EducationDetails
            educations={educations}
            handleSubmitForm={handleSubmitForm}
            toggleSection={toggleSection}
            expandedSection={expandedSection}
            handleEducationChange={handleEducationChange}
            setEducations={setEducations}
            educationDetails={educationDetails}
            setEducationDetails={setEducationDetails}
            // handleUpdateForm={handleUpdateForm}
          />

          <EmployeDetails
            toggleSection={toggleSection}
            expandedSection={expandedSection}
            handleSubmitForm={handleSubmitForm}
            handleEmployementChange={handleEmployementChange}
            companyDetail={companyDetail}
            setCompanyDetail={setCompanyDetail}
            companies={companies}
            setCompanies={setCompanies}
            // handleUpdateForm={handleUpdateForm}
          />

          <Skills 
            toggleSection={toggleSection}
            expandedSection={expandedSection}
            skills={skills}
            setSkills={setSkills}
            newSkill={newSkill}
            setNewSkill={setNewSkill}
            handleSubmitForm={handleSubmitForm}
          /> 


        </div>
      </div>
    </div>
    </>
  );
}

export default Profile;
