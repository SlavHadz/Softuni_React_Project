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
import Page404 from './components/404/404.jsx';

import styles from './App.module.css';
import AuthGuard from './components/guards/AuthGuard.jsx';
import TeamSquadList from './components/team/team-squad-list/TeamSquadList.jsx';

function App() {

  return (
    <AuthProvider>
      <Header />
      <div className={styles.main}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/teams' element={<TeamsList />} />
          <Route path='/teams/:teamId/details' element={<TeamDetails />} />
          <Route path='/teams/:teamId/squad' element={<TeamSquadList />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route element={<AuthGuard />}>
            <Route path='/teams/create' element={<CreateTeam />} />
            <Route path='/teams/:teamId/edit' element={<EditTeam />} />
            <Route path='/logout' element={<Logout />} />
          </Route>
          
          <Route path='*' element={<Page404 />} />
        </Routes>
      </div>
      <Footer />
    </AuthProvider>
  )
}

export default App
