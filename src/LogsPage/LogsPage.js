import React from "react";
import "./LogsPage.css";
import config from "../config";
import TokenService from "../services/token-service";
import LogItem from "../LogItem/LogItem";

class Logs extends React.Component {
  constructor() {
    super();
    this.state = {
      logs: [],
    };
  }

  componentDidMount() {
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
        this.setState({ logs: data });
      })
      .catch((error) => console.error({ error }));
  }

  displayLogs = () => {
    const logs = this.state.logs.map((logItem) => {
      console.log(logItem);
      return (
        <LogItem
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

    if (this.state.logs.length === 0) {
      return <h2>You have no logs. </h2>;
    }
    return logs;
  };

  render() {
    return (
      <div className="about">
        <h1>My Logs</h1>
        <div>{this.displayLogs()}</div>
      </div>
    );
  }
}
export default Logs;
