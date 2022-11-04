import { FriendList, FriendItem, Button, Wrap, Item } from "./ContactList.styled"
import PropTypes from "prop-types"

export const ContactList = ({ contacts, onDelete }) => {
    return(<FriendList>
        {contacts.map(({id, name, number}) => (
            <FriendItem key={id}>
                <Wrap>
                <Item>{name}</Item>
                <Item>{number}</Item>
                </Wrap>
                <Button
                    type="button"
                    onClick={() => onDelete(id)}>Delete</Button>
                </FriendItem>
            )
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