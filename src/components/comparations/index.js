import React from 'react';

export default class index extends React.Component{
    constructor(){
        super();
        this.state = {
            comparations: []
        }
    }

    componentDidMount(){
        fetch('https://assets-alesanchezr.c9users.io/apis/course-report/permute/full-stack')
        .then(results=>{
          return results.json();
        })
        .then(data=>{
            this.setState({
                comparations: data
            })
        })
    }

    render(){
        let renderComparation = this.state.comparations.map((data, i)=>{
                return (
                    <div className="col-md-4 px-2 pt-2" key={i}>
                        <div className="border box-shw pt-3">
                            <a href="">
                                <p className="text-center">{data[0]}</p>
                                <p className="text-center">vs</p>
                                <p className="text-center">{data[1]}</p>
                                <p className="text-center">vs</p>
                                <p className="text-center">{data[2]}</p>
                                
                            </a>
                        </div>
                    </div>
                )
        })
        return(
            <div className="container">
                <div className="container">
                    <div className="row sect-comparations">
                        <div className="col-md-12 title-banner">
                            <h2 className="text-center">Explore popular comparisons</h2>
                        </div>
                            {renderComparation}
                    </div>
                </div>
            </div>
            
        )
    }
}