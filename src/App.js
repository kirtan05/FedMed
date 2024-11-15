import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LightTheme, DarkTheme, BaseProvider } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { ToasterContainer } from 'baseui/toast';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import SubmitModel from './components/SubmitModel';
import Rewards from './components/Rewards';
import History from './components/History';
import { UserProvider } from './contexts/UserContext';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const engine = new Styletron();

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={isDarkMode ? DarkTheme : LightTheme}>
        <UserProvider>
          <Router>
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <ToasterContainer />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/submit" element={<SubmitModel />} />
              <Route path="/rewards" element={<Rewards />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </Router>
        </UserProvider>
      </BaseProvider>
    </StyletronProvider>
  );
};

export default App;
