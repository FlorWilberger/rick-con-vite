
import SearchBar from "../searchBar/SearchBar.jsx";
import s from "./nav.module.css";



const Nav = (props) => {
    const { onSearch } = props;  //ejercicio5 y lo q esta dentro del searchbar
  return (
    <div className={s.barraDeNavegacion}>
        <SearchBar onSearch={onSearch}/> 
    </div>
  )
}
export default Nav
