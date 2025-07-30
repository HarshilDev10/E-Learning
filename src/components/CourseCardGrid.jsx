import React from 'react';
import CourseCard from './CourseCard';
import PythonImg from '../assets/Python.jpg';
import WebImg from '../assets/Web.jpg';
import AppImg from '../assets/App.jpg';
import IosImg from '../assets/Ios.jpg';

const CourseCardGrid = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 px-4">
      <CourseCard course="Web Development" image={WebImg} />
      <CourseCard course="Python Development" image={PythonImg} />
      <CourseCard course="Ios Development" image={IosImg} />
      <CourseCard course="App Development" image={AppImg} />
      <CourseCard course="Data Science" image={WebImg} />
      <CourseCard course="PHP Developer" image={PythonImg} />
    </div>
  );
};

export default CourseCardGrid;
