import "../index.css";

export default function General() {
    return (
        <div className="form-wrapper">
            <form className="cv-form">
            <h2>Personal Information</h2>

            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />

            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" placeholder="Enter your phone number" />

            <label htmlFor="summary">Professional Summary</label>
            <textarea id="summary" placeholder="Briefly describe yourself"></textarea>

            <button type="submit">Save</button>
            </form>
        </div>
    )
}
