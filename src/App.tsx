import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Profile from './pages/Profile';
import Reels from './pages/Reels';
import Marketplace from './pages/Marketplace';
import Groups from './pages/Groups';
import Gaming from './pages/Gaming';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/reels" element={<Reels />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/gaming" element={<Gaming />} />
      </Routes>
    </Router>
  );
}

export default App;
