import React from 'react';
import "./index.css"

class FinalProj extends React.Component {

constructor(props){

    super(props);

    this.state = {

        contacts: [],

        profile: {}
    
    };

}

componentDidMount()

{

  this.getProfile();

  this.getContacts();

}

add = (event) => {

    event.preventDefault();

        fetch('http://plato.mrl.ai:8080/contacts/add',
        
            {

                method: 'POST',

                body: JSON.stringify({

                    name: this.refs.name.value,

                    number: this.refs.number.value

                    }
                
                ),

                headers: {"Content-type": "application/json", API: "williams"}

            }

        )

        

        .then(res => {return res.json() })

        .then(() => {

            this.getProfile();

            this.getContacts();

        });

}

remove = (index) => {

    //event.preventDefault();

        fetch('http://plato.mrl.ai:8080/contacts/remove',
        
            {

                method: 'POST',

                body: JSON.stringify({

                    position: index

                    }
                
                ),

                headers: {"Content-type": "application/json", API: "williams"}

            }

        )

        

        .then(res => {return res.json() })

        .then(() => {

            this.getProfile();

            this.getContacts();

        });

}

//fetch profile data from API
getProfile() {
    window.fetch("http://plato.mrl.ai:8080/profile", {

      headers: { API: "williams" }

    })

      .then((res) => res.json())

      .then((data) => {

        this.setState({ profile: data});

        console.log(data)

      });

  }

//fetch contact data from API

getContacts() {

    window.fetch("http://plato.mrl.ai:8080/contacts", {

      headers: { API: "williams" }

    })

      .then((res) => res.json())

      .then((data) => {

        this.setState({ contacts: data.contacts });

        console.log(data)

      });
  }
    render() {

        return(

            <div>
                
                <h1> Contact Tracker </h1>

                    <div className = "containerMain">

                    <div className = "mainProfile">

                        <h2> Your Profile </h2>

                            <div className = "container1">

                            <p>{this.state.profile.name}</p>

                            <p>{this.state.profile.count}</p>

                        </div>

                    </div>
            <br />

            <div className = "container2">

                <fieldset className = "contactList">

                    <h2>Your Contacts</h2>

                    {this.state.contacts.map((value, index)=>{

                        return(
                            <fieldset className = "contact">

                                <h3> {value.name} </h3>

                                    <p> {value.number} </p>

                                    <div className = "removeButton">

                                        <button type = "submit" 
                                        
                                        onClick = {() => this.remove(index)} id = {index}>

                                        Delete Contact

                                    </button>

                                </div>

                            </fieldset>

                        )

                    })}

                </fieldset>

            </div>

            
    <div className = "container3">

            <fieldset className = "contactForm">

                <h2>Add Your Contact Info!</h2>
                
                <div className ="inputField">

                    <form onSubmit = {this.add}>

                        <input ref = "name" type = "text" placeholder = "Please Enter Contact Name" size = "40" />

                        <br/>

                        <input ref = "number" type = "text" placeholder = "Please Enter Phone Number" size = "40" />

                        <br/>

                        <button type = "submit"> Add To List </button>

                    </form>

                </div>


            </fieldset>

        </div>

    </div>

</div>

        )

    }
}

export default FinalProj;