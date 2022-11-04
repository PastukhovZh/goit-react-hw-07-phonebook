import { nanoid } from "nanoid";
export const addContact = name => {
  return {
    type: "contacts/addContact",
    payload: {
      id: nanoid(),
      name,
    },
  };
};
export const deleteContact = contactId => {
  return {
    type: "contacts/deleteContact",
    payload: contactId,
  };
};