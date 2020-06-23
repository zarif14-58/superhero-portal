import React, {Component} from 'react'
import {ModalHeader, ModalBody, Button, Modal} from 'reactstrap'
import Appear from "./AppearComp"
import Bio from "./BioComp"
import Stat from "./PowerComp"
import Work from "./WorkComp"

class Result extends Component {

    constructor(props){
        super(props)
        this.state = {
            selectedItem: {},
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this)
        this.handleChar = this.handleChar.bind(this)
        this.handleApp = this.handleApp.bind(this)
        this.handleBio = this.handleBio.bind(this)
        this.handleChar = this.handleChar.bind(this)
        this.handleStat = this.handleStat.bind(this)
        this.handleWork = this.handleWork.bind(this)
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    async handleChar(item){
       await this.setState({
            selectedItem: item
        })
        console.log(this.state.selectedItem)
    }

    handleBio(){
        return(
            <Bio item={this.state.selectedItem} />
        )
    }

    handleStat(){
        return(
            <Stat item={this.state.selectedItem} />
        )
    }

    handleWork(){
        return(
            <Work item={this.state.selectedItem} />
        )
    }

    handleApp(){
        return(
            <Appear item={this.state.selectedItem} />
        )
    }


    render(){
        
        
        const results = this.props.data.results.map((item) => {
            return(
                <div className="col-12 col-sm-4" key={item.id} onClick={() => {this.toggleModal(); this.handleChar(item)}} >
                    <img src={item.image.url} alt={item.name} style={{width: "250px", height: "350px", boxShadow: "5px 5px 5px white"}}
                        className="m-4 img-fluid"
                    />
                    <h5 className="text-warning text-center">{item.name}</h5>
                </div>
            )
        })
    
        return(
            <React.Fragment>
                <Modal size="lg" style={{maxWidth: '1600px', width: '90%'}} isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Character Info.</ModalHeader>
                    <ModalBody>
                            <Button color="warning" onClick={this.handleApp}>Appearance</Button>
                            <Button color="warning" onClick={this.handleBio}>Biography</Button>
                            <Button color="warning" onClick={this.handleStat}>Powerstats</Button>
                            <Button color="warning" onClick={this.handleWork}>Work</Button>

                            {this.handleApp()}
                    </ModalBody>
                </Modal>
                <div className="container">
                    <h3 className="text-warning text-center">{this.props.data.results.length} Alter ego(s) found</h3>
                    <div className="row justify-content-center">
                        {results}
                    </div>
                </div>
            </React.Fragment>
        )
        
    }
}

export default Result