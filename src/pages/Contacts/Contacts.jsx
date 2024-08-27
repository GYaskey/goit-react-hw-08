import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import Loader from '../../components/Loader/Loader';
import ContactList from '../../components/ContactList/ContactList';
import {
  selectIsError,
  selectIsLoading,
} from '../../redux/contacts/contactSelectors';
import { fetchContactsThunk } from '../../redux/contacts/contactsOps';
import s from './Contacts.module.css';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Phone-book</h1>
      <div className={s.actionBox}>
        <ContactForm />
        <SearchBox />
      </div>
      <div>
        {isLoading && !isError && <Loader />}
        {isError ? <p>Something went wrong</p> : <ContactList />}
      </div>
    </div>
  );
};

export default Contacts;
