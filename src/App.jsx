/*App manda las props a cards y card.  App recibe la info de:searchBar(boton) cuando hacemos click y de  CARDSSS (renderizara las CARD)
import Card from "./Card.jsx";
*/

//import Card from "./components/CARD/Card.jsx";
import Cards from './components/CARDS/Cards.jsx';
//import SearchBar from './components/searchBar/SearchBar.jsx';
//import characters, { Rick } from './data.js'; // por distractoring agarro solo lo de rick
import Nav from './components/NAV/Nav.jsx';
import { useState } from 'react';
import axios from "axios";
function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch=(id) =>{
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}
    const onClose=(id) =>{
     const newCharacters =characters.filter(personaje =>
      personaje.id !== parseInt(id));
      setCharacters(newCharacters)
      }
       
   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
        {/*<SearchBar   onSearch={(characterID) => window.alert(characterID)} />*/}
         <Cards characters={characters} onClose={onClose}/> 
      </div>
   );
      
      {
         /* comernto lo de abajo:
         <Card
          id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> 
      */ }
}



export default App;

