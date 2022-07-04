import React, { Component } from "react";
import Contact from "./Contact";


export default class Sidebar extends Component {
    constructor() {
        super()

        this.state = {
            // link: {link: ''},
            links: [{link: ""}],
            isActive: false,
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

    openForm = () => {
        this.setState({
            isActive: true
        })
    }

    closeForm = () => {
        this.setState({
            isActive: false
        })
    }

    render() {
        const { links, isActive } = this.state;
        return(
            <div className="sidebar">
                <button onClick={this.openForm} className="edit-overview-btn">Edit</button>
                <div className={isActive ? "sb-links-form-visible" : 'hidden'} >
                    <button className="close" onClick={this.closeForm}>Close</button>
                    {links.map((singleLink, index) => {
                        return(
                            <form onSubmit={this.onSubmitLinks} key={index}> 
                                <div className="first-division">
                                    <label htmlFor="phone">Enter Link Text</label>
                                        <input
                                            onChange={(e) => this.onChange(e, index)}
                                            value={singleLink.link}
                                            name='link'
                                            type="text"
                                            id={index}
                                        />
                                    {links.length - 1 === index && <button type='submit' className="add-btn">Add</button>}
                                </div>
                                <div className="second-division">
                                    {links.length > 1 && <button type="button" className="remove-btn" onClick={() => this.onRemoveLinks(index)}>Remove</button>}
                                </div>
                            </form>
                        )
                    })}
                </div>
                <h1>CONTACT</h1>
                <Contact linksToRender={links}/>
                <h1>SKILLS</h1>
            </div>
        )
    }
}