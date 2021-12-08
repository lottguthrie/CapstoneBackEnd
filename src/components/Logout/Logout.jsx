import React, {Component} from 'react';
import { withRouter } from "react-router-dom";

class Logout extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();             
        this.props.logoutUserCall(this.state)
    }

    render(){
        return ( 
            <div className="logout">
                    <button type="submit" onClick={this.handleSubmit} >Logout</button>
            </div>

        );
    }
}
 
export default withRouter(Logout);