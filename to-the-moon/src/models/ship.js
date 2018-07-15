import React, { Component } from 'react';
import './ship.css'

class Ship extends Component {

    render() {
        return (
            <div className={"ship-frame " 
                + (this.props.entry ? " entering" : "")
                + (this.props.exit ? " exiting" : "")
            }>
                <div className="ship-body">
                    <div className="ship-window" />
                </div>

                <div className="ship-tank" />
                <div className="ship-stabilizer" />
                <div className="ship-stabilizer flipped" />
            </div>
        )
    }
}

export default Ship