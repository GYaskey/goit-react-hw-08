import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import contactList from '../assets/contacts.json';
import { useEffect, useState } from 'react';
import './App.css';
import { nanoid } from 'nanoid';

const initialState = contactList;

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('localContacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return initialState;
  });

  const [search, setSearch] = useState('');

  const handleDeleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const handleAddContact = contact => {
    setContacts(prev => [...prev, { ...contact, id: nanoid() }]);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('localContacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phone-book</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox search={search} setSearch={setSearch} />
      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
