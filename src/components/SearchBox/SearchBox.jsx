import { useId } from 'react';
import s from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filterSlice';

const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  return (
    <div className={s.searchBox}>
      <label htmlFor="searchId" className={s.searchLabel}>
        Find contacts by name
      </label>
      <input
        value={filterValue}
        onChange={e => dispatch(changeFilter(e.target.value))}
        type="text"
        placeholder="Type your request..."
        id={searchId}
        className={s.searchField}
      />
    </div>
  );
};

export default SearchBox;
