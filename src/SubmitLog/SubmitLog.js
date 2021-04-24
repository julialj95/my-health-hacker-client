import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SubmitLog.css";
import config from "../config";
import TokenService from "../services/token-service";
import LogInputForm from "../LogInputForm";

function Logs(props) {
  const [logData, setLogData] = useState({
    log_date: "",
    mood: "",
    stress: "",
    sleep_hours: "",
    sleep_quality: "",
    exercise_minutes: "",
    exercise_type: "",
    water: "",
    notes: "",
  });
  const [validationError, setValidationError] = useState("");
  const [fetchError, setFetchError] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogData({
      ...logData,
      [name]: value,
    });
  };

  const submitLog = (e) => {
    e.preventDefault();
    if (logData.log_date === "") {
      return setValidationError("Please select a date");
    }
    const {
      log_date,
      mood,
      stress,
      sleep_hours,
      sleep_quality,
      exercise_minutes,
      exercise_type,
      water,
      notes,
    } = logData;

    fetch(`${config.API_BASE_URL}/logs`, {
      method: "POST",
      body: JSON.stringify({
        log_date,
        mood,
        stress,
        sleep_hours,
        sleep_quality,
        exercise_minutes,
        exercise_type,
        water,
        notes,
      }),
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + TokenService.getAuthToken(),
      },
    })
      .then((res) => {
        if (!res.ok) {
          res.json().then((e) => Promise.reject(e));
        }

        res.json();

        history.push("/logs");
      })
      .catch((error) => setFetchError(error));
  };
  console.log("logData.log_date", logData.log_date);
  return (
    <main className="new_log">
      <h2>Submit Log:</h2>
      <LogInputForm
        handleChange={handleChange}
        handleSubmitLog={submitLog}
        log_date={logData.log_date}
        mood={logData.mood}
        stress={logData.stress}
        sleep_hours={logData.sleep_hours}
        sleep_quality={logData.sleep_quality}
        exercise_minutes={logData.exercise_minutes}
        exercise_type={logData.exercise_type}
        water={logData.water}
        notes={logData.notes}
      />
      {fetchError ? <h2>{fetchError.message}</h2> : null}
      {validationError ? <h2>{validationError}</h2> : null}
    </main>
  );
}

export default Logs;
