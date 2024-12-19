import React, { useEffect, useState } from 'react';
import { Plus, X, Save } from 'lucide-react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { addUserSkill, updateSkills } from '../../api/skillApi';

const SkillsSection = ({toggleSection, expandedSection, skills, setSkills,newSkill, setNewSkill, handleSubmitForm}) => {
  const [isAddButtonClicked, setIsAddButtonClicked] = useState(false);
  // console.log(skills);
  const [editIndex, setEditIndex] = useState("");
  
  const handleAddSkill = async () => {
    await addUserSkill({title:newSkill})
    if (newSkill.trim()) {
      setSkills([...skills, {
        // id: Date.now(),
        title: newSkill.trim(),
        // category: skillCategory
      }]);
      setNewSkill('');
    }
  };

  // const handleDeleteSkill = (skillId) => {
  //   setSkills(skills.filter(skill => skill.id !== skillId));
  // };

  // const handleKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     // handleAddSkill();
  //     // handleAddSkill()
  //   }
  // };


  // const handleEditSkill = async (id) => {
   
    // setSkillssetSkills({title: newSkill});
  // }
  const handleSaveEdit = async (id) => {
    await updateSkills(newSkill, id)
     setSkills((prevSkills) =>
    Array.isArray(prevSkills) ? [...prevSkills] : []
  );
    setEditIndex("")
  }

  return (
    <div className="Skill">
      <a
        className="mx-auto bg-gray-100 border-t border-r border-l rounded px-6 pb-5 pt-5 text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out flex items-center justify-between gap-5"
        onClick={() => toggleSection('skill')}
        href="#skill"
        role="button"
        aria-expanded={expandedSection === 'skill'}
        aria-controls="skill"
      >
        <p className="font-semibold">Skill</p>
        <div className="flex items-center gap-4">
          {expandedSection === 'skill' && (
            <button
              className="bg-slate-600 text-white font-bold py-2 px-5 rounded-full text-lg"
              // onClick={handleAddSkill}
              onClick={() => setIsAddButtonClicked(true)}
            >
              Add Skills
            </button>
          )}
          {expandedSection === 'skill' ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
        </div>
      </a>

      {expandedSection === 'skill' && (
        <div className="visible p-6 border-b border-r border-l bg-gray-100 flex flex-col gap-4">
          
          
          {skills.map((skill, index) => (
            
            <div key={index} className="skill-item flex gap-4 items-center">
              {editIndex !== index ? (
                <>
                  <span className="w-3/4">{skill.title}</span>
                  <button
                    className="bg-slate-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      setEditIndex(index)
                      setNewSkill(skill)

                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-600 text-white font-bold py-2 px-4 rounded"
                    // onClick={() => handleDeleteSkill(skill.id)}
                  >
                    Delete
                  </button>
                </>
              ) : (
                <>
                  <input
                    className="w-3/4 py-2 px-4 rounded border"
                    value={skills[index].title}
                    onChange={(e) => {
                      const updatedSkills = [...skills];
                      updatedSkills[index].title = e.target.value;
                      setSkills(updatedSkills);
                    }}
                  />
                  <button
                    className="bg-green-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {handleSaveEdit(skill._id)}}
                  >
                    Save
                  </button>
                </>
              )}
            </div>
          ))}

          {isAddButtonClicked && (
            <div>
                <div className="flex-1 flex space-x-2 max-w-sm">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    // onKeyPress={handleKeyPress}
                    placeholder="Add a new skill..."
                    className="flex-1 px-3 py-2 border rounded-md"
                  />
                  <button
                    onClick={handleAddSkill}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
                  >
                    <Plus size={18} className="mr-1" />
                    Add
                  </button>
                </div>
            </div>
          )}

        </div>
        
      )}
    </div>
  );


};

export default SkillsSection;


