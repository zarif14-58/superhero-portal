import React, {Component} from 'react'
import { FadeTransform } from 'react-animation-components';


class Appear extends Component{

    render(){
        return(
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <React.Fragment>
                <h1 className="text-warning" style={{fontFamily: "Bangers"}}>Appearance</h1>
                <hr />
                <h3 className="text-info" style={{fontFamily: "Bangers"}}>Eye-Color: {this.props.item.appearance["eye-color"]}</h3>
                <hr />
                <h3 className="text-info" style={{fontFamily: "Bangers"}}>Gender: {this.props.item.appearance["gender"]}</h3>
                <hr />
                <h3 className="text-info" style={{fontFamily: "Bangers"}}>Height: {this.props.item.appearance["height"][0]}</h3>
                <hr />
                <h3 className="text-info" style={{fontFamily: "Bangers"}}>Race: {this.props.item.appearance["race"]}</h3>
                <hr />
                <h3 className="text-info" style={{fontFamily: "Bangers"}}>Weight: {this.props.item.appearance.weight[1]}</h3>
            </React.Fragment>
            </FadeTransform>
        )
    }
}

export default Appear