import "../index.css";
import { useState } from "react";

export default function General({
  handleSubmit,
  isGeneralInfoSaved,
  editGeneralInfo,
  setEditGeneralInfo
}) {


  function handleChange(e) {
    const { name, value } = e.target;
    setEditGeneralInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="form-wrapper">
      <form className="cv-form" onSubmit={handleSubmit}>
        <h2>General Information</h2>

        <label>
          Full Name
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={editGeneralInfo.name || ""}
            onChange={handleChange}
            disabled={isGeneralInfoSaved}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={editGeneralInfo.email || ""}
            onChange={handleChange}
            disabled={isGeneralInfoSaved}
          />
        </label>

        <label>
          Phone Number
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={editGeneralInfo.phone || ""}
            onChange={handleChange}
            disabled={isGeneralInfoSaved}
          />
        </label>

        <label>
          Professional Summary
          <textarea
            name="summary"
            placeholder="Briefly describe yourself"
            value={editGeneralInfo.summary || ""}
            onChange={handleChange}
            disabled={isGeneralInfoSaved}
          ></textarea>
        </label>

        {isGeneralInfoSaved ? (
          <p style={{ color: "#5cb85c" }}>
            General information successfully saved!
          </p>
        ) : (
          <button type="submit">Save</button>
        )}
      </form>
    </div>
  );
}
