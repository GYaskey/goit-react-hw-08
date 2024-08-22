import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';

import './App.css';

const App = () => {
  return (
    <div>
      <h1>Phone-book</h1>
      <div className="actionBox">
        <ContactForm />
        <SearchBox />
      </div>
      <div>
        <ContactList />
      </div>
    </div>
  );
};

export default App;
