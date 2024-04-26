import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AdminLayout from './components/layouts/adminlayout';
import UserLayout from './components/layouts/userlayout';
import Login from './pages/account/login';
import AdminDashboard from './pages/admin/admindashboard'; // Import your Dashboard component
import Team from './pages/admin/Team/team';
import Task from './pages/admin/Task/task';
import Calender from './pages/admin/Calender/calender';
import UserShedules from './pages/User/Schedules/schedules';

import UserDashboard from './pages/User/Dashboard/userdashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track authentication status

  // Function to handle successful authentication and update isLoggedIn state
  const handleLogin = () => {
    // Perform authentication logic here
    // If authentication is successful, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={isLoggedIn ? <Navigate to="/admindashboard" /> : <Login  />} />
        <Route path='/adminlayout'element={< AdminLayout/>} />
        <Route path="/login" element={<Login  />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path='/tasks' element={<Task/>}/>
        <Route path='/calendar' element={<Calender/>}/>
        <Route path="/team" element={<Team/>}/>

        <Route path="/userlayout" element={<UserLayout/>}/>
        <Route path ="/userdashboard" element={<UserDashboard/>}/>
        <Route path='/userschedules' element={<UserShedules/>}/>


      </Routes>
    </Router>
  );
}

export default App;
