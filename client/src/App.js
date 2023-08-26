import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import CigaretteCounter from "./CigaretteCounter";
import HistoryPage from "./HistoryPage";
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import SmokingRoomsRoundedIcon from '@mui/icons-material/SmokingRoomsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import './AppRouter.css';

function App() {

  return (
    <div className='App'>
      <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#8D1C1C' }}>SmokeR</p>

      <Router>
        <Routes>
            <Route path='/' element={ <Navigate to ='counter' /> } />
        </Routes>
            <div>
                <div className='bottom-menu'>
                    <Link to="/history">
                        <button>
                            <BarChartRoundedIcon className='icon' />
                        </button>
                    </Link>
                    <Link to="/counter">
                        <button>
                            <SmokingRoomsRoundedIcon className='icon' />
                        </button>
                    </Link>
                    <button>
                        <SettingsRoundedIcon className='icon' />
                    </button>
                </div>

                <Routes>
                    <Route exact path="/counter" Component={CigaretteCounter} />
                    <Route exact path="/history" Component={HistoryPage} />
                </Routes>
            </div>
        </Router>
    </div>
  );
}

export default App;
