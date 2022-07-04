import React, { Component } from "react";

export default class Skills extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const { skillsToRender } = this.props;
        // console.log(linksToRender)

        return(
            <div className="contact">
                {skillsToRender.map((individualSkill) => {
                    return <p>{individualSkill.skill}</p>;
                })}
            </div>
        )
    }
}