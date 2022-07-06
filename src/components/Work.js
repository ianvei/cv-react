import React, { Component } from "react";
import IndividualWork from "./IndividualWork";

export default class Work extends Component {
    constructor() {
        super()

        this.state = {
            isActive: false,
            jobs: [
                {job: {
                    title: 'Full Stack Web Developer',
                    employer: "Bob's Consulting",
                    city: 'Calgary',
                    province: 'AB',
                    dateRange: 'January 2019 - Present',
                    summary: 'Created full stack web applications and static websites for different clients across small and medium size businesses. Also, consulted on SEO and social media strategy.',
                }},
                {job: {
                    title: 'Marketing Associate',
                    employer: "Central Perk",
                    city: 'Calgary',
                    province: 'AB',
                    dateRange: 'January 2018 — December 2019',
                    summary: 'Established a strategy and communications campaign that raised 300% over fundraising goal raising 35,000 digitally and $110,000 in total. ',
                }},
                {job: {
                    title: 'Data Analytics Intern',
                    employer: "Huge Bank",
                    city: 'Toronto',
                    province: 'ON',
                    dateRange: 'January 2021 — December 2022',
                    summary: 'Pulled complex data from relational databases using SQL, visualized data using Power BI, Python, R studio.',
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
            <div className="work-cont" onClick={this.openForm}>   
                <div className={isActive ? "work-form-visible" : 'hidden'}>            
                    {jobs.map((singleJob, index) => {
                        return(
                            <form action="" onSubmit={this.onSubmit} key={index}>
                                {index === 0 && <button className="workClose" onClick={this.closeForm}>Close</button>}
                                <div className="job-form-cont">
                                    <label htmlFor="title">Enter job title</label>
                                        <input
                                            onChange={(e) => this.onChange(e, index)}
                                            value={singleJob.job.title}
                                            name='title'
                                            type="text"
                                            id={index}
                                        />
                                    <label htmlFor="employer">Enter company name</label>
                                        <input
                                            onChange={(e) => this.onChange(e, index)}
                                            value={singleJob.job.employer}
                                            name='employer'
                                            type="text"
                                            id={index}
                                        />    
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
                                            <textarea name="summary" className="textArea" onChange={(e) => this.onChange(e, index)} value={singleJob.job.summary} id="" cols="30" rows="5"></textarea>
                                    {jobs.length - 1 === index && <button type='submit' className="add-btn">Add</button>}
                                    {jobs.length > 1 && <button type="button" className="remove-btn" onClick={() => this.onRemoveLinks(index)}>Remove</button>}
                                </div>
                            </form>           
                        )
                    })}                                                            
                </div>    
                <h1>WORK EXPERIENCE</h1>
                <IndividualWork jobsToRender={jobs}/>
                {/* 
                <IndividualWork />
                <h4>{jobName}</h4>
                <p>{date}</p>
                <p>{description}</p> */}
                {/* Will have to map for multiple */}
            </div>
        )
    }
}