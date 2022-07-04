import React, { Component } from "react";
import Contact from "./Contact";
import Skills from "./Skills";


export default class Sidebar extends Component {
    constructor() {
        super()

        this.state = {
            // link: {link: ''},
            links: [{link: ""}],
            skills: [{skill: ""}],
            education: [{skill: ""}],
            isActive: false,
            skillsIsActive: false,
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

    onChangeSkills = (e, index) => {
        
        const list = [...this.state.skills]
        list[index][e.target.name] = e.target.value;
        this.setState({
            skills: [...list],
            // link: {id: ''},
        });
        console.log(this.state.skills)
    };

    

    onSubmitLinks = (e) => {
        e.preventDefault();
        this.setState({
            links: [...this.state.links, {link: ''}]
        });
        // console.log(this.state.links)
    }

    onSubmitSkills = (e) => {
        e.preventDefault();
        this.setState({
            skills: [...this.state.skills, {skill: ''}]
        });
        // console.log(this.state.links)
    }

    onRemoveLinks = (index) => {
        const list = [...this.state.links]
        // if(this.state.links[0] === {}) {
        //     list.splice(0, 1);
        // }
        console.log(index)
        console.log(list)
        list.splice(index, 1);
        this.setState({
            links : [...list],
        });
    }

    onRemoveSkills = (index) => {
        const list = [...this.state.skills]
        // if(this.state.skills[0] === {}) {
        //     list.splice(0, 1);
        // }
        console.log(index)
        console.log(list)
        list.splice(index, 1);
        this.setState({
            skills : [...list],
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

    openSkill = () => {
        console.log('hello')
        this.setState({
            skillsIsActive: true
        })
    }

    closeSkill = () => {
        this.setState({
            skillsIsActive: false
        })
    }

    render() {
        const { links, isActive, skillsIsActive, skills } = this.state;
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
                <button onClick={this.openSkill} className="edit-skill-btn">Edit</button>
                <div className={skillsIsActive ? "skills-links-form-visible" : 'hidden'} >
                    <button className="close-skill" onClick={this.closeSkill}>Close</button>
                    {skills.map((singleSkill, index) => {
                        return(
                            <form onSubmit={this.onSubmitSkills} key={index}> 
                                <div className="first-division">
                                    <label htmlFor="phone">Enter Skill Text</label>
                                        <input
                                            onChange={(e) => this.onChangeSkills(e, index)}
                                            value={singleSkill.skill}
                                            name='skill'
                                            type="text"
                                            id={index}
                                        />
                                    {skills.length - 1 === index && <button type='submit' className="add-btn">Add</button>}
                                </div>
                                <div className="second-division">
                                    {skills.length > 1 && <button type="button" className="remove-btn" onClick={() => this.onRemoveSkills(index)}>Remove</button>}
                                </div>
                            </form>
                        )
                    })}
                </div>
                <h1>CONTACT</h1>
                <Contact linksToRender={links} />
                <h1>SKILLS</h1>
                <Skills skillsToRender={skills} />
                <h1>EDUCATION</h1>
                {/* <Education linksToRender={education} /> */}

            </div>
        )
    }
}