import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import contactList from '../assets/contacts.json';
import { useState } from 'react';

const initialState = contactList;

const App = () => {
  const [contacts, setContacts] = useState(initialState);

  return (
    <div>
      <h1>Phone-book</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
