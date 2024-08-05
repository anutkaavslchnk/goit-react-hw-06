import { useEffect, useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import firstVal from './values.json';
import { nanoid } from 'nanoid';

const App = () => {
  const [valueFind, setValueFind] = useState('');

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

  const handleInputChange = e => {
    setValueFind(e.target.value);
  };

  const handleAddCard = (name, number) => {
    const newId = nanoid();
    const newCard = { id: newId, name, number };
    setValues(prev => [...prev, newCard]);
  };

  const handleDeleteCard = id => {
    setValues(prev => prev.filter(item => item.id !== id));
  };

  const filteredContacts = values.filter(contact =>
    contact.name.toLowerCase().includes(valueFind.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleAddCard={handleAddCard} />
      <SearchBox valueFind={valueFind} handleInputChange={handleInputChange} />
      <ContactList
        items={filteredContacts}
        handleDeleteCard={handleDeleteCard}
      />
    </div>
  );
};

export default App;
