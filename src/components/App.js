import { ContactList } from "./ContactList/ContactList"
import { ContactForm } from "./ContactForm/ContactForm"
import { Filter } from "./Filter/Filter"
import { Wrap } from "./App.styled"
  

export const App = () => {

  return (
    <Wrap>
      <div>
        <h1>Phonebook</h1>
      <ContactForm />
        </div>
      <div>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList />
      </div>
      </Wrap>)
}