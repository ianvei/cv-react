import React, { Component } from "react";
import Name from "./Name";

export default class BodyContent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="body-content">
                <Name />
                {/* <Summary /> */}
                {/* <Work /> */}
            </div>
        )
    }
}