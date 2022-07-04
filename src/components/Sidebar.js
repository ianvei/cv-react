import React, { Component } from "react";
import Contact from "./Contact";

export default class Sidebar extends Component {
    constructor() {
        super()

        this.state = {
            // link: {link: ''},
            links: [{link: ""}],
        }
    }

    onChange = (e, index) => {
        
        const list = [...this.state.links]
        list[index][e.target.name] = e.target.value;
        this.setState({
            links: [...list],
            // link: {id: ''},
        });
        console.log(this.state.links)
    };

    onSubmitLinks = (e) => {
        e.preventDefault();
        this.setState({
            links: [...this.state.links, {link: ''}]
        });
        // console.log(this.state.links)
    }

    onRemoveLinks = (index) => {
        const list = [...this.state.links]
        if(this.state.links[0] === {}) {
            list.splice(0, 1);
        }
        console.log(index)
        console.log(list)
        list.splice(index, 1);
        this.setState({
            links : [...list],
        });
    }

    render() {
        const { link, links } = this.state;
        return(
            <div className="sidebar">
                <div className="contact-form" >
                    {links.map((singleLink, index) => {
                        return(
                            <form onSubmit={this.onSubmitLinks} key={index}>
                        <div className="first-division">
                            <label htmlFor="phone">Enter phone number</label>
                                <input
                                    onChange={(e) => this.onChange(e, index)}
                                    value={singleLink.link}
                                    name='link'
                                    type="text"
                                    id={index}
                                />
                            {links.length - 1 === index && <button type='submit'>Add</button>}
                        </div>
                        <div className="second-division">
                            {links.length > 1 && <button type="button" className="remove-btn" onClick={() => this.onRemoveLinks(index)}>Remove</button>}
                        </div>
                    </form>
                        )
                    })}
                </div>
                <Contact linksToRender={links}/>
            </div>
        )
    }
}