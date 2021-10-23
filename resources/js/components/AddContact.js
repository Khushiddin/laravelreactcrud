import React, { Component } from 'react';
import axios from 'axios';
//import CSRFToken from './CSRFtoken';
class AddContact extends Component {
    state={
        fullname:'',
        email:'',
        phoneno:''
    }

    handleInput = (e)=>{
        this.setState({[e.target.name]: e.target.value});
    }

    saveContact = async (e)=>{
        e.preventDefault();
        //console.log(this.state);
        const res = await axios.post("/contact",this.state);
        this.setState({'fullname':'','email':'','phoneno':''});
        if(res.data.status=='success'){
            this.props.history.push("/");
        }
        console.log(res);
    }

    render() {
      // let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        return (
            <div>
                <form onSubmit={this.saveContact}>
                {/* <CSRFToken /> */}
                {/* <input type="hidden" name="_token" value={token}></input> */}
                    <div className="form-group">
                    <input type="text" name="fullname" className="form-control" value={this.state.fullname} onChange={this.handleInput} placeholder="Enter Your Full Name" required/>
                    </div>
                    <div className="form-group">
                    <input type="text" name="email" className="form-control" value={this.state.email} onChange={this.handleInput} placeholder="Enter Your Email" required/>
                    </div>
                    <div className="form-group">
                    <input type="text" name="phoneno" className="form-control" value={this.state.phoneno} onChange={this.handleInput} placeholder="Enter Your Phone Number" required/>
                    </div>
                    <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Add Contact"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddContact
