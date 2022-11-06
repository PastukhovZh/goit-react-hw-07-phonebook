import { Input,Label } from "./Filter.styled"
import PropTypes from "prop-types"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getStatusFilter } from "redux/selectors"
import { findContact } from "redux/actions"


// export const Filter = () => {
//     return(<Label>
//         Find contacts by name
//         {/* <Input type='name' value={value} onChange={onChange}></Input> */}
//     </Label>)
// } 

// export const Filter = ({ onChange, value }) => {
//     return(<Label>
//         Find contacts by name
//         <Input type='name' value={value} onChange={onChange}></Input>
//     </Label>)
// } 

Label.propTypes = {
    value: PropTypes.string,
}





export const Filter = () => {

//     const filler = useSelector(state => console.log(state.filters))
// console.log(filler)
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
