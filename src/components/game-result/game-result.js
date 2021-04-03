import React from 'react'

import './game-result.css'

const GameResult = ({ text }) => {
    return (
        <div className="game-result">
            <h1 className="title">{text}</h1>
            <p className="subtitle">Let's try again</p>
        </div>
    )
}
export default GameResult