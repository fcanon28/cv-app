import "../styles/index.css";

export default function Education({
  handleSubmit,
  isEducationalInfoSaved,
  editEducationalInfo,
  setEditEducationalInfo,
}) {
  function handleChange(e) {
    const { name, value } = e.target;
    setEditEducationalInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div className="form-wrapper">
      <form className="cv-form" onSubmit={handleSubmit}>
        <h2>Education</h2>

        <label>
          University
          <input
            type="text"
            name="school"
            placeholder="Enter your school/university name"
            value={editEducationalInfo.school || ""}
            onChange={handleChange}
            disabled={isEducationalInfoSaved}
          />
        </label>

        <label>
          College Program
          <input
            type="text"
            name="program"
            placeholder="Enter your title of study"
            value={editEducationalInfo.program || ""}
            onChange={handleChange}
            disabled={isEducationalInfoSaved}
          />
        </label>

        <label>
          Date Graduated
          <input
            type="text"
            name="dateGraduated"
            placeholder="Enter your graduation date"
            value={editEducationalInfo.dateGraduated || ""}
            onChange={handleChange}
            disabled={isEducationalInfoSaved}
          />
        </label>
        <label>
          Notable Academic Achievement
          <textarea
            name="academic"
            placeholder="Briefly describe notable academic achievement(s)"
            value={editEducationalInfo.academic || ""}
            onChange={handleChange}
            disabled={isEducationalInfoSaved}
          ></textarea>
        </label>
        {isEducationalInfoSaved ? (
          <p style={{ color: "#5cb85c" }}>
            Educational information successfully saved!
          </p>
        ) : (
          <button type="submit">Save</button>
        )}
      </form>
    </div>
  );
}
