import React from "react";
import "./Logs.css";

class Logs extends React.Component {
  render() {
    return (
      <div className="about">
        <h1>My Logs</h1>
        <section className="log_record long">
          <h2 className="title_row">04/16/21</h2>
          <div className="top_section">
            <div className="log_section">
              <p>Stress Level: 2/5</p>
              <p>Mood: 4/5</p>
            </div>
            <div className="log_section">
              <p>Hours slept: 7.5</p>
              <p>Sleep Quality: 4/5</p>
            </div>
            <div className="log_section">
              <p>Minutes of Exercise: 45</p>
              <p>Type of Exercise: Walking</p>
              <p>Ounces of water consumed: 70</p>
            </div>
          </div>
          <p>
            Notes: -Avoided using phone before bed and I think it really helped
            my sleep.{" "}
          </p>
          <button>Edit</button>
          <button>Delete</button>
        </section>
        <section className="log_record short">
          <h2>04/15/21</h2>
          <p></p>
          <button>View Log</button>
        </section>
        <section className="log_record short">
          <h2>04/14/21</h2>
          <p></p>
          <button>View Log</button>
        </section>
        <section className="log_record short">
          <h2>04/13/21</h2>
          <p></p>
          <button>View Log</button>
        </section>
        <section className="log_record short">
          <h2>04/12/21</h2>
          <p></p>
          <button>View Log</button>
        </section>
      </div>
    );
  }
}
export default Logs;
