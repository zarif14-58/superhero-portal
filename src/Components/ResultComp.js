import React, {Component} from 'react'

class Result extends Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        
        
        const results = this.props.data.results.map((item) => {
            return(
                <div className="col-12 col-sm-4" key={item.id}>
                    <img src={item.image.url} alt={item.name} style={{width: "250px", height: "350px", boxShadow: "5px 5px 5px white"}}
                        className="m-4 img-fluid" 
                    />
                    <h5 className="text-warning text-center">{item.name}</h5>
                </div>
            )
        })
    
        return(
            <div className="container">
                <h3 className="text-warning text-center">{this.props.data.results.length} Alter ego(s) found</h3>
                <div className="row justify-content-center">
                    {results}
                </div>
            </div>
        )
        
    }
}

export default Result