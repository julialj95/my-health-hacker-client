import React from "react";
import "./LogItem.css";

class LogItem extends React.Component {
  constructor() {
    super();
    this.state = {
      displayFull: false,
    };
  }
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
        <button onClick={this.editLog}>Edit</button>
        <button>Delete</button>
        <button onClick={this.setState({ displayFull: false })}>
          Collapse Log
        </button>
      </section>
    );
  }
  renderPartialItem() {
    return (
      <section className="log_record short">
        <h2>{this.props.date}</h2>
        <button onClick={this.setState({ displayFull: true })}>View Log</button>
      </section>
    );
  }
  render() {
    return (
      <div>
        {this.state.displayFull
          ? this.renderFullItem()
          : this.renderPartialItem()}
      </div>
    );
  }
}
export default LogItem;
