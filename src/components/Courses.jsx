import React from 'react';
import CourseCardGrid from './CourseCardGrid';

const Courses = () => {
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-20 bg-white">
<hr className="border-t-1 border-gray-700 my-10 w-full" />
<h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-12 pt-16">
        Explore Our Courses
      </h2>
      <CourseCardGrid />
    </div>
  );
};

export default Courses;
