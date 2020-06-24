import React, {Component} from 'react'
import { FadeTransform, Stagger } from 'react-animation-components';

class Bio extends Component{


    render(){

        const alias = this.props.item.biography.aliases.map((i) => {
            return(
                <h3 className="text-info" style={{fontFamily: "Bangers"}}>{i}</h3>
            )
        })

        return(
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <React.Fragment>
                <h1 className="text-warning" style={{fontFamily: "Bangers"}}>Biography</h1>
                <hr />
                <h1 className="text-info" style={{fontFamily: "Bangers"}}>Aliases: <Stagger in>{alias}</Stagger></h1>
                <hr />
                <h3 className="text-info" style={{fontFamily: "Bangers"}}>First Appearance: {this.props.item.biography["first-appearance"]}</h3>
                <hr />
                <h3 className="text-info" style={{fontFamily: "Bangers"}}>Full Name: {this.props.item.biography["full-name"]}</h3>
                <hr />
                <h3 className="text-info" style={{fontFamily: "Bangers"}}>Place of Birth: {this.props.item.biography["place-of-birth"]}</h3>
                <hr />
                <h3 className="text-info" style={{fontFamily: "Bangers"}}>Publisher: {this.props.item.biography["publisher"]}</h3>
            </React.Fragment>
            </FadeTransform>
        )
    }
}

export default Bio