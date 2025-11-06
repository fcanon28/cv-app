import { useEffect, useState } from "react";
import "../styles/index.css";
import PracticalExp from "./PracticalExp";

export default function Practical({
  handleSubmit,
  setPracticalInfo,
  isPracticalInfoSaved,
  setIsPracticalInfoSaved,
}) {
  const [experiences, setExperiences] = useState([
    {
      companyName: "",
      title: "",
      dateEmployed: "",
      summary: "",
    },
  ]);

  function handleAddEmployer() {
    setExperiences((prev) => [
      ...prev,
      { companyName: "", title: "", dateEmployed: "", summary: "" },
    ]);
  }

  function handleChange(index, field, value) {
    setExperiences((prev) => {
      const updated = [...prev];
      updated[index][field] = value;
      return updated;
    });
  }

  function handlePracticalSubmit(e) {
    e.preventDefault();
    setPracticalInfo(experiences);
    setIsPracticalInfoSaved(true);
    // handleSubmit(e)
  }

  return (
    <div className="form-wrapper">
      <form className="cv-form" onSubmit={handlePracticalSubmit}>
        <h2>Practical Experience</h2>
        {experiences.map((exp, index) => (
          <PracticalExp
            key={index}
            index={index}
            data={exp}
            onChange={handleChange}
            isDisabled={isPracticalInfoSaved}
          />
        ))}

        {isPracticalInfoSaved ? (
          <p style={{ color: "#5cb85c" }}>
            Educational information successfully saved!
          </p>
        ) : (
          <>
            <button
              type="button"
              className="add-exp"
              onClick={handleAddEmployer}
            >
              ✚ Add another employer
            </button>
            <button type="submit">Save</button>
          </>
        )}
      </form>
    </div>
  );
}
