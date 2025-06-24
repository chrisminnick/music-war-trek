import HomePage from './HomePage';
import ArtistsList from './ArtistsList';
import LeaderBoard from './LeaderBoard';
import Battles from './Battles';
import Header from './Header';
import MainNav from './MainNav';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <h1>Music War Trek</h1>
      <Header />
      <MainNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artists" element={<ArtistsList />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/battles" element={<Battles />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
