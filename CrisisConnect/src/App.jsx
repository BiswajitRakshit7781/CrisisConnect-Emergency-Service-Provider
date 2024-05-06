import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Adminlogin from './components/Adminlogin';
import Dashexam from "./components/Dashexam";
import AdminDashboard from './components/AdminDashboard';
import PoliceDash from './components/PoliceDash';
import HospitalDash from './components/HospitalDash';
import MedicineDash from './components/MedicineDash';
import FireDash from './components/FireDash';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Adminlogin />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/dashexam" element={<Dashexam />} />
        <Route path="/police" element={<PoliceDash />} />
        <Route path="/hospital" element={<HospitalDash />} />
        <Route path="/medicine" element={<MedicineDash />} />
        <Route path="/fire" element={<FireDash />} />
      </Routes>
    </Router>
  );
}

export default App;
