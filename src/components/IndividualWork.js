import React, { Component } from "react";

export default class IndividualWork extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const { jobsToRender } = this.props;
        // console.log(linksToRender)
        

        return(
            <div className="job-cont">
                {jobsToRender.map((individualJob) => {
                    return (
                        <div className="individualJob">
                            <div className="title">
                                <h4>{individualJob.job.title} </h4> 
                                <p className="employer">at {individualJob.job.employer} | {individualJob.job.city}, {individualJob.job.province}</p>
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