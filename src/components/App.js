import { ContactList } from "./ContactList/ContactList"
import { ContactForm } from "./ContactForm/ContactForm"
import { Filter } from "./Filter/Filter"
import { Wrap } from "./App.styled"
import { useDispatch, useSelector } from "react-redux"
import { getError, getIsLoading } from "redux/selectors"
import { useEffect } from "react"
import { fetchContacts } from "redux/operations"
  

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading)
  const error = useSelector(getError)

    useEffect(() => {
    dispatch(fetchContacts())
    }, [dispatch])
  
  return (
    <Wrap>
      <div>
        <h1>Phonebook</h1>
      <ContactForm />
      </div>
      
      <div>
        <h2>Contacts</h2>
        <Filter />
        <div>
      {isLoading && !error && <b>Request in progress...</b>}
      </div>
        <ContactList />
      </div>
      </Wrap>)
}