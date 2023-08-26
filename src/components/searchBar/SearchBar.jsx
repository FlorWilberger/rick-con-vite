//LA FUNCION ONSEARCH SE DEBE EJECTUR CUANDO SE HAGA CLICK EN EL BOTON
//SEARCHBAR NOS PERMITIRA BUSCAR Y AGREGAR PERSONAJES
import s from './SearchBar.module.css'
import { useState } from 'react';
export default function SearchBar(props) { //{onSearch}
  const { onSearch } = props;
  const[id,setId]=useState('')
  const handleChange=(event)=>{
   setId(event.target.value);
     //console.log(id) // podemos ver en la consola de la web los id q vamos escribiendo
  }
   return (
      <div className={s.miBarra}>
         <input  className={s.miInput}type='search' placeholder='escriba aqui' onChange={handleChange} value={id} />
         <button className={s.miBoton} onClick={()=>onSearch(id)}>Agregar</button> 
      </div>
   );
}
/* exports default function SearchBar({onSearch}) {
const handleSearch = () => {    //funcion q toma el valor de un input y lo retorna 
   const valorDelInput= document.getElementById('mi input')
onSearch(valorDelInput.value)

inputSearch.value='' eso es para borrar una vez q lleno mi input 
}
 <div>
         <input id="mi input" type='search' />
         <button onClick={()=> {onSearch()}} >Agregar</button> 
         debo hacer un arrow function en onClick para q no sea una ejecucion constante, es decir si yo a on click le paso solo onSeach(id), cuando yo pongo el id me va a aprecer la tarjeta reiteradas veces
      </div>
   );
*/