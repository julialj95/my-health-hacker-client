import React, { useState, useEffect } from "react";
import LogInputForm from "../LogInputForm";
import config from "../config";
import TokenService from "../services/token-service";

function EditLog() {
  const [formData, setFormData] = useState({
    id: "",
    log_date: "",
    stress: "",
    mood: "",
    sleep_quality: "",
    sleep_hours: "",
    exercise_minutes: "",
    exercise_type: "",
    water: "",
    notes: "",
  });

  useEffect(() => {
    const { id } = this.props;

    fetch(config.API_BASE_URL + `/logs/${id}`, {
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
        setFormData({
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
      })
      .catch((error) => console.error({ error }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <LogInputForm
        handleChange={handleChange}
        id={formData.id}
        key={formData.id}
        stress={formData.stress}
        mood={formData.mood}
        log_date={formData.log_date}
        sleep_hours={formData.sleep_hours}
        sleep_quality={formData.sleep_quality}
        exercise_minutes={formData.exercise_minutes}
        exercise_type={formData.exercise_type}
        water={formData.water}
        notes={formData.notes}
      />
    </>
  );
}

export default EditLog;
