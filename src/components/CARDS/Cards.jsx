import Card from '../CARD/Card';
import s from "./Cards.module.css";
export default function Cards(props) { //direc puedo usar discractoring y no crear el const de abajo . es decir en vez de props {characters}
const{characters,onClose}=props
     return(
     <div className={s.contenedorPrincipal}>
{ characters.map((personaje) =>
 
<Card
id={personaje.id}
key={personaje.id}
name={personaje.name}
status={personaje.status}
species={personaje.species}
gender={personaje.gender}
origin={personaje.origin.name}
image={personaje.image}
onClose={onClose}
/>
)}
</div>
)
}
{/*el componente cardS le pasa a CARd lo que ponemos dentro <> */}
