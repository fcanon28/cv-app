import { useState } from "react";
import "./index.css";
import General from "./components/General";
import Education from "./components/Education";
import Practical from "./components/Practical";
import CVResult from "./components/CVResult";

function App() {
  const [generalInfo, setGeneralInfo] = useState("");
  const [isGeneralInfoSaved, setIsGeneralInfoSaved] = useState(false);
  const [editGeneralInfo, setEditGeneralInfo] = useState("");
  const [educationalInfo, setEducationalInfo] = useState("");
  const [isEducationalInfoSaved, setIsEducationalInfoSaved] = useState(false);
  const [editEducationalInfo, setEditEducationalInfo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    setGeneralInfo(formJson);
    setIsGeneralInfoSaved(true);
  }

  function handleGenInfoEdit(e) {
    setIsGeneralInfoSaved(false);
    setEditGeneralInfo(generalInfo);
  }

  function handleEducationSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());
    setEducationalInfo(formJson);
    setIsEducationalInfoSaved(true);
  }

  function handleEducationalInfoEdit(e) {
    setIsEducationalInfoSaved(false);
    setEditEducationalInfo(educationalInfo);
  }

  return (
    <>
      <h1>CV Generator</h1>
      <div className="main-container">
        <div className="main-sections left">
          <General
            handleSubmit={handleSubmit}
            isGeneralInfoSaved={isGeneralInfoSaved}
            editGeneralInfo={editGeneralInfo}
            setEditGeneralInfo={setEditGeneralInfo}
          />
          <Education
            handleSubmit={handleEducationSubmit}
            isEducationalInfoSaved={isEducationalInfoSaved}
            editEducationalInfo={editEducationalInfo}
            setEditEducationalInfo={setEditEducationalInfo}
          />
          <Practical />
        </div>

        <div className="main-sections right">
          <CVResult
            generalInfo={generalInfo}
            handleGenInfoEdit={handleGenInfoEdit}
            educationalInfo={educationalInfo}
            handleEducationalInfoEdit={handleEducationalInfoEdit}
          />
        </div>
      </div>
    </>
  );
}

export default App;
