import { createStore } from 'redux'
import reducer from './reducer'
import { persistStore } from 'redux-persist'


const store = createStore(reducer)
const persistor = persistStore(store)

export {
    store,
    persistor
}