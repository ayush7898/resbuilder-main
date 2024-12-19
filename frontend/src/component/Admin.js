import React from 'react';
import { AiTwotoneHome } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { PiStudentDuotone } from "react-icons/pi";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Skills from "./common/Skills";

function Admin() {
  const navigate = useNavigate()
  return (
    <div className='w-full' style={{ height: '100%' }}>
      <nav style={{ height: '100px' }} className='w-full bg-gray-900 flex items-center px-6'>
        <h1 className='text-white text-2xl font-semibold'>Logo</h1>
      </nav>
      <div style={{ height: 'calc(100% - 100px)' }} className='flex'>
        <div className='w-64 bg-gray-800 text-white h-full flex flex-col'>
          <div className='flex flex-col py-4'>
            <label className="flex items-center py-3 px-6 hover:bg-gray-700 transition-colors cursor-pointer"  onClick={() => navigate('/admin/dashboard')}>
              <AiTwotoneHome className='text-xl' />
              <span className="ml-4 text-lg font-medium">Dashboard</span>
            </label>
            <label className="flex items-center py-3 px-6 hover:bg-gray-700 transition-colors cursor-pointer"  onClick={() => navigate('/admin/users')}>
              <FaUserAlt className='text-xl' />
              <span className="ml-4 text-lg font-medium">Users</span>
            </label>
            <label className="flex items-center py-3 px-6 hover:bg-gray-700 transition-colors cursor-pointer"  onClick={() => navigate('/admin/employment')}>
              <GrUserWorker className='text-xl' />
              <span className="ml-4 text-lg font-medium">Employment</span>
            </label>
            <label className="flex items-center py-3 px-6 hover:bg-gray-700 transition-colors cursor-pointer"  onClick={() => navigate('/admin/education')}>
              <PiStudentDuotone className='text-xl' />
              <span className="ml-4 text-lg font-medium">Education</span>
            </label>
            <label className="flex items-center py-3 px-6 hover:bg-gray-700 transition-colors cursor-pointer" onClick={() => navigate('/admin/skill')}>
              <GiSkills className='text-xl' />
              <span className="ml-4 text-lg font-medium">Skills</span>
            </label>
            <label className="flex items-center py-3 px-6 hover:bg-gray-700 transition-colors cursor-pointer"  onClick={() => navigate('/admin/setting')}>
              <IoSettingsSharp className='text-xl' />
              <span className="ml-4 text-lg font-medium">Settings</span>
            </label>
          </div>
        </div>
        <div className='flex-1 bg-gray-100 p-6'>
          <Routes>
            <Route path={'/skill'} element={<Skills/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Admin;
