import React from 'react';
import logo from './img/banner-home.jpg';
import './_faq.scss';

export default class faq extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="row full-width questions">
                <div className="col-md-2 offset-md-2">
                    <img src={logo} width={100} height={100} alt=""/>
                </div>
                <div className="col-md-7">
                    <p>What is a coding bootcamp?
                            Coding bootcamps are schools that promise to make you a job-ready developer. Most in-person bootcamps last 3-4 months, require full-time attendance, and charge tuition in the range of $10,000 to $20,000. Other programs can be taken part-time and/or online at a lower cost. Students spend relatively little time in lectures, instead spending most of the day building projects that demonstrate their skills and prepare them to get jobs as developers.</p>
                </div>
                <div className="col-md-2 offset-md-2 pt-3">
                    <img src={logo} width={100} height={100} alt=""/>
                </div>
                <div className="col-md-7 pt-3">
                    <p>What is a coding bootcamp?
                            Coding bootcamps are schools that promise to make you a job-ready developer. Most in-person bootcamps last 3-4 months, require full-time attendance, and charge tuition in the range of $10,000 to $20,000. Other programs can be taken part-time and/or online at a lower cost. Students spend relatively little time in lectures, instead spending most of the day building projects that demonstrate their skills and prepare them to get jobs as developers.</p>
                </div>
                <div className="col-md-2 offset-md-2 pt-3">
                    <img src={logo} width={100} height={100} alt=""/>
                </div>
                <div className="col-md-7 pt-3">
                    <p>What is a coding bootcamp?
                            Coding bootcamps are schools that promise to make you a job-ready developer. Most in-person bootcamps last 3-4 months, require full-time attendance, and charge tuition in the range of $10,000 to $20,000. Other programs can be taken part-time and/or online at a lower cost. Students spend relatively little time in lectures, instead spending most of the day building projects that demonstrate their skills and prepare them to get jobs as developers.</p>
                </div>
                <div className="col-md-2 offset-md-2 pt-3">
                    <img src={logo} width={100} height={100} alt=""/>
                </div>
                <div className="col-md-7 pt-3">
                    <p>What is a coding bootcamp?
                            Coding bootcamps are schools that promise to make you a job-ready developer. Most in-person bootcamps last 3-4 months, require full-time attendance, and charge tuition in the range of $10,000 to $20,000. Other programs can be taken part-time and/or online at a lower cost. Students spend relatively little time in lectures, instead spending most of the day building projects that demonstrate their skills and prepare them to get jobs as developers.</p>
                </div>
            </div>
        )
    }
}