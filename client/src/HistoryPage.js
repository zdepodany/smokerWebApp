import React from "react";
import "./HistoryPage.css";
import HistoryItem from "./components/HistoryItem";

function HistoryPage() {
  return (
    <div>
        <div className="day">
            <p className="date">20.7.2023</p>
            <HistoryItem cigOperation='-' time='13:69' />
        </div>
    </div>
  );
}

export default HistoryPage;
