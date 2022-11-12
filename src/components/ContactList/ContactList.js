import { FriendList, FriendItem, Button, Wrap, Item } from "./ContactList.styled"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getStatusFilter } from "redux/selectors";
import { deleteContact } from "redux/operations";

const getVisibleContact = (contacts, statusFilters) => {
    
    
    if (statusFilters === undefined) {
        statusFilters =''
    } 
    return contacts.items.filter(contact => contact.name.toLowerCase().includes(statusFilters.value));
    
      } 

export const ContactList = () => {

    const contacts = useSelector(getContacts);
    const statusFilter = useSelector(getStatusFilter);
    const visibleContacts = getVisibleContact(contacts, statusFilter);
    const dispatch = useDispatch();
    


        return(<FriendList>
        {visibleContacts.map(({ id, name, phone }) => 
        {
            const handleDelete = () => dispatch(deleteContact(id));
            return (
            <FriendItem key={id}>
                <Wrap>
                <Item>{name}</Item>
                <Item>{phone}</Item>
                </Wrap>
                <Button
                    type="button"
                    onClick={handleDelete}>Delete
                </Button>
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