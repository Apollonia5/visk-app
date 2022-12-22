import { useContext, useState } from "react";
import { UserContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { Bush, Contact } from "../../types/Contact";
import './ContactPage.scss';

export const ContactPage = () => {
  const { contacts, setContacts, currentId, setCurrentId } = useContext(UserContext);
  let currContact: Contact = {
    id: 0,
    name: '',
    lastname: '',
    address: '',
    city: '',
    country: '',
    email: { field1: '' },
    number: { field1: '' },
  }

  let id = contacts ? contacts.length + 1 : 0;

  if (+currentId !== 0) {
    currContact = contacts.find(contact => contact.id === +currentId)!;
    id = +currentId;
  }

  const [name, setName] = useState(currContact?.name || '');
  const [lastname, setLastName] = useState(currContact?.lastname || '');
  const [address, setAddress] = useState(currContact?.address || '');
  const [city, setCity] = useState(currContact?.city || '');
  const [country, setCountry] = useState(currContact?.country || '');
  const [emails, setEmails] = useState<Bush>(currContact?.email || { field1: '' });
  const [numbers, setNumbers] = useState<Bush>(currContact?.number || { field1: '' });

  const handleEmailChange = (e: any) => {
    setEmails(prevState => ({...prevState, [e.target.name]: e.target.value}))
  }

  const handleTelChange = (e: any) => {
    setNumbers(prevState => ({...prevState, [e.target.name]: e.target.value}))
  }

  const handleAddEmailField = () => {
    const input = document.createElement("input");
    const field = `field${Object.keys(emails).length + 1}`;
    setEmails(prevState => ({...prevState, [field]: ''}))
    input.type = "email";
    input.name = field;
    input.className = "form-control";
    input.placeholder = "Enter the Email";
    input.value = emails[field] || '';
    input.onchange = handleEmailChange;
    const parent = document.getElementById("emailsBlock");
    parent!.appendChild(input);
  }

  const handleAddTelField = () => {
    const input = document.createElement("input");
    const field = `field${Object.keys(numbers).length + 1}`;
    setNumbers(prevState => ({...prevState, [field]: ''}));
    input.type = "tel";
    input.name = field;
    input.className = "form-control";
    input.placeholder = "Enter the Number";
    input.value = numbers[field] || '';
    input.onchange = handleTelChange;
    const parent = document.getElementById("telBlock");
    parent!.appendChild(input);
  }

  let navigate = useNavigate(); 

  const createNewContact = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    
    const newContact = {
      id,
      name,
      lastname,
      address,
      city,
      country,
      email: emails,
      number: numbers,
    }

    if (newContact.name && newContact.lastname && newContact.email) {
      if (currentId) {
        const newArr = contacts.map((contact: Contact) => {
          if (contact.id === +currentId) {
            return newContact;
          } else {
            return contact;
          }
        });
  
        setContacts(newArr);
      } 
      if (!(+currentId)) {
        setContacts([...contacts, newContact]);
      }
      setCurrentId(0);
      navigate("/");
    } else {
      alert('Please check your name, last name and email')
    }
  }

  return (
    <div className="contact-page">
      <h1>Register new contact</h1>

      <form className="contact-page_form">
        <div className="contact-page_form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter the Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="contact-page_form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Last Name"
            value={lastname}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </div>
        <div className="contact-page_form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
          />
        </div>
        <div className="contact-page_form-group">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            required
          />
        </div>
        <div className="contact-page_form-group">
          <label>Country</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            required
          />
        </div>
        <div className="contact-page_form-group">
          <div id="emailsBlock" className="special-block">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter the Email"
              name="field1"
              value={emails.field1}
              onChange={handleEmailChange}
              required
            />
          </div>

          <button
            className="contact-page_button  contact-page_addButton"
            type="button"
            onClick={handleAddEmailField}
          >
            Add
          </button>
        </div>
        <div className="contact-page_form-group">
          <div id="telBlock" className="special-block">
            <label>Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter the Number"
              name="field1"
              value={numbers.field1}
              onChange={handleTelChange}
              required
            />
          </div>

          <button
            className="contact-page_button contact-page_addButton"
            type="button"
            onClick={handleAddTelField}
          >
            Add
          </button>
        </div>
        <button
          type="submit"
          onClick={createNewContact}
          className="contact-page_button"
        >
          Save
        </button>
      </form>
    </div>
  )
}
