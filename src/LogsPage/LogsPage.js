import React, { useState, useEffect } from "react";
import "./LogsPage.css";
import config from "../config";
import TokenService from "../services/token-service";
import LogItem from "../LogItem/LogItem";

function Logs() {
  const [logs, setLogs] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsFetching(true);
    fetch(`${config.API_BASE_URL}/logs`, {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + TokenService.getAuthToken(),
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((event) => Promise.reject(event));
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);

        setLogs(data);
        setIsFetching(false);
      })
      .catch((error) => {
        setError(error);
        setIsFetching(false);
      });
  }, []);

  const displayLogs = logs.map((logItem) => {
    console.log(logItem);

    return (
      <LogItem
        id={logItem.id}
        key={logItem.id}
        date={logItem.log_date}
        stress={logItem.stress}
        mood={logItem.mood}
        sleep_quality={logItem.sleep_quality}
        sleep_hours={logItem.sleep_hours}
        exercise={logItem.exercise_minutes}
        exercise_type={logItem.exercise_type}
        water={logItem.water}
        notes={logItem.notes}
      />
    );
  });
  return (
    <div className="about">
      <h1>My Logs</h1>
      {isFetching ? <h2>Loading...</h2> : displayLogs}
      {error ? <h2>An error has occured. </h2> : null}
    </div>
  );
}

export default Logs;
