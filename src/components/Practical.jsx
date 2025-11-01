import '../index.css'

export default function Practical() {
    return (
        <div className="form-wrapper">
            <form className="cv-form">
            <h2>Practical Experience</h2>

            <label htmlFor="name">Company name</label>
            <input type="text" id="companyName" placeholder="Enter your company name" />

            <label htmlFor="email">Position/Title</label>
            <input type="email" id="title" placeholder="Enter your position/title" />

            <label htmlFor="phone">Date Employed</label>
            <input type="text" id="dateEmployed" placeholder="Enter date employed" />

            <label htmlFor="summary">Responsibilities</label>
            <textarea id="summary" placeholder="Briefly describe your responsibilities and tasks during this employment"></textarea>

            <button className='add-exp'>✚ Add another employer</button>
            <button type="submit">Save</button>
            </form>

            
        </div>
    )
}