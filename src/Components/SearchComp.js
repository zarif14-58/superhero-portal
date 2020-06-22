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
    }

    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event){
        console.log(this.state.value)
        event.preventDefault()
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