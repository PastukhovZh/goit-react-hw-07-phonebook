import { Input,Label } from "./Filter.styled"
import PropTypes from "prop-types"


export const Filter = ({ onChange, value }) => {
    return(<Label>
        Find contacts by name
        <Input type='name' value={value} onChange={onChange}></Input>
    </Label>)
} 

Label.propTypes = {
    value: PropTypes.string,
}