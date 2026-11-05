
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </label>
  );
}

export default SearchBox;
