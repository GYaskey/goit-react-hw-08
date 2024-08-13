import s from './Contact.module.css';
import { IoPerson } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';

const Contact = ({ contact }) => {
  return (
    <li className={s.contactItem}>
      <div className={s.contactInfo}>
        <p className={s.contactName}>
          <IoPerson />
          {contact.name}
        </p>
        <a href={`tel:${contact.number}`} className={s.contactLink}>
          <FaPhone />
          {contact.number}
        </a>
      </div>
      <button type="button" className={s.btn}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
