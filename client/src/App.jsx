import { Routes, Route } from 'react-router-dom'

import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import Teams from './components/teams/Teams.jsx';
import CreateTeam from './components/create-team/CreateTeam.jsx';

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/teams/create' element={<CreateTeam />} />
      </Routes>
  
      <Footer />
    </>
  )
}

export default App
