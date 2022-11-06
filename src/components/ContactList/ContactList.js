import { FriendList, FriendItem, Button, Wrap, Item } from "./ContactList.styled"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getStatusFilter } from "redux/selectors";
import { deleteContact } from "redux/contactsSlice";

const getVisibleContact = (contacts, statusFilters) => {
          return contacts.contacts.filter(contact => contact.name.toLowerCase().includes(statusFilters.filters.value));
      }

export const ContactList = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(getContacts);
    const statusFilter = useSelector(getStatusFilter);
    const visibleContacts = getVisibleContact(contacts, statusFilter);

    
    return(<FriendList>
        {visibleContacts.map(({ id, name, number }) => 
        {
            const handleDelete = () => dispatch(deleteContact(id))
            return (
            <FriendItem key={id}>
                <Wrap>
                <Item>{name}</Item>
                <Item>{number}</Item>
                </Wrap>
                <Button
                    type="button"
                    onClick={handleDelete}>Delete</Button>
                </FriendItem>
            )}
        )}
    </FriendList>)
}


FriendList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            number: PropTypes.number.isRequired,
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
    ),
}