import React, {Component} from 'react'
import { Progress } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

class Stat extends Component{


    render(){
        return(
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <React.Fragment>
                <h1 className="text-warning" style={{fontFamily: "Bangers"}}>Powerstats</h1>
                <hr />
                <h3 className="text-info" style={{fontFamily: "Bangers"}}>Combat: </h3>
                <Progress value={this.props.item.powerstats.combat}>{this.props.item.powerstats.combat}%</Progress>
                <hr />
                <h3 className="text-info" style={{fontFamily: "Bangers"}}>Durability: </h3>
                <Progress value={this.props.item.powerstats.durability}>{this.props.item.powerstats.durability}%</Progress>
                <hr />
                <h3 className="text-info" style={{fontFamily: "Bangers"}}>Intelligence: </h3>
                <Progress value={this.props.item.powerstats.intelligence}>{this.props.item.powerstats.intelligence}%</Progress>
                <hr />
                <h3 className="text-info" style={{fontFamily: "Bangers"}}>Power: </h3>
                <Progress value={this.props.item.powerstats.power}>{this.props.item.powerstats.power}%</Progress>
                <hr />
                <h3 className="text-info" style={{fontFamily: "Bangers"}}>Speed: </h3>
                <Progress value={this.props.item.powerstats.speed}>{this.props.item.powerstats.speed}%</Progress>
                <hr />
                <h3 className="text-info" style={{fontFamily: "Bangers"}}>Strength: </h3>
                <Progress value={this.props.item.powerstats.strength}>{this.props.item.powerstats.strength}%</Progress>
            </React.Fragment>
            </FadeTransform>
        )
    }
}

export default Stat