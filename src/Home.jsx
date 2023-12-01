import React, { useState } from 'react'
import Card from './components/Card'
import Confetti from 'react-confetti'
import data from './data'

const Home = () => {
    const [isConfettiActive, setConfettiActive] = useState(false);

    const fireConfetti = () => {
        setConfettiActive(true)
        setTimeout(() => {
            setConfettiActive(false)
        }, 4000)
    }

    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                description={item.description}
                title={item.title}
                img={item.img}
            />
        )
    })


    return (
        <div className="home--content">
            <h1 className="home--title">INGRID NORDBERG</h1>
            <div className="home--bio">
                <h3>Hi! I'm Ingrid.
                </h3>
                <p>I'm studying Design, CS, and Art at Stanford in the class of 2025.
                    I'm interested in building products and experiences that spark behavior change
                    and bring people together. 
                    Email me at inord@stanford.edu!</p>
                {isConfettiActive && <Confetti />}
            </div>
            <h3 className="home--experiences">Selected Experiences</h3>
            <section className="card--list">
                {cards}
            </section>
            <h3 className="home--linkedin">
                <a href="https://www.linkedin.com/in/ingridnordberg/" className="link">Learn more</a>
            </h3>
        </div>
    )
}

export default Home