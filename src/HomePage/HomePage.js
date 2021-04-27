import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <main className="about">
      <h1 className="title">MyHealthHacker</h1>
      <section>
        <h2>Why Track Your Health Habits?</h2>
        <p>
          Studies show that becoming aware of habits is the first step towards
          changing them. MyHealthHacker will help you to become aware of your
          health habits and track how different behaviors make you feel mentally
          and physically!{" "}
        </p>

        <p>
          Each day, you can track your sleep patterns, your physical activity,
          and mental health. Over time, you will begin to notice patterns and
          correlations between what you did and how you felt. This will allow
          you to adjust your habits to help you feel your best!
        </p>

        <h2>How To Use MyHealthHacker</h2>
        <p>
          <Link to="/signup">Create an account</Link> or{" "}
          <Link to="/login">login</Link> with a demo account to submit your
          first log. You can log in to check, submit and edit your logs any
          time!
        </p>
      </section>
    </main>
  );
}

export default HomePage;
