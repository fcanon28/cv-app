import "../index.css";
import { FaEdit } from "react-icons/fa";

export default function CVResult({
  generalInfo,
  handleGenInfoEdit,
  educationalInfo,
  handleEducationalInfoEdit
}) {
  return (
    <div className="cv">
      {generalInfo.name ? (
        <>
          <h2>{generalInfo.name}</h2>
          <p>
            {generalInfo.email} | {generalInfo.phone}
          </p>
          <p>{generalInfo.summary}</p>
          <button type="edit" name="edit" onClick={handleGenInfoEdit}>
            <FaEdit />
          </button>
        </>
      ) : (
        <p>Generating your CV...</p>
      )}

      {educationalInfo.school && (
        <section>
          <h3>Education</h3>
          <div className="cv-education">
            <p>{educationalInfo.program}</p>
            <p>
              {educationalInfo.school} | {educationalInfo.dateGraduated}
            </p>
            <p>{educationalInfo.academic}</p>
            <button
              type="button"
              name="edit"
              onClick={handleEducationalInfoEdit}
            >
              <FaEdit />
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
