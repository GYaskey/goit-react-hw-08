import s from './Contact.module.css';
import { IoPerson } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contactSlice';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.contactItem}>
      <div className={s.contactInfo}>
        <p className={s.contactName}>
          <IoPerson />
          {name}
        </p>
        <a href={`tel:${number}`} className={s.contactLink}>
          <FaPhone />
          {number}
        </a>
      </div>
      <button
        type="button"
        className={s.btn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
