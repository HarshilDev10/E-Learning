import React from 'react'
import WebImg from '../assets/Web.jpg'
import CourseCard from '../components/CourseCard'


const CoursesMain = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <CourseCard course="Web Development" image={WebImg} />
        <CourseCard course="App Development" image={WebImg} />
        <CourseCard course="Python Development" image={WebImg} />
        <CourseCard course="PHP Development" image={WebImg} />
        <CourseCard course="Ios Development" image={WebImg} />
        <CourseCard course="Data Science" image={WebImg} />
        <CourseCard course="Project Management" image={WebImg} />
        <CourseCard course="Data Analytics" image={WebImg} />
        <CourseCard course="QA Tester" image={WebImg} />
        <CourseCard course="MERN Stack" image={WebImg} />
        <CourseCard course="PostGre SQL" image={WebImg} />
        <CourseCard course="Business Management" image={WebImg} />
      </div>
    </div>
  )
}

export default CoursesMain
