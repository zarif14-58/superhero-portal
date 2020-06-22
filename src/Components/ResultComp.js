import React, {Component} from 'react'
import { Card, CardTitle, CardImg, CardImgOverlay, CardDeck } from 'reactstrap';

class Result extends Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        if(typeof this.props.data === "undefined"){
            return(
                <h1 className="text-white">Loading....</h1>
            )
        }
        else{
        const results = this.props.data.map((item) => {
            return(
                <Card>
                    <CardImg width="100%" src={item.image.url} alt="Card image cap" />
                    <CardImgOverlay>
                        <CardTitle>{item.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            )
        })
    
        return(
            <div>
                <CardDeck>
                    {results}
                </CardDeck>
            </div>
        )
        }
    }
}

export default Result