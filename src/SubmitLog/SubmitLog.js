import React from "react";
import { withRouter } from "react-router-dom";
import "./SubmitLog.css";
import config from "../config";
import TokenService from "../services/token-service";
import LogInputForm from "../LogInputForm";

class Logs extends React.Component {
  constructor() {
    super();
    this.state = {
      log_date: "",
      mood: "",
      stress: "",
      sleep_hours: "",
      sleep_quality: "",
      exercise_minutes: "",
      exercise_type: "",
      water: "",
      notes: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitLog = (e) => {
    e.preventDefault();
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
    } = this.state;

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
        this.props.history.push("/logs");
      })
      .catch((error) => console.error({ error }));
  };

  render() {
    return (
      <main className="new_log">
        <h2>Submit Log:</h2>
        <LogInputForm
          handleChange={this.handleChange}
          handleSubmitLog={this.handleSubmitLog}
          log_date={this.state.log_date}
          sleep_hours={this.state.sleep_hours}
          exercise={this.state.exercise_minutes}
          exercise_type={this.state.exercise_type}
          notes={this.state.notes}
        />
      </main>
    );
  }
}
export default withRouter(Logs);
