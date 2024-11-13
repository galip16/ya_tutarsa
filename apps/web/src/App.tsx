import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import MatchDetails from './pages/MatchDetails';
import LoginPage from './pages/Auth/LoginPage';
import SignupPage from './pages/Auth/SignupPage';
import { ThemeProvider } from './theme/themeContext';
import BasketPage from './pages/Basket';
import { Bet } from './components/Basket';
import { getBetsFromLocalStorage, saveBetsToLocalStorage } from './utils/storage';


const App: React.FC = () => {

  const [userBets, setUserBets] = useState<Bet[]>(() => getBetsFromLocalStorage());

  useEffect(() => {
    saveBetsToLocalStorage(userBets);
  }, [userBets]);  

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/match/:id" element={<MatchDetails setUserBets={setUserBets} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/basket" element={<BasketPage userBets={userBets} setUserBets={setUserBets} />} /> {/* Sepet sayfası */}

        </Routes>
      </Router>
    </ThemeProvider>

  );
};

export default App;

