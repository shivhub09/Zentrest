import './App.css'
import LoginScreen from './Components/LoginScreen/LoginScreen';
import MainScreen from './Components/MainScreen/MainScreen'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegisterScreen from './Components/RegistrationScreen/RegisterScreen';
import HomeScreen from './Components/HomeScreen/HomeScreen';

function App() {

  return (
    <Router>

      <Routes>
        <Route path="/" element={<MainScreen />} /> 
        <Route path="/login" element={<LoginScreen></LoginScreen>} />
        <Route path="/register" element={<RegisterScreen></RegisterScreen>} />
        <Route path='/homeScreen' element={<HomeScreen></HomeScreen>} />
      </Routes>

    </Router>
  )
} 

export default App
