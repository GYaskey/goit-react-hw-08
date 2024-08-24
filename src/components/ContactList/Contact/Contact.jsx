import s from './Contact.module.css';
import { IoPerson } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../../redux/contactsOps';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContactThunk(id));
  };

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
      <button type="button" className={s.btn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
