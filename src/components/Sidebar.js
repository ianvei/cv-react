import React, { Component } from "react";
import Contact from "./Contact";
import Skills from "./Skills";
import Education from "./Education";


export default class Sidebar extends Component {
    constructor() {
        super()

        this.state = {
            // link: {link: ''},
            links: [{link: "610.555.5555"}, {link: "bob@bobcoder.org"}, {link: "Bobcoder.com"}, {link: "github.com/bobcoder"}, {link: "linked.com/in/bobcoder"}],
            skills: [{skill: "HTML"}, {skill: "CSS"}, {skill: "Javascript"}, {skill: "React"}, {skill: "React Native"}, {skill: "Node"}, {skill: "MongoDB"}, {skill: "PostgreSQL"}, {skill: "OOP"},  {skill: "Web Accessibility "}],
            education: [{schoolName: "University of Calgary", educationDate: '2018 - 2022', major: 'Business Technology'}],
            isActive: false,
            skillsIsActive: false,
            educationIsActive: false,
        }
    }

    onChange = (e, index) => {
        
        const list = [...this.state.links]
        list[index][e.target.name] = e.target.value;
        this.setState({
            links: [...list],
        });
        console.log(this.state.links)
    };

    onChangeSkills = (e, index) => {
        
        const list = [...this.state.skills]
        list[index][e.target.name] = e.target.value;
        this.setState({
            skills: [...list],
        });
        console.log(this.state.skills)
    };

    onChangeEducation = (e, index) => {
        
        const list = [...this.state.education]
        list[index][e.target.name] = e.target.value;
        this.setState({
            education: [...list],
        });
        console.log(this.state.education)
    };

    

    onSubmitLinks = (e) => {
        e.preventDefault();
        this.setState({
            links: [...this.state.links, {link: ''}]
        });
    }

    onSubmitSkills = (e) => {
        e.preventDefault();
        this.setState({
            skills: [...this.state.skills, {skill: ''}]
        });
    }

    onSubmitEducation = (e) => {
        e.preventDefault();
        this.setState({
            education: [...this.state.education, {schoolName: "", educationDate: '', major: ''}]
        });
    }

    onRemoveLinks = (index) => {
        const list = [...this.state.links]
        console.log(index)
        console.log(list)
        list.splice(index, 1);
        this.setState({
            links : [...list],
        });
    }

    onRemoveSkills = (index) => {
        const list = [...this.state.skills]
        console.log(index)
        console.log(list)
        list.splice(index, 1);
        this.setState({
            skills : [...list],
        });
    }

    onRemoveEducation = (index) => {
        const list = [...this.state.education]
        console.log(index)
        console.log(list)
        list.splice(index, 1);
        this.setState({
            education : [...list],
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

    openEducation = () => {
        console.log('edu')
        this.setState({
            educationIsActive: true
        })
    }

    closeEducation = () => {
        this.setState({
            educationIsActive: false
        })
    }

    render() {
        const { links, isActive, skillsIsActive, skills, education, educationIsActive } = this.state;
        return(
            <div className="sidebar">
               
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

                
                <div className={educationIsActive ? "education-links-form-visible" : 'hidden'} >
                    <button className="close-education" onClick={this.closeEducation}>Close</button>
                    {education.map((singleEducation, index) => {
                        return(
                            <form onSubmit={this.onSubmitEducation} key={index}> 
                                <div className="first-division">
                                    <label htmlFor="schoolName">Enter the name of your school</label>
                                        <input
                                            onChange={(e) => this.onChangeEducation(e, index)}
                                            value={singleEducation.schoolName}
                                            name='schoolName'
                                            type="text"
                                            id={index}
                                        />
                                    <label htmlFor="educationDate">Enter the date range</label>
                                        <input
                                            onChange={(e) => this.onChangeEducation(e, index)}
                                            value={singleEducation.educationDate}
                                            name='educationDate'
                                            type="text"
                                            id={index}
                                        /> 
                                    <label htmlFor="educationMajor">Enter your major</label>
                                        <input
                                            onChange={(e) => this.onChangeEducation(e, index)}
                                            value={singleEducation.major}
                                            name='major'
                                            type="text"
                                            id={index}
                                        />          
                                    {/* {education.length - 1 === index && <button type='submit' className="add-btn">Add</button>} */}
                                </div>
                                <div className="second-division">
                                    {education.length > 1 && <button type="button" className="remove-btn" onClick={() => this.onRemoveEducation(index)}>Remove</button>}
                                </div>
                            </form>
                        )
                    })}
                </div>

                <div className="contact-container-sb" onClick={this.openForm}>
                    <button onClick={this.openForm} className="edit-overview-btn">Edit</button>
                    <h1>CONTACT</h1>
                    <Contact linksToRender={links} />
                </div>
                
                <div className="skill-container-sb" onClick={this.openSkill}>
                    <button onClick={this.openSkill} className="edit-skill-btn">Edit</button>
                    <h1>SKILLS</h1>
                    <Skills skillsToRender={skills} />
                </div>
                
                <div className="education-container-sb" onClick={this.openEducation}>
                    <button onClick={this.openEducation} className="edit-education-btn">Edit</button>
                    <h1>EDUCATION</h1>
                    <Education educationToRender={education} />
                </div>
            </div>
        )
    }
}