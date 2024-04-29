import './App.css'
import LoginScreen from './Components/LoginScreen/LoginScreen';
import MainScreen from './Components/MainScreen/MainScreen'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegisterScreen from './Components/RegistrationScreen/RegisterScreen';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import SearchScreen from './Components/SearchScreen/SearchScreen';
import ProfileScreen from './Components/ProfileScreen/ProfileScreen';
import HomeScreenCreatePost from './Components/HomeScreen/components/HomeScreen-CreatePost/HomeScreenCreatePost';
function App() {

  return (
    <Router>

      <Routes>
        <Route path="/" element={<MainScreen />} /> 
        <Route path="/login" element={<LoginScreen></LoginScreen>} />
        <Route path="/register" element={<RegisterScreen></RegisterScreen>} />
        <Route path='/homeScreen' element={<HomeScreen></HomeScreen>} />
        <Route path='/search' element={<SearchScreen></SearchScreen>} />
        <Route path='/profile' element={<ProfileScreen></ProfileScreen>} />
        <Route path='/createPost' element={<HomeScreenCreatePost></HomeScreenCreatePost>} />
      </Routes>

    </Router>
  )
} 

export default App
