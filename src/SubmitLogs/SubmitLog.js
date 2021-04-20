import React from "react";
import "./SubmitLog.css";

class Logs extends React.Component {
  render() {
    return (
      <main className="new_log">
        <h2>Submit Log:</h2>
        <form>
          <section>
            <label for="date">Current Date</label>
            <input type="date" id="date" name="date" />
          </section>
          <br />

          <div className="log_section">
            <section className="mental">
              <h2>Psychological</h2>
              <div className="mood_rating">
                <h3>Mood Rating</h3>
                <h3>Rate your mood out of 5</h3>
                <input type="radio" id="1" name="mood" value="1" />
                <label for="mood">1</label>
                <input type="radio" id="2" name="mood" value="2" />
                <label for="mood">2</label>
                <input type="radio" id="3" name="mood" value="3" />
                <label for="mood">3</label>
                <input type="radio" id="4" name="mood" value="4" />
                <label for="mood">4</label>
                <input type="radio" id="5" name="mood" value="5" />
                <label for="mood">5</label>
              </div>
              <div className="stress">
                <h2>Stress Level</h2>
                <h3>Rate your stress level with 5 being the most stressed</h3>
                <input type="radio" id="1" name="stress" value="1" />
                <label for="stress">1</label>
                <input type="radio" id="2" name="stress" value="2" />
                <label for="stress">2</label>
                <input type="radio" id="3" name="stress" value="3" />
                <label for="stress">3</label>
                <input type="radio" id="4" name="stress" value="4" />
                <label for="stress">4</label>
                <input type="radio" id="5" name="stress" value="5" />
                <label for="stress">5</label>
              </div>
            </section>
            <section className="sleep">
              <h2>Sleep</h2>
              <label for="sleep">Hours slept</label>
              <br />
              <input type="text" name="sleep_hours" id="sleep_hours" />
              <div>
                <h3>Sleep quality</h3>
                <input type="radio" id="1" name="sleep_quality" value="1" />
                <label for="sleep_quality">1</label>
                <input type="radio" id="2" name="sleep_quality" value="2" />
                <label for="sleep_quality">2</label>
                <input type="radio" id="3" name="sleep_quality" value="3" />
                <label for="sleep_quality">3</label>
                <input type="radio" id="4" name="sleep_quality" value="4" />
                <label for="sleep_quality">4</label>
                <input type="radio" id="5" name="sleep_quality" value="5" />
                <label for="sleep_quality">5</label>
              </div>
            </section>
            <br />
            <section className="exercise">
              <h2>Physical</h2>
              <label for="exercise">Minutes of exercise</label>
              <br />
              <input type="text" name="exercise" id="exercise" />
              <br />
              <br />
              <label for="exercise_type">Type of exercise</label>
              <br />
              <input type="text" name="exercise_type" id="exercise_type" />
              <br />
              <br />

              <label for="water">Ounces of water consumed</label>
              <br />
              <input type="text" name="water" id="water" />
            </section>
          </div>
          <br />
          <br />
          <div className="log_section">
            <section className="other">
              <label for="notes">Additional notes</label>
              <br />
              <textarea id="notes" name="notes" rows="4" cols="50">
                Anything else you would like to track? Note it here!
              </textarea>
            </section>
          </div>
          <section class="button-section">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </section>
        </form>
      </main>
    );
  }
}
export default Logs;
