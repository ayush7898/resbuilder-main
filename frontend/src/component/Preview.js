import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Template1 from './template/Template1';

function Preview() {
  const location = useLocation();
  const { personalData, educations, companies, skills } = location.state || {};

  console.log('Data in Preview:', { personalData, educations, companies, skills });

  return (
    <>
      <div className="relative bg-yellow-100 w-full min-h-screen py-16">
        
        <div className='flex items-center justify-center mb-5'>
          This is the Preview page
          <Link className=' bg-blue-600 px-3 py-3 rounded-xl ml-8 text-zinc-50 text-md' to={'/profile'} >go Back</Link>
          
        </div>

        {/* Container for Templates */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Template 1 */}
          <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:bg-yellow-50 transition-transform duration-300 w-[300px] h-[400px]">
            <Link to="/profile/preview/template1"
            state={{ personalData, educations, companies, skills }}
            >
              <img src="/temp1.png" alt="Template 1" className="w-full h-[300px] object-cover rounded-lg" />
            </Link>
            <p className="text-gray-800 font-semibold text-center">Template 1</p>
          </div>

          {/* Template 2 */}
          <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:bg-yellow-50 transition-transform duration-300 w-[300px] h-[400px]">
            <Link to="/profile/preview/template2"
            state={{ personalData, educations, companies, skills }}
            >
              <img src="/logo192.png" alt="Template 2" className="w-full h-[300px] object-cover rounded-lg" />
            </Link>
            <p className="text-gray-800 font-semibold text-center">Template 2</p>
          </div>

          {/* Template 3 */}
          <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:hover:bg-yellow-50 transition-transform duration-300 w-[300px] h-[400px]">
            <Link to="/template3">
              <img src="/temp1.png" alt="Template 3" className="w-full h-[300px] object-cover rounded-lg" />
            </Link>
            <p className="text-gray-800 font-semibold text-center">Template 3</p>
          </div>

          {/* Template 4 */}
          <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:bg-yellow-50 transition-transform duration-300 w-[300px] h-[400px]">
            <Link to="/template4">
              <img src="/temp1.png" alt="Template 4" className="w-full h-[300px] object-cover rounded-lg" />
            </Link>
            <p className="text-gray-800 font-semibold text-center">Template 4</p>
          </div>

          {/* Add more templates as needed */}
        </div>
      </div>
    </>
  );
}

export default Preview;
