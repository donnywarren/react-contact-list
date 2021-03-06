import React from 'react';
import './App.css';
import contacts from "./data/contacts.json"
import ListOfContacts from "./ListOfContacts.js"


function App() {
  return (
    <div className="App">
      <h1>Contact List</h1>
      <ListOfContacts contacts={contacts} />
    </div>
  );
}

export default App;
