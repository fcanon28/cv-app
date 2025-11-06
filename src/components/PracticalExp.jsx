import "../styles/index.css";

export default function PracticalExp({ index, data, onChange, isDisabled }) {
  function handleInput(e) {
    onChange(index, e.target.name, e.target.value);
  }

  return (
    <>
      <label>
        Company name
        <input  
          type="text"
          name="companyName"
          value={data.companyName}
          onChange={handleInput}
          placeholder="Enter your company name"
          disabled={isDisabled}
        />
      </label>
      <label>
        Position/Title
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleInput}
          placeholder="Enter your position/title"
          disabled={isDisabled}
        />
      </label>
      <label>
        Date Employed
        <input
          type="text"
          name="dateEmployed"
          value={data.dateEmployed}
          onChange={handleInput}
          placeholder="Enter date employed"
          disabled={isDisabled}
        />
      </label>
      <label>
        Responsibilities
        <textarea
          name="summary"
          value={data.summary}
          onChange={handleInput}
          placeholder="Briefly describe your responsibilities and tasks during this employment"
          disabled={isDisabled}
        ></textarea>
      </label>
    </>
  );
}
