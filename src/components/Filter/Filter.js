import { Input,Label } from "./Filter.styled"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import { findContact } from "redux/filtersSlise"









export const Filter = () => {

const dispatch = useDispatch()
    const handleChange = e => {
        return dispatch(findContact( e.target.value.toLowerCase()))
}
    
    return(<Label>
        Find contacts by name
        <Input type='name' onChange={handleChange}></Input>
    </Label>)
} 
Label.propTypes = {
    value: PropTypes.string,
}