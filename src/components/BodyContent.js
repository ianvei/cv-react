import React, { Component } from "react";
import Name from "./Name";
import Summary from "./Summary";
import Work from "./Work";
import Volunteer from "./Volunteer";

export default class BodyContent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="body-content">
                <Name />
                <Summary />
                <Work />
                <Volunteer />
            </div>
        )
    }
}