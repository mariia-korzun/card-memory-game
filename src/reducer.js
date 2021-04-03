import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
    // blackList:['cards']
}

const initialState = {
    cards: null,
    currentGameCards: null,
    loading: true,
    openedCards: [],
    winCards: [],
    compare: false,
    gameWon: false,
    gameLose: false,
    startAnimation: false,
    compareTimeout: null
}

const didWinGame = (winCards, cards) => {
    return winCards.length === cards.length
}

const disableCopyCards = (disable, cards) => {
    let disabledCards = [...cards]
    disabledCards.forEach(card => {
        card.disabled = disable
    })
    return disabledCards
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CARDS_REQUEST': {
            return {
                ...state,
                loading: true
            }
        }
        case 'FETCH_CARDS_SUCCESS': {
            return {
                ...state,
                loading: false,
                cards: action.payload,
                currentGameCards: disableCopyCards(false, action.payload.shuffleCopy())
            }
        }

        case 'START_NEW_GAME': {
            return {
                ...state,
                currentGameCards: state.cards ? disableCopyCards(false, state.cards.shuffleCopy()) : null,
                openedCards: [],
                winCards: [],
                gameWon: false,
                gameLose: false,
                startAnimation: false,
                compare: false
            }
        }

        case 'START_ANIMATION': {
            return {
                ...state,
                startAnimation: true
            }
        }
        case 'STOP_GAME': {
            let won = didWinGame(state.winCards, state.currentGameCards)
            return {
                ...state,
                currentGameCards: null,
                compare: false,
                gameWon: won,
                gameLose: !won,
                startAnimation: false,
                compare: false,
                openedCards: []
            }
        }
        case 'CARD_OPENED': {
            let compare = false
            if (state.openedCards[state.openedCards.length - 1] === action.payload) { return state }
            if (state.openedCards.length % 2 === 1) {
                compare = true
            }

            return {
                ...state,
                openedCards: [...state.openedCards, action.payload],
                compare
            }
        }

        case 'DISABLE_CARDS': {

            return {
                ...state,
                currentGameCards: disableCopyCards(true, state.currentGameCards)
            }
        }
        case 'ENABLE_CARDS': {

            return {
                ...state,
                currentGameCards: disableCopyCards(false, state.currentGameCards)
            }
        }
        case 'SET_COMPARE_TIMEOUT': {

            return {
                ...state,
                compareTimeout: action.payload
            }
        }
        case 'RESET_COMPARE_TIMEOUT': {
            clearTimeout(state.compareTimeout)
            //to avoid re-rendering
            return state
        }
        case 'COMPARE_CARDS': {
            const firstCard = state.currentGameCards.find(card => card.id === state.openedCards[0])
            const secondCard = state.currentGameCards.find(card => card.id === state.openedCards[1])

            let newState = {
                ...state,
                openedCards: [...state.openedCards.slice(2)],
                compare: false
            }

            if (firstCard.className === secondCard.className) {
                newState.winCards = [...state.winCards, firstCard.id, secondCard.id]

                if (didWinGame(newState.winCards, state.currentGameCards)) {
                    newState.gameWon = true
                }
            }


            return newState
        }


        default: return state
    }
}


// export default reducer
export default persistReducer(persistConfig, reducer)