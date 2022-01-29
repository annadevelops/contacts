import React from "react";
import Contacts from "./contacts";
import Card from "./Card";
import contacts from "./contacts";


//this creates a Card when a contact is put into it - React always requires a key for repeating element because it creates a version of the DOM so the 'key' must be added to identify each component
function createCard(contact){
    return( <Card
    key={contact.id}
    id={contact.id}
    name={contact.name}
    img={contact.imgURL}
    email={contact.email}
    phone={contact.phone}
    />)
}

//App using Card to generate dynamic datas and information from contacts.js to populate the Cards
function App(props) {
 
    return(
        <div>
        <h1 className="heading">My Contacts</h1>

        {/*this .map() is using the .createCard() to map through contacts and create Card for each contact  */ }
        {contacts.map(createCard)}
        
        </div>
    )
  
}

export default App;
