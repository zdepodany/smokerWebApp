import React from "react";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import "../HistoryPage.css";

function HistoryItem(props) {
    return (
        <div className="cigarette">
            <p>{props.cigOperation}1 cigareta</p>
            <div className="cigData">
                <p>{props.time}</p>
                <DeleteOutlineRoundedIcon className="deleteIcon" />
            </div>
        </div>
    )
}

export default HistoryItem;
