// App.jsx
import React, { useEffect } from 'react';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import "./styles/sidebar.css";
import './styles/Navbar.css';
import IHomeUser from './components/coursesadmin/courseuser';
import CHome from './components/Admin_Ins/Home_Ins';
import CEdit from './components/Admin_Ins/Edit_Ins';
import CCreate from './components/Admin_Ins/Add_Ins';
import Leaderboard1 from './components/leaderboard/leaderboard1';
import ICreate from './components/coursesadmin/create';
// import CEdit from './components/courses/coursesedit';
// import CCreate from './components/courses/coursescreate';
import CHome23 from './components/Admin_Ins/usercourse';
import DashboardHome from './components/dashboard1/dashboardhome';
import Leaderboard from './components/leaderboard/leaderboard';
import Profileex from './components/profile/pf';
// import CourseHome from './components/courses/courseshome';
import Section from './components/section/Section';
import Content from './components/home/content';
import ProfileText from './components/profilepftext/textanime';
import AChart from './components/dash1/linechart';
import Profile1 from './components/profile/Profile';
import EditProfile from './components/profile/EditProfile';
import RegistrationList from './components/registrationpage/registrationshow';
import Courseavail from './components/coursecrud/courseavail';
import RegisterForm from './components/login/signup';
import TNavbar from './components/navbar/nav12';
import RegistrationCourse from './components/registrationpage/registration';
import Sidebar from './components/sidebar/sidebar';
import Login from './components/login/login';
import StuEdit from './components/studentsdetails/Edit_Student';
// import PersonalProfile from './components/profile/Profile';
import App3 from './App3';
import IHome from './components/coursesadmin/home';
import Ut from './components/tournaments/ut';
import IEdit from './components/coursesadmin/edit';
// import Leaderboard1 from './components/leaderboard/leaderboard1';
import Ut1 from './components/tournaments/ut1';
// import Profile1 from './components/profile/prof1';// import Leaderboard from './components/leaderboard/leaderboard';
import GalleryHeader from './text/text';
// import CCreate from './components/courses/coursescreate';
import Dashboard from './components/admindashboard/dashboard';
import HomepageText from './homepagetext/text3';
import StuCreate from './components/studentsdetails/Add_Stud';
import StuHome from './components/studentsdetails/Home_Stud';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  AboutUs,
  OurAim,
  OurVision,
} from "./components/sidebar/Aboutus";
import {
  Services,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./components/sidebar/Services";
import {
  Events,
  EventsOne,
  EventsTwo,
} from "./components/sidebar/Events";
import About from './components/about/About';
import Contact from "./components/sidebar/Contact";
import Support from "./components/sidebar/Support";
// import Leaderboard1 from './components/leaderboard/leaderboard1';
// import GalleryHeader from './text/text';
import Registration from './components/registrationpage/registration';
import Panel from './components/Sidebar123/Panel';
import FetchUserDetails from './components/SiteSettings/site';
import Toggle from './components/admindashboard/adminhome';
export default function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const handleLogin = () => {
    setIsAuthorized(true);
  };

  console.log('Rendering App component');
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/" element={<Section />} />
            <Route path="/lead" element={<><Dashboard/><FetchUserDetails/></>} />
          <Route path="/login" element={<><Navbar /><RegisterForm /></>} />
          <Route path="/about" element={<About />} />
          <Route path="/courses23" element={<CHome23 />} />
          <Route path="/signin" element={<div><Navbar/><Login handleLogin={handleLogin} /></div>} />
          {/* <Route path="/signin" element={<><Navbar /><Login /></>} /> */}
          {isAuthorized && (
    <>
          <Route path="/SAdd" element={<StuCreate />} />
          <Route path="/SHome" element={<><TNavbar/><StuHome /></>} />
          <Route path="/SEdit/:id" element={<StuEdit />} />

          <Route path="/records" element={<StuHome/>} />
          
          <Route path="/nav" element={<><Sidebar /><HomepageText/><br>
          </br></>} />
          {/* <Route path="/about-us/aim" render={() => <ViewProfile data={profile data} />} /> */}
        {/* <Route path="/edit" render={() => <EditProfile data={profile data} />} /> */}
        <Route
  path="/about-us"
  element={
    <>
      <Dashboard style={{ backgroundImage: 'url("https://quotefancy.com/media/wallpaper/3840x2160/1936259-Mikhail-Botvinnik-Quote-Chess-is-the-art-which-expresses-the.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }} />
    </>
  }
/>


          <Route path="/about-us/aim" element={<Profile1 />} />
          <Route path="/edit" element={<Profileex/>}/>
          <Route path="/Ccreate" element={<CCreate/>}/>
          <Route path="/events" element={<><Sidebar/><App3/></>}/>
          <Route path="/courses" element={<><Dashboard/><CHome/></>}/>
          <Route path="/academy" element={<><Dashboard/><IHome/></>}/>
          {/* <Route path="/services" element={<>  <div style={{ 
      backgroundImage: 'url("data:image/jpeg;base64,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")',
      backgroundSize: 'cover',  // Optional: Adjust the background size as needed
      backgroundRepeat: 'no-repeat',  // Optional: Adjust the background repeat as needed
      minHeight: '400vh',  // Optional: Set a minimum height to cover the entire viewport
    }}><Sidebar/><ProfileText/><br></br><br></br><br></br><br></br><Profile1 /><AChart/><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><Leaderboard/><Ut/><Ut1/></div></>} /> */}
          <Route path="/services/services1" element={<ServicesOne />} />
          <Route path="/services" element={<><Sidebar/><Profile1/><DashboardHome /></>} />
          <Route path="/services/services2" element={<ServicesTwo />} />
          <Route path="/services/services3" element={<ServicesThree />} />
          <Route path="/contact" element={<><Sidebar/><Profileex /></>} />
          <Route path="/IEdit" element={<IEdit />} />
          <Route path="/CEdit/:id" element={<CEdit />} />
          <Route path="/Chome" element={<><TNavbar/><br></br><CHome /></>} />
          <Route path="/view" element={<><TNavbar/><br></br><RegistrationList /></>} />
          <Route path="/add" element={<ICreate />} />
          <Route path="/support" element={<><Sidebar/><IHomeUser /></>} />
          <Route path="/reg23" element={<RegistrationCourse />} />
          <Route path="/IHome" element={<><TNavbar/><IHome /></>} />
          
          <Route path="/panel" element={<Panel/>} />
          {/* <Route path="/events" element={<><Courseavail /></>} /> */}
          <Route path="/events/events2" element={<><br></br><br></br>
          </>} />
          {/* <Route path="/support" element={<PersonalProfile />} /> */}
          </>
  )}
        </Routes>
      </Router>
    </div>
  );
}
