import ContactsList from './ContactsList';
import Form from './ContactsForm';
import Filter from './Filter';
import css from './GlobalStyles.module.css';

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101',
      }}
    >
      <h1 className={css.title}>Phonebook</h1>
      <Form />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
export default App;
