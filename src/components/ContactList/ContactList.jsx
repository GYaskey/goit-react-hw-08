import { useSelector } from 'react-redux';
import Contact from './Contact/Contact';
import s from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/filters/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.contactList}>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
