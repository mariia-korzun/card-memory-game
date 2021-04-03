import React from 'react'
import { withRouter } from 'react-router-dom'

import './new-game-button.css'


const NewGameButton = ({ history, onStartGame, redirect, resetCompareTimeout }) => {
    return (
        <div className='start-button-container'>
            <button onClick={() => {
                resetCompareTimeout()
                onStartGame()
                if (redirect) { history.push('/gameplay') } }}
                className="start-button">
                New Game
            </button>
        </div>
    )
}

export default withRouter(NewGameButton)

