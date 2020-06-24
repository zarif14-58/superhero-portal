import React, {Component} from 'react'
import { FadeTransform } from 'react-animation-components';


class Work extends Component{

    render(){
        return(
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <React.Fragment>
                <h1 className="text-warning" style={{fontFamily: "Bangers"}}>Work</h1>
                <hr />
                <h3 className="text-info" style={{fontFamily: "Bangers"}}>Base: {this.props.item.work.base}</h3>
                <hr />
                <h3 className="text-info" style={{fontFamily: "Bangers"}}>Occupation: {this.props.item.work.occupation}</h3>
            </React.Fragment>
            </FadeTransform>
        )
    }
}

export default Work