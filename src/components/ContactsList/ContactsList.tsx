import { UserContext } from "../../context/Context";
import { useContext } from "react";
import { ContactRow } from "../ContactRow";
import './ContactsList.scss';

export const ContactsList = () => {
  const { contacts } = useContext(UserContext);

  return (
    <div className="contacts-list">
      <table className="contacts-list_table">
        <tbody className="contact-list_body">
          <tr className="contacts-list_titles">
            <th>Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Country</th>
            <th>Email</th>
            <th>Number</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {contacts.length > 0 &&
             contacts.map(contact => (
              <ContactRow contact={contact} key={contact.id} />
              ))
          }
        </tbody>
      </table>
    </div>
  );
};
