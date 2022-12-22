import { ContactsList } from "../../components/ContactsList";
import { NavLink } from 'react-router-dom';
import './ContactsPage.scss';

export const ContactsPage = () => {
  return (
    <div className="contacts-page">
      <div className="contacts-page_panel">
        <h1>Contacts</h1>

        <NavLink to="/newcontact" className="contacts-page_button">
          <div>
            Add Contact
          </div>
        </NavLink>
        
        </div>

      <ContactsList />
    </div>
  )
}
