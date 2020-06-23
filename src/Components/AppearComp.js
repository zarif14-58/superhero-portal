import React, {Component} from 'react'


class Appear extends Component{

    render(){
        return(
            <React.Fragment>
                <h1 className="text-warning">Appearance</h1>
                <hr />
                <h3 className="text-info">Eye-Color: {this.props.item.appearance["eye-color"]}</h3>
                <hr />
                <h3 className="text-info">Gender: {this.props.item.appearance["gender"]}</h3>
                <hr />
                <h3 className="text-info">Height: {this.props.item.appearance["height"][0]}</h3>
                <hr />
                <h3 className="text-info">Race: {this.props.item.appearance["race"]}</h3>
                <hr />
                <h3 className="text-info">Weight: {this.props.item.appearance.weight[1]}</h3>
            </React.Fragment>
        )
    }
}

export default Appear