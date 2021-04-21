import React from "react";

class LogInputForm extends React.Component {
  static defaultProps = {
    water: "",
    exercise_minutes: "",
  };
  render() {
    console.log("this.props", this.props);
    return (
      <form onSubmit={this.props.handleSubmitLog}>
        <section>
          <label htmlFor="date">Current Date</label>
          <input
            type="date"
            id="log_date"
            name="log_date"
            value={this.props.log_date}
            onChange={this.props.handleChange}
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
                onChange={this.props.handleChange}
              />
              <label htmlFor="mood">1</label>
              <input
                type="radio"
                id="2"
                name="mood"
                value={2}
                onChange={this.props.handleChange}
              />
              <label htmlFor="mood">2</label>
              <input
                type="radio"
                id="3"
                name="mood"
                value={3}
                onChange={this.props.handleChange}
              />
              <label htmlFor="mood">3</label>
              <input
                type="radio"
                id="4"
                name="mood"
                value={4}
                onChange={this.props.handleChange}
              />
              <label htmlFor="mood">4</label>
              <input
                type="radio"
                id="5"
                name="mood"
                value={5}
                onChange={this.props.handleChange}
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
                checked={this.props.stress === 1}
                onChange={this.props.handleChange}
              />
              <label htmlFor="stress">1</label>
              <input
                type="radio"
                id="2"
                name="stress"
                value={2}
                checked={this.props.stress === 2}
                onChange={this.props.handleChange}
              />
              <label htmlFor="stress">2</label>
              <input
                type="radio"
                id="3"
                name="stress"
                value={3}
                checked={this.props.stress === 3}
                onChange={this.props.handleChange}
              />
              <label htmlFor="stress">3</label>
              <input
                type="radio"
                id="4"
                name="stress"
                value={4}
                checked={this.props.stress === 4}
                onChange={this.props.handleChange}
              />
              <label htmlFor="stress">4</label>
              <input
                type="radio"
                id="5"
                name="stress"
                value={5}
                checked={this.props.stress === 5}
                onChange={this.props.handleChange}
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
              value={this.props.sleep_hours}
              onChange={this.props.handleChange}
            />
            <div>
              <h3>Sleep quality</h3>
              <input
                type="radio"
                id="1"
                name="sleep_quality"
                value={1}
                onChange={this.props.handleChange}
              />
              <label htmlFor="sleep_quality">1</label>
              <input
                type="radio"
                id="2"
                name="sleep_quality"
                value={2}
                onChange={this.props.handleChange}
              />
              <label htmlFor="sleep_quality">2</label>
              <input
                type="radio"
                id="3"
                name="sleep_quality"
                value={3}
                onChange={this.props.handleChange}
              />
              <label htmlFor="sleep_quality">3</label>
              <input
                type="radio"
                id="4"
                name="sleep_quality"
                value={4}
                onChange={this.props.handleChange}
              />
              <label htmlFor="sleep_quality">4</label>
              <input
                type="radio"
                id="5"
                name="sleep_quality"
                value={5}
                onChange={this.props.handleChange}
              />
              <label htmlFor="sleep_quality">5</label>
            </div>
          </section>
          <br />
          <section className="exercise">
            <h2>Physical</h2>
            <label htmlFor="exercise_minutes">Minutes of exercise</label>
            <br />
            <input
              type="number"
              name="exercise_minutes"
              id="exercise_minutes"
              value={this.props.exercise_minutes || ""}
              onChange={this.props.handleChange}
            />
            <br />
            <br />
            <label htmlFor="exercise_type">Type of exercise</label>
            <br />
            <input
              type="text"
              name="exercise_type"
              id="exercise_type"
              value={this.props.exercise_type}
              onChange={this.props.handleChange}
            />
            <br />
            <br />

            <label htmlFor="water">Ounces of water consumed</label>
            <br />
            <input
              type="text"
              name="water"
              id="water"
              value={this.props.water}
              onChange={this.props.handleChange}
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
              value={this.props.notes}
              onChange={this.props.handleChange}
            />
          </section>
        </div>
        <section className="button-section">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </section>
      </form>
    );
  }
}

export default LogInputForm;
