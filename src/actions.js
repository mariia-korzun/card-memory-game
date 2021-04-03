
const cardsRequested = () => {
    return {
        type: 'FETCH_CARDS_REQUEST'
    }
}

const cardsLoaded = (cards) => {
    return {
        type: 'FETCH_CARDS_SUCCESS',
        payload: cards
    }
}

const onCardOpened = (id) => {
    return {
        type: 'CARD_OPENED',
        payload: id
    }
}


const compareCards = () => {
    return {
        type: 'COMPARE_CARDS'
    }
}

const disableCards = () => {
    return {
        type: 'DISABLE_CARDS'
    }
}
const enableCards = () => {
    return {
        type: 'ENABLE_CARDS'
    }
}

const startNewGame = () => {
    return {
        type: 'START_NEW_GAME'
    }
}

const startAnimation = () => {
    return {
        type: 'START_ANIMATION'
    }
}

const stopGame = () => {
    return {
        type: 'STOP_GAME'
    }
}


const fetchCards = (dispatch, cardService) => () => {
    dispatch(cardsRequested())
    cardService.fetchCards()
        .then(cards => {
            dispatch(cardsLoaded(cards))
        })
}

const setCompareTimeout = (timer) => {
    return {
        type: 'SET_COMPARE_TIMEOUT',
        payload: timer
    }
}


const resetCompareTimeout = () => {
    return {
        type: 'RESET_COMPARE_TIMEOUT'
    }
}

const startCompareCards = (dispatch) => () => {
    dispatch(
        setCompareTimeout(
            setTimeout(() => {
                console.log("compare")
                dispatch(compareCards())
                dispatch(enableCards())
            }, 700)
        )
    )
}

export {
    cardsRequested,
    fetchCards,
    onCardOpened,
    startNewGame,
    startAnimation,
    stopGame,
    disableCards,
    startCompareCards,
    resetCompareTimeout
}