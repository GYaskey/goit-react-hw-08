import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsError, selectIsLoading } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContactsThunk } from '../redux/contactsOps';
import Loader from './Loader/Loader';

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div>
      <h1>Phone-book</h1>
      <div className="actionBox">
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

export default App;
