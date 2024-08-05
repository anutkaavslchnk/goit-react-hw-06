import { useEffect, useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import firstVal from './values.json';
import { nanoid } from 'nanoid';

const App = () => {


  const [values, setValues] = useState(firstVal);
  useEffect(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    if (savedContacts) {
      setValues(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(values));
  }, [values]);


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm  />
      <SearchBox />
      <ContactList

      />
    </div>
  );
};

export default App;
