import React from "react";
import "./SubmitLog.css";
import config from "../config";
import TokenService from "../services/token-service";

class Logs extends React.Component {
  constructor() {
    super();
    this.state = {
      date: "",
      mood: "",
      stress: "",
      sleep_hours: "",
      sleep_quality: "",
      exercise: "",
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
      date,
      mood,
      stress,
      sleep_hours,
      sleep_quality,
      exercise,
      exercise_type,
      water,
      notes,
    } = this.state;

    fetch(`${config.API_BASE_URL}/logs`, {
      method: "POST",
      body: JSON.stringify({
        date,
        mood,
        stress,
        sleep_hours,
        sleep_quality,
        exercise,
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
      })
      .catch((error) => console.error({ error }));
  };

  render() {
    return (
      <main className="new_log">
        <h2>Submit Log:</h2>
        <form onSubmit={this.handleSubmitLog}>
          <section>
            <label htmlFor="date">Current Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </section>
          <br />

          <div className="log_section">
            <section className="mental">
              <h2>Psychological</h2>
              <div className="mood_rating">
                <h3>Mood Rating</h3>
                <h3>Rate your mood out of 5</h3>
                <input
                  type="radio"
                  id="1"
                  name="mood"
                  value={1}
                  onClick={this.handleChange}
                />
                <label htmlFor="mood">1</label>
                <input
                  type="radio"
                  id="2"
                  name="mood"
                  value={2}
                  onClick={this.handleChange}
                />
                <label htmlFor="mood">2</label>
                <input
                  type="radio"
                  id="3"
                  name="mood"
                  value={3}
                  onClick={this.handleChange}
                />
                <label htmlFor="mood">3</label>
                <input
                  type="radio"
                  id="4"
                  name="mood"
                  value={4}
                  onClick={this.handleChange}
                />
                <label htmlFor="mood">4</label>
                <input
                  type="radio"
                  id="5"
                  name="mood"
                  value={5}
                  onClick={this.handleChange}
                />
                <label htmlFor="mood">5</label>
              </div>
              <div className="stress">
                <h2>Stress Level</h2>
                <h3>Rate your stress level with 5 being the most stressed</h3>
                <input
                  type="radio"
                  id="1"
                  name="stress"
                  value={1}
                  onClick={this.handleChange}
                />
                <label htmlFor="stress">1</label>
                <input
                  type="radio"
                  id="2"
                  name="stress"
                  value={2}
                  onClick={this.handleChange}
                />
                <label htmlFor="stress">2</label>
                <input
                  type="radio"
                  id="3"
                  name="stress"
                  value={3}
                  onClick={this.handleChange}
                />
                <label htmlFor="stress">3</label>
                <input
                  type="radio"
                  id="4"
                  name="stress"
                  value={4}
                  onClick={this.handleChange}
                />
                <label htmlFor="stress">4</label>
                <input
                  type="radio"
                  id="5"
                  name="stress"
                  value={5}
                  onClick={this.handleChange}
                />
                <label htmlFor="stress">5</label>
              </div>
            </section>
            <section className="sleep">
              <h2>Sleep</h2>
              <label htmlFor="sleep">Hours slept</label>
              <br />
              <input
                type="text"
                name="sleep_hours"
                id="sleep_hours"
                value={this.state.sleep_hours}
                onChange={this.handleChange}
              />
              <div>
                <h3>Sleep quality</h3>
                <input
                  type="radio"
                  id="1"
                  name="sleep_quality"
                  value={1}
                  onClick={this.handleChange}
                />
                <label htmlFor="sleep_quality">1</label>
                <input
                  type="radio"
                  id="2"
                  name="sleep_quality"
                  value={2}
                  onClick={this.handleChange}
                />
                <label htmlFor="sleep_quality">2</label>
                <input
                  type="radio"
                  id="3"
                  name="sleep_quality"
                  value={3}
                  onClick={this.handleChange}
                />
                <label htmlFor="sleep_quality">3</label>
                <input
                  type="radio"
                  id="4"
                  name="sleep_quality"
                  value={4}
                  onClick={this.handleChange}
                />
                <label htmlFor="sleep_quality">4</label>
                <input
                  type="radio"
                  id="5"
                  name="sleep_quality"
                  value={5}
                  onClick={this.handleChange}
                />
                <label htmlFor="sleep_quality">5</label>
              </div>
            </section>
            <br />
            <section className="exercise">
              <h2>Physical</h2>
              <label htmlFor="exercise">Minutes of exercise</label>
              <br />
              <input
                type="text"
                name="exercise"
                id="exercise"
                value={this.state.exercise}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <label htmlFor="exercise_type">Type of exercise</label>
              <br />
              <input
                type="text"
                name="exercise_type"
                id="exercise_type"
                value={this.state.exercise_type}
                onChange={this.handleChange}
              />
              <br />
              <br />

              <label htmlFor="water">Ounces of water consumed</label>
              <br />
              <input
                type="text"
                name="water"
                id="water"
                value={this.state.water}
                onChange={this.handleChange}
              />
            </section>
          </div>
          <br />
          <br />
          <div className="log_section">
            <section className="other">
              <label htmlFor="notes">Additional notes</label>
              <br />
              <textarea
                id="notes"
                name="notes"
                rows="4"
                cols="50"
                placeholder="Anything else you would like to track? Note it here!"
                value={this.state.notes}
                onChange={this.handleChange}
              />
            </section>
          </div>
          <section className="button-section">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </section>
        </form>
      </main>
    );
  }
}
export default Logs;
