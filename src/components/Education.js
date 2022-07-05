import React, { Component } from "react";

export default class Education extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const { educationToRender } = this.props;
        // console.log(linksToRender)

        return(
            <div className="educationcont">
                {educationToRender.map((individualEducation) => {
                    return (
                        <div className="education">
                            <h3>{individualEducation.schoolName}</h3>
                            <p>{individualEducation.educationDate}</p>
                            <p>Major: {individualEducation.major}</p>
                        </div>
                    );
                })}
            </div>
        )
    }
}