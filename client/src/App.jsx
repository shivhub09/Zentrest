import './App.css'
import LoginScreen from './Components/LoginScreen/LoginScreen';
import MainScreen from './Components/MainScreen/MainScreen'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <Router>

      <Routes>
        <Route path="/" element={<MainScreen />} /> 
        <Route path="/login" element={<LoginScreen></LoginScreen>} />
      </Routes>

    </Router>
  )
}

export default App
