import { useId} from "react";
import s from './SearchBox.module.css'
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = ()=>{
  const dispatch=useDispatch();

  const idishki=useId();

  return (
    <div className={s.form}>
    <label htmlFor={idishki}>Find contacts by name</label>
    <input onChange={(e)=>dispatch(changeFilter(e.target.value))} className={s.input}name="text" id={idishki}></input>
    </div>
  )
};

export default SearchBox;
