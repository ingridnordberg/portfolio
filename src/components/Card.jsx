import React from 'react'

export default function Card(props) {
    return (
        <div className="card">
            <img src={`/projectassets/${props.img}`} className="card--image" />
            <p className="card--title">{props.title}</p>
            <p className="card--description">{props.description}</p>
        </div>
    )
}