import { useId } from 'react';
import s from './SearchBox.module.css';

const SearchBox = ({ setSearch, search }) => {
  const searchId = useId();

  return (
    <div className={s.searchBox}>
      <label htmlFor="searchId" className={s.searchLabel}>
        Find contacts by name
      </label>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        type="text"
        placeholder="Type your request..."
        id={searchId}
        className={s.searchField}
      />
    </div>
  );
};

export default SearchBox;
