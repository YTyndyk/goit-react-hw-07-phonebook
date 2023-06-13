import { useSelector, useDispatch } from 'react-redux';
import { deletContactsValue } from '../../redux/contactSlice';
import { getContactsValue, getFilterValue } from '../../redux/selectors';
import css from '../GlobalStyles.module.css';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsValue);
  const filter = useSelector(getFilterValue);

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );
  const onDeleteContact = contactId => {
    dispatch(deletContactsValue(contactId));
  };
  if (!filteredContacts?.length) {
    alert('No contacts matching your request');
  }
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p>{name}: </p>
          <p>{number}</p>
          <button
            onClick={() => onDeleteContact(id)}
            className={css.contactsBtn}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
