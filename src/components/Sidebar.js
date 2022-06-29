import React, { Component } from "react";
import Contact from "./Contact";

export default class Sidebar extends Component {
    constructor() {
        super()

        this.state = {
            phone: '',
            email: '',
            link: '',
            links: [],
        }
    }

    onChange = e => {
        console.log(e.target.value)
        this.setState({
           [e.target.name]: e.target.value,
        });
    };

    onSubmitLinks = e => {
       
        e.preventDefault();
        // console.log(this.state.link);
        this.setState({
            links : [...this.state.links, this.state.link, this.state.phone, this.state.email],
            phone: '',
            email: '',
            link: '',
        });

        // console.log(this.state.links)
    }

    render() {
        const { phone, email, link, links } = this.state;
        return(
            <div className="sidebar">
                <div className="contact-form">
                    <form onSubmit={this.onSubmitLinks}>
                        <div className="first-division">
                            <label htmlFor="phone">Enter phone number</label>
                                <input
                                    onChange={this.onChange}
                                    value={phone}
                                    name="phone"
                                    type="text"
                                    id="phone"
                                />
                            <label htmlFor="email">Enter email address</label>
                                <input
                                    onChange={this.onChange}
                                    value={email}
                                    type="text"
                                    name="email"
                                    id="email"
                                />
                            <label htmlFor="link">Enter website address</label>
                                <input
                                    onChange={this.onChange}
                                    value={link}
                                    type="text"
                                    name="link"
                                    id="link"
                                />
                                {/* {console.log(link.text)} */}
                            <button type='submit'>Update</button>
                        </div>
                        <div className="second-division">
                            <button type="button" className="remove-btn">Remove</button>
                        </div>
                    </form>
                </div>
                <Contact linksToRender={links}/>
            </div>
        )
    }
}