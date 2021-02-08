import React from 'react'

function welcome() {
    return (
        <div className="welcomeContainer">
            <div className="mainLogo">
                <i className="ri-hard-drive-fill icon"></i>
                <p>N Cloud</p>
            </div>
            <a href="http://127.0.0.1:3000/" className="welBtn">
                <i class="ri-arrow-right-s-line"></i>
            </a>
        </div>
    )
}

export default welcome
