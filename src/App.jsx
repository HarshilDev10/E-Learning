import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Companies from './components/Companies';
import Instructors from './components/Instructors';
import Students from './components/Students';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App = () => (
  <div className="min-h-screen font-poppins">
    <Header />
    <Hero />
    <Courses />
    <Companies />
    <Instructors />
    <Students />
    <Contact/>
    <Footer />
  </div>
);

export default App;
