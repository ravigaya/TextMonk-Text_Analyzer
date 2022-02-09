import React from 'react';
import 'tachyons';
import './cards.css'

export default function cards(props) {
    return (
        <div className='cards pa3 tc bg-light-green dib br3 pa3 ma2 grow bw2 mw-30'>
            <div className='mw-50'>

            <img src={`https://robohash.org/${props.id}?50x50`} alt="cartonpics"></img>

            </div>

            <div className='tc tl'>
                <h2>{props.name}</h2>
                <h3>{props.email}</h3>
                <p>{props.email}   
                  </p>
            </div>
        </div>
    )
}
