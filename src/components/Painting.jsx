import React from 'react'

export default function Painting(props) {
    return (
        <div className="painting">
            <img src={`/assets/${props.img}`} className="painting--image" />
            <p className="painting--description">{props.description}</p>
        </div>
    )
}