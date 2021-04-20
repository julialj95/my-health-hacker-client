import React from "react";
import LogInputForm from "../LogInputForm";
import config from "../config";
import TokenService from "../services/token-service";

class EditLog extends React.Component {
  constructor() {
    super();
    this.state = {
      log_date: "",
      stress: "",
      mood: "",
      sleep_quality: "",
      sleep_hours: "",
      exercise_minutes: "",
      exercise_type: "",
      water: "",
      notes: "",
    };
  }
  componentDidMount() {
    const { log_id } = this.props;

    fetch(config.API_BASE_URL + `/logs/${log_id}`, {
      method: "GET",
      headers: {
        type: "application/json",
        Authorization: "Bearer " + TokenService.getAuthToken(),
      },
    })
      .then((res) => {
        if (!res.ok) {
          res.json().then((event) => Promise.reject(event));
        }
        return res.json();
      })
      .then((log) => {
        this.setState({
          date: log.log_date,
          stress: log.stress,
          mood: log.mood,
          sleep_quality: log.sleep_quality,
          sleep_hours: log.sleep_hours,
          exercise_minutes: log.exercise_minutes,
          exercise_type: log.exercise_type,
          water: log.water,
          notes: log.notes,
        });
      });
  }
  render() {
    return (
      <>
        <LogInputForm />
      </>
    );
  }
}

export default EditLog;
