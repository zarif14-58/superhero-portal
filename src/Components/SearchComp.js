import React, {Component} from 'react'
import { Form, FormGroup, Input, Col, Button } from 'reactstrap';

class Search extends Component {

    constructor(props){
        super(props)
        this.state = {
            value: ''
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
        console.log(this.state.value)
        event.preventDefault()
        this.fetchChars()
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
                    alert("Ooops!")
                }
                
            })
            .catch(err => alert("Something went wrong"))
            
    }

    render(){
        return(
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
        )
    }
}

export default Search