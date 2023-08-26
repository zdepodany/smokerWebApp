import React, { useState, useEffect } from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import ReportProblemRoundedIcon from '@mui/icons-material/ReportProblemRounded';
import './CigaretteCounter.css';

function CigaretteCounter() {
    const [cigaretteCount, setCigaretteCount] = useState(0);

    useEffect(() => {
      fetch('http://localhost:5000/counter', { method: 'GET' })
        .then(response => response.json())
        .then(data => {
          setCigaretteCount(data.cigaretteCount);
        });
    }, []);

    //Přidání cigarety
    const addCig = () => {
      fetch(`http://localhost:5000/addCig`, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
          setCigaretteCount(data.cigaretteCount);
        });
    };

    //Odebrání cigarety
    const removeCig = () => {
        fetch('http://localhost:5000/removeCig', { method: 'POST' })
          .then(response => response.json())
          .then(data => {
            setCigaretteCount(data.cigaretteCount);
          });
    };

    //Barvení kruhu podle počtu cigaret
    let circleColor, textColor;

    if (cigaretteCount >= 0 && cigaretteCount <= 4) {
      circleColor = '#D3F4FF';
      textColor = '#0072A3';
    } else if (cigaretteCount >= 5 && cigaretteCount <= 9) {
      circleColor = '#FFF4CC';
      textColor = '#9D8300';
    } else if (cigaretteCount >= 10 && cigaretteCount <= 14) {
      circleColor = '#FFF3EC';
      textColor = '#FF5555';
    } else if (cigaretteCount >= 15 && cigaretteCount <= 24) {
      circleColor = '#FF5555';
      textColor = '#FFF3EC';
    } else if (cigaretteCount >= 25 && cigaretteCount <= 49) {
      circleColor = '#1E1E1E';
      textColor = '#F5F5F5';
    } else {
      circleColor = '#1E1E1E';
      textColor = '#F5F5F5';
    }

    return (
      <div className='cigarette-counter'>
        <div className='counter-circle' style={{ backgroundColor: circleColor }}>
          {cigaretteCount >= 50 && <ReportProblemRoundedIcon style={{ color: '#F5F5F5' }} />}
          <p className='displayed-count' style={{ color: textColor }}>
            {cigaretteCount}
          </p>
        </div>
        <div className='counter-buttons'>
          <button className='counter-button' onClick={removeCig}>
            <RemoveRoundedIcon className='smokeIcon' sx={{ fontSize: 40 }} />
          </button>
          <button className='counter-button' onClick={addCig}>
            <AddRoundedIcon className='smokeIcon' sx={{ fontSize: 40 }} />
          </button>
        </div>
      </div>
    );
  }

  export default CigaretteCounter;
