
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addContact } from '../../redux/contactsSlice';
import PropTypes from 'prop-types';

function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (!name.trim() || !number.trim()) {
      return;
    }

    dispatch(addContact(name, number));

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          value={number}
          onChange={event => setNumber(event.target.value)}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {};

export default ContactForm;
