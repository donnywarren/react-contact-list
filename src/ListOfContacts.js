import React from 'react';

function ListOfContacts(props) {
  return (
    <div>
      <div className="contact-main-container">
        {
          props.contacts.results.map(contact => (
            <div className="contact-card">
              <div className="photo">
                <img src={contact.picture.large} alt="photo"></img>
              </div>
              <div className="contact-data">
                <h2>{contact.name.first} {contact.name.last}</h2>
                <p>Home: {contact.phone}</p>
                <p>Mobile: {contact.cell}</p>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}
export default ListOfContacts