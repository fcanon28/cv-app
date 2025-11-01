import "../index.css";
import { useState } from "react";

export default function General({generalInfo, handleSubmit}) {

    
    

    return (
        <div className="form-wrapper">
            <form className="cv-form" onSubmit={handleSubmit}>
                <h2>Personal Information</h2>

                <label>Full Name 
                    <input type="text" name="name" placeholder="Enter your full name"/>
                </label>
                

                <label>Email
                    <input type="email" name="email" placeholder="Enter your email" />
                </label>
                

                <label>Phone Number
                    <input type="text" name="phone" placeholder="Enter your phone number" />
                </label>
                

                <label>Professional Summary
                    <textarea name="summary" placeholder="Briefly describe yourself"></textarea>
                </label>
                

                <button type="submit">Save</button>
            </form>
        </div>
    )
}
