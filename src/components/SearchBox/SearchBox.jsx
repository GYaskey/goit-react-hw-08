import { useId } from 'react';
import s from './SearchBox.module.css';

const SearchBox = () => {
  const searchId = useId();

  return (
    <div className={s.searchBox}>
      <label htmlFor="searchId" className={s.searchLabel}>
        Find contacts by name
      </label>
      <input
        type="text"
        placeholder="Type your request..."
        id={searchId}
        className={s.searchField}
      />
    </div>
  );
};

export default SearchBox;
