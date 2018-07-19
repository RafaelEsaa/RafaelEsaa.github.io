import React from 'react';
import "./_bannerHome.scss"

export default class bannerHome extends React.Component{
    constructor(){
        super();
        this.state = {
            pictures: []
        }
    }

    render(){
        return(
            <div className="row full-width">
                <div className="col-md-12 fondo">
                    <section className="title-banner">
                        <h1 className="text-center">Compare top coding bootcamps</h1>
                        <h2 className="text-center">Get the scoop on the world's best coding schools.</h2>
                    </section>

                    <section className="row justify-content-center form-banner">
                        <div className="col-md-9 form">
                            <form>
                                <div className="form-row">
                                    <div className="col-md-5" style={{display: 'inline-block'}}>
                                        <label>Compare any bootcamp</label>
                                        <input type="text" className="form-control full-width" placeholder="First name"/>
                                    </div>
                                    <div className="col-md-2" style={{display: 'inline-block'}}>
                                        <p className="text-center">vs</p>
                                    </div>
                                    <div className="col-md-5" style={{display: 'inline-block'}}>
                                        <label>Any bootcamp</label>
                                        <input type="text" className="form-control full-width" placeholder="Last name"/>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center sect-btn">
                                    <button type="submit" className="btn btn-primary btn-form">Compare</button>
                                </div>
                            </form>
                            <p className="text-center text-menu">Or explore all bootcamps</p>              
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}