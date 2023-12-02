import { Routes, Route } from 'react-router-dom'

import { AuthProvider } from './contexts/authContext.jsx';

import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import Logout from './components/logout/Logout.jsx';
import TeamDetails from './components/team/team-details/TeamDetails.jsx';
import EditTeam from './components/team/edit-team/EditTeam.jsx';
import TeamsList from './components/team/teams-list/TeamsList.jsx';
import CreateTeam from './components/team/create-team/CreateTeam.jsx';

function App() {

  return (
    <AuthProvider>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teams' element={<TeamsList />} />
        <Route path='/teams/create' element={<CreateTeam />} />
        <Route path='/teams/:teamId/details' element={<TeamDetails />} />
        <Route path='/teams/:teamId/edit' element={<EditTeam />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
  
      <Footer />
    </AuthProvider>
  )
}

export default App
