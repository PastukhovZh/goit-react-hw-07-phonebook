import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/operations";
import { getContacts } from "redux/selectors";
import { Form, Label, Input, Button } from "./ContactForm.styled";


export const ContactForm = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')


    
    const handleChange = (e) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value)
                break;
            
            case 'number':
                setNumber(e.target.value)
                break;
        
            default:
                return;
        }
    }

    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
        const handleSubmit = e => {
            e.preventDefault()
            const name = e.target.elements.name.value;
            const number = e.target.elements.number.value;
            const data = { name, number }
            contacts.items.find(contact => contact.name.toLowerCase() === name.toLowerCase())
            ? alert(`${name} is already in contacts.`)
            :dispatch(addContact(data))  
            reset()
    }
    
    const reset = () => {
    setName('');
    setNumber('')
    }

     return (
            <Form onSubmit={handleSubmit}>
                <Label> Name  
                    <Input
                        onChange={handleChange}
                        value={name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </Label>
                <Label> Number
                    <Input
                        onChange={handleChange}
                        value={number}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </Label>
                <Button type="submit">Add friend</Button>
                
        </Form>)
}