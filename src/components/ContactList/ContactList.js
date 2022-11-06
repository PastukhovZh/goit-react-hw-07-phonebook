import { FriendList, FriendItem, Button, Wrap, Item } from "./ContactList.styled"
import PropTypes from "prop-types"
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
        //   console.log(vis)
        //   return  contacts.filter(contact =>console.log(contact.name))
          
        //   console.log(contacts.filter(contact =>console.log(statusFilters.value === contact.name)))
        //   console.log(statusFilters)
          
          return contacts.filter(contact => contact.name.toLowerCase().includes(statusFilters.value))
          
        //   switch (statusFilters) {
              
    // case statusFilters.value :
    // //   return contacts.filter(contact =>console.log(contact));
    //   return console.log('Hey')
    // default:
      return contacts;
//   }
;}

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