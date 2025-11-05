import "../index.css";

export default function PracticalExp() {
  return (
    <>
      <label>
        Company name
        <input
          type="text"
          name="companyName"
          placeholder="Enter your company name"
        />
      </label>
      <label>
        Position/Title
        <input
          type="text"
          name="title"
          placeholder="Enter your position/title"
        />
      </label>
      <label>
        Date Employed
        <input
          type="text"
          name="dateEmployed"
          placeholder="Enter date employed"
        />
      </label>
      <label>
        Responsibilities
        <textarea
          name="summary"
          placeholder="Briefly describe your responsibilities and tasks during this employment"
        ></textarea>
      </label>
    </>
  );
}
