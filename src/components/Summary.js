import React, { Component } from "react";

export default class Summary extends Component {
    constructor() {
        super()

        this.state = {
            textArea: 'Creative, detail-oriented, software engineer with a deep interest in AI. Proven track record of creating and implementing successful front and back end web applications. Looking to bring my skills to a tech company with global reach.',
            isActive: false,
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    openForm = () => {
        this.setState({
            isActive: true
        })
    }

    closeForm = (e) => {
        e.preventDefault();
        this.setState({
            isActive: false
        })
    }

    render() {

       const { textArea, isActive } = this.state;

        return(
            <div className="summary-cont">
                <button onClick={this.openForm} className="edit-summary-btn">Edit</button>
                <form action="" className={isActive ? "summary-form-visible" : 'hidden'}>
                    <button className="summaryClose" onClick={this.closeForm}>Close</button>
                    <label htmlFor="textArea">Enter your name</label>
                        {/* <input
                            className="textArea"
                            rows='4'
                            cols='50'
                            onChange={(e) => this.onChange(e)}
                            value={textArea}
                            name='textArea'
                            type="textarea"
                        /> */}
                        <textarea name="textArea" className="textArea" onChange={(e) => this.onChange(e)} value={textArea} id="" cols="30" rows="10"></textarea>
                </form> 
                <h1>SUMMARY</h1>
                <p className="summaryText">{textArea}</p>
            </div>
        )
    }
}