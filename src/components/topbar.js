import React from 'react'

function topbar({openAbout, openHelp, openCredit, openMain, showNIco, showHIco, showAIco, showCIco}) {
    return (
        <div className="topBar">
            {!showNIco ? <i onClick={openMain} class="ri-hard-drive-fill purple"></i> : null}

            {!showHIco ? <i onClick={openHelp} class="ri-questionnaire-fill purple"></i> : null}

            {!showAIco ? <i onClick={openCredit} class="ri-question-fill purple"></i> : null}

            {!showCIco ? <i onClick={openAbout} className="ri-information-fill purple"></i> : null}
        </div>
    )
}

export default topbar
