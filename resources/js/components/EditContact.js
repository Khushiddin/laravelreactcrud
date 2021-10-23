import React, { Component } from 'react';
import axios from 'axios';
//import CSRFToken from './CSRFtoken';
class EditContact extends Component {
    state={
        fullname:'',
        email:'',
        phoneno:''
    }

    handleInput = (e)=>{
        this.setState({[e.target.name]: e.target.value});
    }

    updateContact = async (e)=>{
        e.preventDefault();
        const id = this.props.match.params.id;
        const res = await axios.patch(`/contact/${id}`,this.state);
        if(res.data.status=='success'){
            this.props.history.push("/");
        }
    }

    async componentDidMount(){
        const id = this.props.match.params.id;
        //const res = await axios.get(`/contact/${id}/edit`);
        //const res = await axios.get(`https://dtr.aryacma.co.in/api/a2z/areamanagers`);
        // const res = await axios.post(`https://dtr.aryacma.co.in/api/a2z/areamanagerspost`,{
        //     token: "eaa6e653e7f0d23bd2ad460e5cf95aa2"
        //   });
        const headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
          }
        const data =JSON.stringify({"token":"eaa6e653e7f0d23bd2ad460e5cf95aa2","aryapro_id":70});  
          const res = await axios.post("http://local.dtr.com/api/a2z/clientwisestock",data,
          {
            headers:headers
          });  
        console.log(res);
        this.setState({fullname:res.data.contact.fullname});
        this.setState({email:res.data.contact.email});
        this.setState({phoneno:res.data.contact.phoneno});
    }

    render() {

        return (
            <div>
                <form onSubmit={this.updateContact}>

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
                    <input type="submit" className="btn btn-primary" value="Edit Contact"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditContact
