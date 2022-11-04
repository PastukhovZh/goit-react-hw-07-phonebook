const { default: statusFilters } = require("./constants");


const initialState = {
  contacts: [
    { id: 0, name: "Learn HTML and CSS",},
    { id: 1, name: "Get good at JavaScript",},
    { id: 2, name: "Master React", },
    { id: 3, name: "Discover Redux", },
    { id: 4, name: "Build amazing apps", },
  ],
  filters: {status: 'all'},
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'contacts/addContact':
            return {
                ...state,
                contacts:[...state.contacts, action.payload]
            }
        case 'contacts/deleteContact':
            return {
                ...state,
                contacts:state.contacts.filter(contacts=>contacts.id !== action.payload)
            }
        
        default:
    return state
    }
    


}