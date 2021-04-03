import React from 'react'
import { connect } from 'react-redux'
import CardsContainer from '../cards-container'
import Header from '../header'
import NewGameButton from '../new-game-button'
import { startNewGame, resetCompareTimeout } from '../../actions'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './app.css'


const App = ({ startNewGame, resetCompareTimeout }) => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => {
                    return (
                        <div>
                            <Header />
                            <NewGameButton
                                resetCompareTimeout={resetCompareTimeout}
                                onStartGame={startNewGame} redirect={true} />
                        </div>
                    )
                }} />
                <Route path="/gameplay" render={() => {
                    return (
                        <div>
                            <CardsContainer />
                            <NewGameButton
                                resetCompareTimeout={resetCompareTimeout}
                                onStartGame={startNewGame} redirect={false} />
                        </div>
                    )
                }} />

                <Redirect to="/" />
            </Switch>
        </Router>)

}


export default connect(null, { startNewGame, resetCompareTimeout })(App)

