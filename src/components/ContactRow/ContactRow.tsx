import { NavLink } from 'react-router-dom';
import { Contact } from '../../types/Contact';
import { UserContext } from "../../context/Context";
import { useContext } from "react";
import './ContactRow.scss';

type Props = {
  contact: Contact;
}

export const ContactRow: React.FC<Props> = ({ contact }) => {
  const { setCurrentId, setContacts, contacts } = useContext(UserContext);

  const deleteContact = (id: number) => {
    const filteredContacts = contacts.filter(
      (contact: Contact) => contact.id !== id)

    setContacts(filteredContacts);
  };

  const handleEditing = (id: number) => {
    setCurrentId(id);
  };

  return (
    <tr className="contact-row">
      <td className="contact-row_cell">{contact.name}</td>
      <td className="contact-row_cell">{contact.lastname}</td>
      <td className="contact-row_cell">{contact.address}</td>
      <td className="contact-row_cell">{contact.city}</td>
      <td className="contact-row_cell">{contact.country}</td>
      <td className="contact-row_cell">{contact.email.field1}</td>
      <td className="contact-row_cell">{contact.number.field1}</td>
      <td className="contact-row_cell">{
        <NavLink to="/newcontact">
          <button
            className="contact-row_button edit-button"
            onClick={() => handleEditing(contact.id)}
          >
            Edit
          </button>
        </NavLink>
      }</td>
      <td className="contact-row_cell">{
        <button
          className="contact-row_button delete-button"
          onClick={() => deleteContact(contact.id)}
        >
          Delete
        </button>
      }</td>
    </tr>
  )
}
