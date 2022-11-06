import { Input,Label } from "./Filter.styled"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import { findContact } from "redux/actions"









export const Filter = () => {

const dispatch = useDispatch()
    const handleChange = e => {
        const gru = e.target.value
        return dispatch(findContact(gru))
     
}
    

    return(<Label>
        Find contacts by name
        <Input type='name' onChange={handleChange}></Input>
    </Label>)
} 
Label.propTypes = {
    value: PropTypes.string,
}