// src/components/TeamUsers.jsx
import React from 'react';
import Team from './Team';
import photo1 from "../assets/man1.jpg";   
import photo2 from "../assets/man2.jpg";   
import photo3 from "../assets/woman1.jpg";  
import photo4 from "../assets/man3.jpg"; 

const TeamUsers = () => {
  const users = [
    {
      name: "Harshil Patel",
      age: 21,
      city: "Vapi",
      profession: "React Developer",
      image: photo1,
    },
    {
      name: "Sakshi Patil",
      age: 21,
      city: "Maharashtra",
      profession: "AI/ML Engineer",
      image: photo3,
    },
    {
      name: "Sujal Patel",
      age: 21,
      city: "Vapi",
      profession: "PHP Developer",
      image: photo2,
    },
    {
      name: "Yashashree Patil",
      age: 21,
      city: "Vapi",
      profession: "Python Developer",
      image: photo3,
    },
    {
      name: "Devang Patel",
      age: 21,
      city: "Surat",
      profession: "Flutter Developer",
      image: photo4,
    }
  ];

  return (
    <div className="my-16 px-4 md:px-12">
<hr className="border-t-1 py-10 border-gray-700 my-10 w-full" />
<h1 className="text-center text-4xl font-bold mb-12 px-6 py-3 mx-auto rounded-lg w-fit bg-white text-gray-800 
    border border-transparent 
    bg-clip-padding 
    shadow-md 
    relative 
    z-10 
    before:absolute before:inset-0 before:rounded-lg before:p-[1px] before:bg-gradient-to-r before:from-purple-500 before:to-blue-500 before:z-[-1]">
  Our Core Team
</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10 justify-items-center">
        {users.map((elem, idx) => (
          <Team
            key={idx}
            name={elem.name}
            age={elem.age}
            city={elem.city}
            profession={elem.profession}
            profile={elem.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamUsers;
