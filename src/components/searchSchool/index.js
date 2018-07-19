import React from 'react';
import './_searchSchool.scss';
import logo from './img/banner-home.jpg';

export default class searchSchool extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div className="row full-width">
                <div className="title-banner col-md-12">
                    <h2 className="text-center">Get informed. Reviews and facts on every bootamp.</h2>
                    <form>
                        <div className="pt-2" 
                            style={{position: 'relative', 
                                    width: '352px',
                                    left: '50%',
                                    transform: 'translate(-50%)'}}>
                            <div style={{display: 'inline-block', padding: '0px 10px'}}>
                                <input type="text" className="form-control" placeholder="First name"/>
                            </div>
                            <div style={{display: 'inline-block'}}>
                                <button type="submit" className="btn bg-transparent">or See All</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-12 text-center pt-3">
                    <span style={{padding: '0px 10px'}}>
                        <img src={logo} width={34} height={34} alt=""/>
                    </span>
                    <span style={{padding: '0px 10px'}}>
                        <img src={logo} width={34} height={34} alt=""/>
                    </span>
                    <span style={{padding: '0px 10px'}}>
                        <img src={logo} width={34} height={34} alt=""/>
                    </span>
                    <span style={{padding: '0px 10px'}}>
                        <img src={logo} width={34} height={34} alt=""/>
                    </span>
                    <span style={{padding: '0px 10px'}}>
                        <img src={logo} width={34} height={34} alt=""/>
                    </span>
                </div>
            </div>
        )
    }
}