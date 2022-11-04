import { useEffect, useState } from "react"
import { nanoid } from "nanoid"
import { ContactList } from "./ContactList/ContactList"
import { ContactForm } from "./ContactForm/ContactForm"
import { Filter } from "./Filter/Filter"
import { Wrap } from "./App.styled"
  

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      return JSON.parse(contacts);
    }
    return [];
  });
  const [filter, setFilter] = useState('');
  
    useEffect(() => {
    
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  const addFriend = ({ name, number }) => {
   const contact = {
    id: nanoid(),
    name,
    number,
    }
    if (contacts.length === 0) {
      setContacts([contact])
      
    } else{
    
    const isContact = contacts.find(friend => friend.name.toLowerCase())
    
    if (isContact.name.toLowerCase() === contact.name.toLowerCase()) {
      return alert(`${contact.name} is already in contacts.`)
      
    } else {
      // setContacts([contact, ...contacts])
contacts.find(friend => friend.name.toLowerCase() ===   contact.name.toLowerCase())
      ? alert(`${contact.name} is already in contacts.`)
      :setContacts([contact, ...contacts])
    }
      
    }
  }
  
  const changeFilter = (e) => {
  setFilter(e.currentTarget.value)
  }

  const getVisibleFriends = () => {
  const normalizedFilter = filter.toLowerCase()
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
;}

  const deleteFriend = (friendId) => {

    setContacts(contacts.filter(friend=> friend.id!== friendId))

return
  }


  return (
    <Wrap>
      <div>
        <h1>Phonebook</h1>
      <ContactForm onSubmit={addFriend} />
      
        </div>
      <div>
        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChange={changeFilter} />
        <ContactList
          contacts={getVisibleFriends()}
          onDelete={deleteFriend}
        />
      </div>
      </Wrap>)
}