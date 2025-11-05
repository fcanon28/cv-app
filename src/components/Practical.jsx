import { useState } from "react";
import "../index.css";
import PracticalExp from "./PracticalExp";

export default function Practical() {
  const [expCount, setExpCount] = useState(1);
  function handleAddEmployer(e) {
    e.preventDefault();
    setExpCount((prev) => prev + 1);
  }
  let experiences = [];
  for (let i = 0; i < expCount; i++) {
    experiences.push(<PracticalExp key={i} />);
  }

  return (
    <div className="form-wrapper">
      <form className="cv-form">
        <h2>Practical Experience</h2>
        {experiences}

        <button className="add-exp" onClick={handleAddEmployer}>
          ✚ Add another employer
        </button>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
