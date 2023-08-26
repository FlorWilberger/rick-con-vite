import s from "./Card.module.css"
const Card=(props)  => {
    //props es lo que esta dentro de card en el archivo app.  es un objeto
   return ( //mi componente card es un elem jsx q retornara la sig plantilla
      <div className={s.contenedorCarta}>
         <button className={s.miBoton} onClick={() => props.onClose(props.id)}>X</button>
         <h2 className={s.name}> Nombre:{props.name}</h2>
         <h2 className={s.estado}> Status:{props.status}</h2>
         <h2 className={s.specie}>species:{props.species}</h2>
         <h2 className={s.origin}> origin:{props.origin.name}</h2>
         <img className={s.image} src={props.image} alt= "" />
          
         
      </div>
   );
}
export default Card
/* otra forma es usar discractoring .la parte de la fn queda igual 
  const Card =(props)=>{
   const {name,status,species,origin, etc} =props;
y luego en <h2>{name}</h2> , on click={onClose}
 essoto puede ir en alt de la img 'No se encientra la de imagen del personaje ${name}'
*/