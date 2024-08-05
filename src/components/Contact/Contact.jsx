
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import s from "../ContactList/ContactList.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.itemcont}>
      <span><FaUser /> {name}</span>
      <span><FaPhoneAlt /> {number}</span>
      <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

export default Contact;
