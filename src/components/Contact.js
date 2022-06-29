import React, { Component } from "react";

export default class Contact extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const { linksToRender } = this.props;
        // console.log(linksToRender)

        return(
            <div className="contact">
                {linksToRender.map((link) => {
                    return <p>{link}</p>;
                })}
            </div>
        )
    }
}