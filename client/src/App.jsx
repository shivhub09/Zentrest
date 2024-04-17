import './App.css'
import LoginScreen from './Components/LoginScreen/LoginScreen';
import MainScreen from './Components/MainScreen/MainScreen'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegisterScreen from './Components/RegistrationScreen/RegisterScreen';

function App() {

  return (
    <Router>

      <Routes>
        <Route path="/" element={<MainScreen />} /> 
        <Route path="/login" element={<LoginScreen></LoginScreen>} />
        <Route path="/register" element={<RegisterScreen></RegisterScreen>} />
      </Routes>

    </Router>
  )
}

export default App
