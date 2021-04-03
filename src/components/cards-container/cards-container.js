import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { withCardService } from '../hoc'
import { compose } from '../../utilities'
import { fetchCards, onCardOpened, compareCards, enableCards, disableCards, startCompareCards } from '../../actions'
import Card from '../card'
import Spinner from '../spinner'
import GameResult from '../game-result'
import ProgressIndecator from '../progress-indecator'

import './cards-container.css'


const CardsContainer = ({ cards, currentGameCards, fetchCards, loading, openedCards,
    winCards, onCardOpened, compare, startCompareCards, gameWon, gameLose, OnDisableCards,
    resetCompareTimeout }) => {


    useEffect(() => {
        if (!cards) {
            fetchCards()
        }

    }, [])

    useEffect(() => {
        if (compare) {
            OnDisableCards()
            startCompareCards()
        }
    }, [compare])

    if (gameWon) { return <GameResult text="You Won!!!" /> }
    if (gameLose) { return <GameResult text="You Lose!!!" /> }
    if (loading) { return <Spinner /> }

    return (
        <Fragment>
            <ProgressIndecator />
            <div className="cards-container">
                {currentGameCards.map((card, cardIndex) => {
                    const { id: cardId } = card
                    let open = false
                    let win = false
                    if (openedCards.length > 0 && openedCards.some(id => id == cardId)) { open = true }
                    if (winCards.length > 0 && winCards.some(id => id == cardId)) { win = true }
                    return (
                        //here is nessecary use cardIndex istead cardId because cards come randomly
                        //to see animation on appropriate card (reconciliation)
                        <Card key={cardIndex} card={card} open={open} win={win} onCardOpened={() => { onCardOpened(cardId) }} />
                    )
                })}
            </div>
        </Fragment>
    )

}


const mapStateToProps = (state) => {
    return { ...state }
}

const mapDispatchToProps = (dispatch, { cardService }) => {
    return {
        fetchCards: fetchCards(dispatch, cardService),
        onCardOpened: (id) => { dispatch(onCardOpened(id)) },
        startCompareCards: startCompareCards(dispatch),
        OnDisableCards: () => { dispatch(disableCards()) }
    }
}


export default compose(
    withCardService,
    connect(mapStateToProps, mapDispatchToProps)
)(CardsContainer)

