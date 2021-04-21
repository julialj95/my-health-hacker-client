import React from "react";
import "./LogItem.css";
import EditLog from "../EditLog/EditLog";
import config from "../config";
import TokenService from "../services/token-service";
import { withRouter } from "react-router-dom";

class LogItem extends React.Component {
  constructor() {
    super();
    this.state = {
      displayFull: false,
      displayEditLogForm: false,
      error: "",
    };
  }
  handleEditFormDisplay = () => {
    this.setState({
      displayEditLogForm: true,
    });
  };

  handleDisplay = () => {
    this.setState((prevState) => {
      console.log(!prevState.displayFull);
      return {
        displayFull: !prevState.displayFull,
      };
    });
  };

  deleteLog = () => {
    const { id } = this.props;

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
        this.props.history.push("/logs");
      })
      .catch((error) => this.setState({ error }));
  };

  renderFullItem() {
    return (
      <section className="log_record long">
        <h2 className="title_row">{this.props.date}</h2>
        <div className="top_section">
          <div className="log_section">
            <p>Stress Level: {this.props.stress}/5</p>
            <p>Mood: {this.props.mood}/5</p>
          </div>
          <div className="log_section">
            <p>Hours slept: {this.props.sleep_hours}</p>
            <p>Sleep Quality: {this.props.sleep_quality}/5</p>
          </div>
          <div className="log_section">
            <p>Minutes of Exercise: {this.props.exercise}</p>
            <p>Type of Exercise: {this.props.exercise_type}</p>
            <p>Ounces of water consumed: {this.props.water}</p>
          </div>
        </div>
        <p>{this.props.notes}</p>
        <button onClick={this.handleEditFormDisplay}>Edit</button>
        <button onClick={this.deleteLog}>Delete</button>
        <button onClick={this.handleDisplay}>Collapse Log</button>
      </section>
    );
  }
  renderPartialItem() {
    return (
      <section className="log_record short">
        <h2>{this.props.date}</h2>
        <button onClick={this.handleDisplay}>View Log</button>
      </section>
    );
  }
  render() {
    return (
      <div>
        {this.state.displayFull
          ? this.renderFullItem()
          : this.renderPartialItem()}
        {this.state.displayEditLogForm ? (
          <>
            <h2>Edit Log</h2>
            <EditLog id={this.props.id} />
          </>
        ) : null}
      </div>
    );
  }
}
export default withRouter(LogItem);
