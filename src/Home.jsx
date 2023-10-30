import React, { useState } from 'react'
import Confetti from 'react-confetti'

const Home = () => {
    const [isConfettiActive, setConfettiActive] = useState(false);

    const fireConfetti = () => {
        setConfettiActive(true)
        setTimeout(() => {
            setConfettiActive(false)
        }, 4000)
    }

    return (
        <div className="home--content">
            <h2 className="home--title">INGRID NORDBERG</h2>
            <h3>Hi! I'm Ingrid. I'm a designer and artist at Stanford.
                Email me at inord@stanford.edu!
            </h3>
            {isConfettiActive && <Confetti />}
            <button className="confetti--button" onClick={fireConfetti}>CLICK ME</button>
        </div>
    )
}

export default Home