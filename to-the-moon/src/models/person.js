import React, { Component } from 'react';
import './people.css'

class Person extends Component {

    render() {
        return (
            <div className={"person-frame " 
                + (this.props.girl ? "girl" : "boy")
                + (this.props.entry ? " entering" : "")
                + (this.props.exit ? " exiting": "")
                + (this.props.facing ? " facing" : "")
                + (this.props.jumping ? " jumping" : "")
            }>
                <div className="head">
                    <div className="hair">
                    </div>
                    {
                        this.props.girl && 
                            <div className="ponytail">
                                <div className="hanging">
                                </div>
                            </div>
                    }
                </div>
                {/* <div className="arm">
                    </div> */}
                <div className="body">
                   
                    
                </div>
                <div className={
                    "arm"
                    + (this.props.holdingHands ? " holding" : "")
                }>
                    </div>
                <div className="legs">
                    <div className="leg">
                    </div>
                    <div className="leg reverse">
                    </div>
                </div>
            </div>
        )
    }
}

export default Person