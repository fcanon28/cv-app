import '../index.css'

export default function Education() {
    return (
        <div className="form-wrapper">
            <form className="cv-form">
            <h2>Education</h2>

            <label htmlFor="name">University</label>
            <input type="text" id="school" placeholder="Enter your school/university name" />

            <label htmlFor="email">College Program</label>
            <input type="email" id="program" placeholder="Enter your title of study" />

            <label htmlFor="phone">Date Graduated</label>
            <input type="text" id="dateGraduated" placeholder="Enter your graduation date" />

            <label htmlFor="summary">Notable Academic Achievement</label>
            <textarea id="academic" placeholder="Briefly describe notable academic achievement(s)"></textarea>

            <button type="submit">Save</button>
            </form>
        </div>
    )
}