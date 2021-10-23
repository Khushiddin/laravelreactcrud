import React, { Component } from 'react';
import axios from 'axios';
import Contact from './Contact';
class Contacts extends Component {
    state={
        contacts:[],
        loading:true
    }

    fetchContacts = async ()=>{
        
        const res = await axios.get("/contact");
        //console.log(res);
        if(res.data.status=='success'){
            this.setState({contacts:res.data.contacts});
            this.setState({loading:false});
            
        }
    
    }
    componentDidMount(){
        this.fetchContacts();
    }

    deleteContact =async  (id)=>{
        const res = await axios.delete(`/contact/${id}`);

        if(res.data.status=='success'){
           // this.props.history.push("/");
            this.fetchContacts();
        }
    }

    render() {
        if(this.state.loading==true){
            return <h1>Loading...</h1>
        }else{
            return(
                <div>
                    {this.state.contacts.map(contact=>(
                    <Contact contact={contact} key={contact.id} deleteContact={this.deleteContact}/>    
                    ))}
                </div>
            )
        }
    }    
}

export default Contacts
