import React from 'react'
import Painting from './components/Painting'
import paintingdata from "./paintingdata"

export default function Art() {
    const paintings = paintingdata.map(item => {
        return (
            <Painting
                key={item.id}
                description={item.description}
                img={item.img}
            />
        )
    })        
    
    return (
        <div>
            <h1 className="painting--title">SELECTED PAINTINGS, 2023</h1>
            <section className="painting-list">
                {paintings}
            </section>
        </div>
    )
}