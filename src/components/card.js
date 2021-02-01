import React from 'react'

function card({name, imgUrl, profileUrl, info}) {
    return (
        <div className="card">
            <div className="imageContainer">
                <img alt='ProfilePicture' src={imgUrl}></img>
                {profileUrl ? <a href={profileUrl} className="profileLink">Visit</a> : null}
            </div>
            <h1 className="purple">{name}</h1>
            <p>{info}</p>
        </div>
    )
}

export default card
