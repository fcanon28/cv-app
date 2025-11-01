import '../index.css'

export default function CVResult({ generalInfo }) {
    console.log('in CV result..', generalInfo)
    return (
        <div className='cv'>
            {generalInfo.name ? (<><h2>{generalInfo.name}</h2>
                <p>{generalInfo.email} | {generalInfo.phone}</p>
                <p>{generalInfo.summary}</p></>
            ) : (<p>Generating your CV...</p>)}
        </div>
    )
}