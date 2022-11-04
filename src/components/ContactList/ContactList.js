import { FriendList, FriendItem, Button, Wrap, Item } from "./ContactList.styled"
import PropTypes from "prop-types"
import statusFilters from "redux/constants"
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getStatusFilter } from "redux/selectors";
import { deleteContact } from "redux/actions";

// export const ContactList = ({ contacts, onDelete }) => {
//     return(<FriendList>
//         {contacts.map(({id, name, number}) => (
//             <FriendItem key={id}>
//                 <Wrap>
//                 <Item>{name}</Item>
//                 <Item>{number}</Item>
//                 </Wrap>
//                 <Button
//                     type="button"
//                     onClick={() => onDelete(id)}>Delete</Button>
//                 </FriendItem>
//             )
//         )}
//     </FriendList>)
// }

      const getVisibleContact = (contacts, statusFilters) => {
//   const normalizedFilter = contacts.toLowerCase()
//     return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
          
          switch (statusFilters) {
            //   ERUNDA!!!!
    case statusFilters.active:
      return contacts.filter(task => !task.completed);
    case statusFilters.completed:
      return contacts.filter(task => task.completed);
    default:
      return contacts;
  }
;}

export const ContactList = () => {
    const dispatch = useDispatch()





const contacts = useSelector(getContacts);
const statusFilter = useSelector(getStatusFilter);
const visibleContacts = getVisibleContact(contacts, statusFilter);
    
    return(<FriendList>
        {visibleContacts.map(({ id, name }) => 
        {const handleDelete = ()=>dispatch(deleteContact(id))
            return (
            <FriendItem key={id}>
                <Wrap>
                <Item>{name}</Item>
                {/* <Item>{number}</Item> */}
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