import React from 'react'

import './card.css'

const Card = ({ card, open, win, onCardOpened }) => {
    const iconClassName = open ? `${card.className}` : win ? 'win' : ''
    const cardClassName = open || win ? 'rotate' : ''
    const onClick = win || card.disabled? null : onCardOpened
    return (
        <div className={`card ${cardClassName}`}
            onClick={onClick}>
            <i className={`card-icon fa-5x ${iconClassName}`}></i>
        </div>
    )
}

export default Card