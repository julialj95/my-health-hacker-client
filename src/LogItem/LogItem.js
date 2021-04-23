import React, { useState } from "react";
import "./LogItem.css";
import EditLog from "../EditLog/EditLog";
import config from "../config";
import TokenService from "../services/token-service";
import { useHistory } from "react-router-dom";

function LogItem(props) {
  const [displayFull, setDisplayFull] = useState(false);
  const [displayEditLogForm, setDisplayEditLogForm] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  const deleteLog = () => {
    console.log("deleteLogCalled");
    const { id } = props;

    fetch(`${config.API_BASE_URL}/logs/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + TokenService.getAuthToken(),
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
      })
      .then(() => {
        history.push("/logs");
      })
      .catch((error) => setError(error));
  };

  const renderFullItem = () => {
    return (
      <section className="log_record long">
        <h2 className="title_row">{props.date}</h2>
        <div className="top_section">
          <div className="log_section">
            <p>Stress Level: {props.stress}/5</p>
            <p>Mood: {props.mood}/5</p>
          </div>
          <div className="log_section">
            <p>Hours slept: {props.sleep_hours}</p>
            <p>Sleep Quality: {props.sleep_quality}/5</p>
          </div>
          <div className="log_section">
            <p>Minutes of Exercise: {props.exercise}</p>
            <p>Type of Exercise: {props.exercise_type}</p>
            <p>Ounces of water consumed: {props.water}</p>
          </div>
        </div>
        <p>{props.notes}</p>
        <button onClick={() => setDisplayEditLogForm(true)}>Edit</button>
        <button onClick={deleteLog}>Delete</button>
        <button onClick={() => setDisplayFull(false)}>Collapse Log</button>
      </section>
    );
  };
  const renderPartialItem = () => {
    return (
      <section className="log_record short">
        <h2>{props.date}</h2>
        <button onClick={() => setDisplayFull(true)}>View Log</button>
      </section>
    );
  };

  return (
    <div>
      {displayFull ? renderFullItem() : renderPartialItem()}
      {displayEditLogForm ? (
        <>
          <h2>Edit Log</h2>
          <EditLog id={props.id} />
        </>
      ) : null}
      {error ? <h2>{error.message}</h2> : null}
    </div>
  );
}

export default LogItem;
