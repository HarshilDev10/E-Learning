import React from 'react';
import WebDev from '../pages/WebDev';
import { Navigate } from 'react-router-dom';


const CourseCard = (props) => {
  const submitHandler = () => {
    console.log("Enrolled")
    };

  return (
    <div className="border-2 border-black mx-8 rounded-lg w-[90%] max-w-[250px] sm:w-[250px] h-auto">
      <img
        src={props.image}
        alt="img"
        className="w-full h-[200px] object-cover rounded-t-md"
      />
      <h1 className="text-center text-base sm:text-lg mt-3">{props.course}</h1>
      <button
        onClick={submitHandler}
        className="block my-3 mx-auto h-8 w-28 sm:w-32 text-sm sm:text-base rounded-full text-white bg-black hover:scale-95 hover:bg-slate-700"
      >
        Enroll Now
      </button>
    </div>
  );
};

export default CourseCard;
