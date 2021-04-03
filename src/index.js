import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux'
import { CardSeviceProvider } from './components/card-service-context'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import CardSevice from './card-service'
import "./utilities/shuffleCopy";

import './index.css';

const cardSevice = new CardSevice()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <CardSeviceProvider value={cardSevice}>
        <div>
          <App />
          <button onClick={() => {
            persistor.purge()
          }}>Reset localStorage</button>
        </div>

      </CardSeviceProvider>
    </PersistGate>
  </Provider>

  , document.getElementById('root')
)