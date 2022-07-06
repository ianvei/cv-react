import React, { Component } from "react";

export default class Name extends Component {
    constructor() {
        super()

        this.state = {
            nameIsActive: false,
            nameText: 'BOB CODER',
            jobTitle: 'Software Engineer',
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // openForm = () => {
    //     this.setState({
    //         isActive: true
    //     })
    // }

    openName = () => {
        console.log('hello')
        this.setState({
            nameIsActive: true
        })
    }

    closeName = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.setState({
            nameIsActive: false
        })
    }

    // closeForm = () => {
    //     this.setState({
    //         isActive: false
    //     })
    //     // console.log('printing')
    // }
    

    render() {

       const { nameText, jobTitle, nameIsActive } = this.state;

        return (
                <div className="name-cont" onClick={this.openName}>

                    {/* <button onClick={this.openName} className="edit-name-btn">Edit</button> */}
                        <form action="" className={nameIsActive ? "name-is-visible" : 'hidden'}>
                            <button className="nameClose" onClick={this.closeName}>Close</button>
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
                        <h1 className='nameTitle'>{nameText}</h1>
                        <h4>{jobTitle}</h4>
                </div>
        )
    }
}