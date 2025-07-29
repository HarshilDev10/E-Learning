import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import NumberPeopleGroup from './components/NumberPeopleGroup'
import Courses from './components/Courses'
import Company from './components/Company'
import TeamUser from './components/TeamUser'
import About from './pages/About'
import CoursesMain from './pages/CoursesMain'
import Login from './pages/Login'
import WebDev from './pages/WebDev'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={
          <>
            <Header />
            <Home />
            <NumberPeopleGroup />
            <Courses />
            <Company />
            <TeamUser />
            <Footer />
          </>
        } />

        <Route path="/Courses" element={
          <>
            <Header />
            <CoursesMain />
            <Footer />
          </>
        } />

        <Route path="/About" element={
          <>
            <Header />
            <About />
            <Footer />
          </>
        } />
        <Route path="/WebDevCourse" element={
          <WebDev></WebDev>
        }
        />
      </Routes>

    </>
  )
}

export default App
