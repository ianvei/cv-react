import React, { Component } from "react";

export default class Name extends Component {
    constructor() {
        super()

        this.state = {
            nameText: '',
            jobTitle: '',
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

       const { nameText, jobTitle, isActive } = this.state;

        return(
            <div className="name-cont">
                <button onClick={this.openForm} className="edit-name-btn">Edit</button>
                <form action="" className={isActive ? "name-form-visible" : 'hidden'}>
                    <button className="nameClose" onClick={this.closeForm}>Close</button>
                    <label htmlFor="nameText">Enter your name</label>
                        <input
                            onChange={(e) => this.onChange(e)}
                            value={nameText}
                            name='nameText'
                            type="text"
                        />
                    <label htmlFor="jobTitle">Enter your job title</label>
                        <input
                            onChange={(e) => this.onChange(e)}
                            value={jobTitle}
                            name='jobTitle'
                            type="text"
                        />
                </form> 
                <h1>{nameText}</h1>
                <h4>{jobTitle}</h4>
            </div>
        )
    }
}