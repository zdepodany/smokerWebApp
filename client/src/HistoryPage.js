import React from "react";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import "./HistoryPage.css";

function HistoryPage() {
  return (
    <div>
        <div className="day">
            <p className="date">20.7.2023</p>
            <div className="cigarette">
                <p>+1 cigareta</p>
                <div className="cigData">
                    <p>13:53</p>
                    <DeleteOutlineRoundedIcon className="deleteIcon" style={{ color: '#C90808' }} />
                </div>
            </div>
        </div>
    </div>
  );
}

export default HistoryPage;
