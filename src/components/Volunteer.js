import React, { Component } from "react";
import IndividualVolunteer from "./IndividualVolunteer";

export default class Volunteer extends Component {
    constructor() {
        super()

        this.state = {
            isActive: false,
            jobs: [
                {job: {
                    title: 'Free Software Foundation ',
                    city: 'Boston',
                    province: 'AB',
                    dateRange: 'March 2021 — Present',
                    summary: 'Helped organize mailing for end-of-year fundraising campaigns.',
                }},
                {job: {
                    title: 'Free Software Foundation ',
                    city: 'Boston',
                    province: 'AB',
                    dateRange: 'March 2021 — Present',
                    summary: 'Helped organize mailing for end-of-year fundraising campaigns.',
                }},
        ]
        }
    }

    onChange = (e, index) => {
        // may be some issues here ! 
        const list = [...this.state.jobs]
        list[index]['job'][e.target.name] = e.target.value;
        this.setState({
            jobs: [...list],
        });
        console.log(this.state.jobs)
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            jobs: [...this.state.jobs, {job: {
                title: '',
                employer: '',
                city: '',
                province: '',
                dateRange: '',
                summary: '',
            }}]
        });
    }

    onRemoveLinks = (index) => {
        const list = [...this.state.jobs]
        console.log(index)
        console.log(list)
        list.splice(index, 1);
        this.setState({
            jobs : [...list],
        });
    }

    openForm = () => {
        this.setState({
            isActive: true
        })
    }

    closeForm = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            isActive: false
        })
    }

    render() {

       const { isActive, job, jobs } = this.state;

        return(
            <div className="volunteer-form-cont" onClick={this.openForm}>
                <div  className={isActive ? "work-form-visible" : 'hidden'} >
                    {/* <button onClick={this.openForm} className="edit-work-btn">Edit</button> */}
                    
                        
                        {jobs.map((singleJob, index) => {
                            return(
                                <form action="" onSubmit={this.onSubmit} key={index}>
                                    { index === 0 && <button className="workClose" onClick={this.closeForm}>Close</button>}
                                    <div className="job-form-cont">
                                        <label htmlFor="title">Enter job title</label>
                                            <input
                                                onChange={(e) => this.onChange(e, index)}
                                                value={singleJob.job.title}
                                                name='title'
                                                type="text"
                                                id={index}
                                            />
                                        {/* <label htmlFor="employer">Enter company name</label>
                                            <input
                                                onChange={(e) => this.onChange(e, index)}
                                                value={singleJob.job.employer}
                                                name='employer'
                                                type="text"
                                                id={index}
                                            />     */}
                                        <label htmlFor="city">Enter city name</label>
                                            <input
                                                onChange={(e) => this.onChange(e, index)}
                                                value={singleJob.job.city}
                                                name='city'
                                                type="text"
                                                id={index}
                                            />     
                                        <label htmlFor="province">Enter province</label>
                                            <input
                                                onChange={(e) => this.onChange(e, index)}
                                                value={singleJob.job.province}
                                                name='province'
                                                type="text"
                                                id={index}
                                            />    
                                        <label htmlFor="dateRange">Enter date range</label>
                                            <input
                                                onChange={(e) => this.onChange(e, index)}
                                                value={singleJob.job.dateRange}
                                                name='dateRange'
                                                type="text"
                                                id={index}
                                            />  
                                        <label htmlFor="summary">Enter summary of role</label>
                                                <textarea name="summary" className="textArea" onChange={(e) => this.onChange(e, index)} value={singleJob.job.summary} id="" cols="30" rows="10"></textarea>
                                        {jobs.length - 1 === index && <button type='submit' className="add-btn">Add</button>}
                                        {jobs.length > 1 && <button type="button" className="remove-btn" onClick={() => this.onRemoveLinks(index)}>Remove</button>}
                                    </div>
                                </form>           
                            )
                        })}                                                            
                
                    
                    {/* 
                    <IndividualWork />
                    <h4>{jobName}</h4>
                    <p>{date}</p>
                    <p>{description}</p> */}
                    {/* Will have to map for multiple */}
                </div>
                    <h1>VOLUNTEER EXPERIENCE</h1>
                    <IndividualVolunteer jobsToRender={jobs}/>
            </div>
        )
    }
}