import React from 'react'
import spidey2 from '../images/spidey2.gif'

function Loader(props){
    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 text-center">
                    <img src={spidey2} alt="loader" style={{height: "100px", width: "100px", borderRadius: "50%"}} />
                </div>
            </div>
            <h4 className="text-center text-warning">LOADING....</h4>
        </div>
    )
}

export default Loader