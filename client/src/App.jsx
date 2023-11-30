import { Routes, Route } from 'react-router-dom'

import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Teams from './components/teams/Teams.jsx';
import CreateTeam from './components/create-team/CreateTeam.jsx';
import { AuthProvider } from './contexts/authContext.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';

function App() {

  return (
    <AuthProvider>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/teams/create' element={<CreateTeam />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
  
      <Footer />
    </AuthProvider>
  )
}

export default App
