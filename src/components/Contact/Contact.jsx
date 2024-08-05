
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import s from "../ContactList/ContactList.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { RiDeleteBin5Line } from "react-icons/ri";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>

    <li className={s.itemcont}>
      <span className={s.name}> {name}</span>
      <span className={s.number}> {number}</span>
      <button className={s.btn} onClick={() => dispatch(deleteContact(id))}><RiDeleteBin5Line /></button>
    </li>
    </>
  );
};

export default Contact;
