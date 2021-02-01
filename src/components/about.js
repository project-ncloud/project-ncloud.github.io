import React from 'react'
import Card from './card'
import CardContainer from './cardContainer'


function about() {
    return (
        <div className="container">
            <h1 className="purple" style={{marginTop:100}}>About us</h1>

            <CardContainer />
        </div>
    )
}

export default about
