

import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from './ContactList.module.css';
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
const filter=useSelector(selectNameFilter);
const filterLower=filter.toLowerCase();
const filteredData=contacts.filter(item=>item.name.toLowerCase().includes(filterLower));

  return (
    <>
        <p className={s.contacts}>Contacts</p>
        <ul className={s.list}>
      {filteredData.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
    </>

  );
};

export default ContactList;