import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import s from './SearchBox.module.css';
import { selectFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  return (
    <div className={s.searchBox}>
      <label htmlFor="searchId" className={s.searchLabel}>
        Find contacts
      </label>
      <input
        value={filterValue}
        onChange={e => dispatch(changeFilter(e.target.value))}
        type="text"
        placeholder="Type name or number..."
        id={searchId}
        className={s.searchField}
      />
    </div>
  );
};

export default SearchBox;
