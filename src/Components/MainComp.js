import React, {Component} from 'react'
import Home from './HomeComp'
import Search from './SearchComp'

class Main extends Component {


    render(){
        return(
            <React.Fragment>
                    <Home />
                <div className="container">
                    <Search />
                </div>
            </React.Fragment>
        )
    }
}

export default Main