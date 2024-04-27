import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import './App.css';
import Home from './components/Home';
import Signup from  './components/Signup';
import Adminlogin from './components/Adminlogin';
import Dashexam from "./components/Dashexam";
import AdminDashboard from './components/AdminDashboard';

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
      </Routes>
    </Router>
  );
}

export default App;
