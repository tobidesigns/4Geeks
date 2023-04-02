import React, { createContext, useState } from "react";

export const ContactContext = createContext(
const [contacts, setContacts] = useState('default');

    contactsArray = [
  {
    id: 1,
    name: "John Doe",
    "email address": "johndoe@gmail.com",
    phoneNumber: "555-555-1122",
  }],
  [{
    id: 1,
    name: "John Doe",
    "email address": "johndoe@gmail.com",
    phoneNumber: "555-555-1122",
  },
])

function application () {


function addNewContact (props) {
    const newContact = {}
    newContact = document.getElementById("contact")
    setContacts([{...contacts, newContact}])
};
}