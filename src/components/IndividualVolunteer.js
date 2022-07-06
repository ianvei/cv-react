import React, { Component } from "react";

export default class IndividualVolunteer extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const { jobsToRender } = this.props;
        // console.log(linksToRender)
        

        return(
            <div className="volunteer-cont">
                {jobsToRender.map((individualJob) => {
                    return (
                        <div className="individualVolunteer">
                            <div className="title">
                                <h4>{individualJob.job.title} </h4> 
                                <p className="employer"> | {individualJob.job.city}, {individualJob.job.province}</p>
                            </div>
                            <p className="job-date">{individualJob.job.dateRange}</p>
                            <p className="job-summary">{individualJob.job.summary}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}