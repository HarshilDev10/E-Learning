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
import AppDevelopment from './pages/AppDevelopment'
import DataScience from './pages/DataScience'
import PHPDeveloper from './pages/PHPDeveloper'
import PythonDeveloper from './pages/PythonDeveloper'
import IOSDevelopment from './pages/IosDevelopment'

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
        <Route path="/Web-Development" element={
          <WebDev></WebDev>
        }
        />
        <Route path="/App-Development" element={
          <AppDevelopment></AppDevelopment>
        }
        />
        <Route path="/Data-Science" element={
          <DataScience></DataScience>
        }
        />
        <Route path="/PHP-Developer" element={
          <PHPDeveloper></PHPDeveloper>
        }
        />
        <Route path="/Python-Development" element={
          <PythonDeveloper></PythonDeveloper>
        }
        />
        <Route path="/Ios-Development" element={
          <IOSDevelopment></IOSDevelopment>
        }
        />
      </Routes>

    </>
  )
}

export default App
