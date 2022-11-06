
const initialState = {
  contacts: [
    { id: 0, name: "Learn", number: 12345},
    { id: 1, name: "Get", number: 12345},
    { id: 2, name: "Master", number: 12345 },
    { id: 3, name: "Discover", number: 12345 },
    { id: 4, name: "Build", number: 12345 },
  ],
    filters: {value: ''},
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
        case "filters/setStatusFilter":
      return {
        ...state,
        filters: {
          ...state.filters,
          value: action.payload,
        },
      };
        default:
    return state
    }
    


}


// const filterInitialState = {
//       filters: '',
// }
// export const filterReducer = (state = filterInitialState, action) => {
//     switch (action.type) {
        
//         case 'filter/findContact':
//             return {
//                 ...state,
//                 contacts: state.contacts.filter(contact =>contact)
//             }
//         default:
//             return state
//     }
// }
