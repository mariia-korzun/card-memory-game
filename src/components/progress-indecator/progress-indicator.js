import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import { startAnimation, stopGame, resetCompareTimeout } from '../../actions'

import './progress-indicator.css'

class ProgressIndecator extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.onStartAnimation()
    }

    componentDidUpdate() {
        if (!this.props.startAnimation) {
            this.props.onStartAnimation()
        }
    }

    render() {
        return (
            <div>
                <CSSTransition in={this.props.startAnimation}
                    timeout={20000} classNames="progress-indicator"
                    onEntered={() => {
                        this.props.resetCompareTimeout()
                        this.props.onStopGame()
                    }}>
                    <div className="progress-indicator"></div>
                </CSSTransition>
            </div >

        )
    }
}

const mapStateToProps = ({ startAnimation }) => {
    return { startAnimation }
}

export default connect(mapStateToProps,
    {
    onStartAnimation: startAnimation,
    onStopGame: stopGame,
    resetCompareTimeout
})(ProgressIndecator)


