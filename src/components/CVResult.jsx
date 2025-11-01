import '../index.css'
import { FaEdit } from "react-icons/fa";

export default function CVResult({ generalInfo, handleEdit }) {

    return (
        <div className='cv'>
            {generalInfo.name ? (
                <>
                    <h2>{generalInfo.name}</h2>
                    <p>{generalInfo.email} | {generalInfo.phone}</p>
                    <p>{generalInfo.summary}</p>
                    <button type='edit' name='edit' onClick={handleEdit}><FaEdit /></button>
                </>

            ) : (<p>Generating your CV...</p>)}

        </div>
    )
}