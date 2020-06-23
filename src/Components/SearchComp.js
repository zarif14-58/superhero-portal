import React, {Component} from 'react'
import { Form, FormGroup, Input, Col, Button } from 'reactstrap';
import Result from './ResultComp'
import Loader from './LoaderComp'

class Search extends Component {

    constructor(props){
        super(props)
        this.state = {
            value: "",
            dataObj: {},
            loading: 1
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.fetchChars = this.fetchChars.bind(this)
    }

    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event){
        this.setState({
            loading: 2
        })
        console.log(this.state.value)
        event.preventDefault()
        this.fetchChars()
        this.renderResult()
    }

    fetchChars(){
        const proxy = "https://cors-anywhere.herokuapp.com/";
        
        fetch(`${proxy}https://superheroapi.com/api/3155967971130627/search/` + this.state.value)
            .then(res => {
                if (res.ok) {
                return res;
                }   else {
                var error = new Error('Error ' + res.status + ': ' + res.statusText);
                error.response = res;
                throw error;
                }
            },
            error => {
                    throw error;
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.response === "error"){
                    alert("Ooops! Character not found! Check your spelling, or search Google :'(. Tip: It is Spider-Man, not Spider Man.")
                }
                else{
                    this.setState({
                        dataObj: data,
                        loading: 3
                    })
                    console.log(this.state.dataObj.results)
                }
                
            })
            .catch(err => alert("Something went wrong"))
            
    }

    renderResult(){
        if(this.state.loading === 1){
            return(
                <div></div>
            )
        }
        else if(this.state.loading === 2){
            return(
                <Loader />
            )
        }
        else if(this.state.loading === 3){
            return(
                <Result data={this.state.dataObj}/>
            )
        }
    }


    render(){
        return(
            <React.Fragment>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row className="justify-content-center">
                        <Col md={7}>
                            <Input type="text" 
                            name="search" id="search" 
                            placeholder="Search A Character By Name" 
                            className="text-center"
                            value={this.state.value}
                            onChange={this.handleChange} 
                        />
                        </Col>
                    </FormGroup>
                    <FormGroup row className="justify-content-center">
                        <Col md={{size: 7, offset: 6}}>
                            <Button color="info">Search</Button>
                        </Col>
                    </FormGroup>
                </Form>
                <div>
                    {this.renderResult()}
                </div>
             </React.Fragment>
        )
    }
}


export default Search