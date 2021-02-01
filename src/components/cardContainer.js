import React from 'react'
import Card from './card'

import suvrojit from '../img/suvrojit.jpg'
import sujoy from '../img/sujoy.jpg'

function cardContainer() {
    return (
        <div className="cardContainer">
            <Card name="Sourav Gain" 
                imgUrl='https://avatars.githubusercontent.com/u/46811948?s=460&u=0a0c6dc32c4688f1b427bf95cb23aec9c6e280fe&v=4'
                info='I am just a normal person.' 
                profileUrl='https://github.com/epicX67'
            />
            <Card name="Indrajit Sarkar" 
                imgUrl='https://avatars.githubusercontent.com/u/26569495?s=460&u=9ef0d0c1fcacafa8b90901986d0bf628d95d0bfb&v=4'
                info='Wrapping my head around on different things.' 
                profileUrl='https://github.com/DNI9'
            />
            <Card name="Suvrojit Saha" 
                imgUrl={suvrojit} 
                info='Acting is moi passion'
                />
            <Card name="Sujoy Saha" 
                imgUrl={sujoy}
                info='I lob fast food'
                />
            
            {/* {<Card name="Indrajit Sarkar" />
            <Card name="Suvrojit Saha" />
            <Card name="Sujoy Saha" />} */}
        </div>
    )
}

export default cardContainer
