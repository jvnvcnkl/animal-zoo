import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


const ANIMALS = [{ type: 'mammal', name: 'Elephant', dateOfBirth: new Date().toLocaleDateString() },
{ type: 'mammal', name: 'Lion', dateOfBirth: new Date().toLocaleDateString() },
{ type: 'bird', name: 'Pigeon', dateOfBirth: new Date().toLocaleDateString() },
{ type: 'insect', name: 'Ant', dateOfBirth: new Date().toLocaleDateString() },
{ type: 'reptile', name: 'Turtle', dateOfBirth: new Date().toLocaleDateString() },
{ type: 'insect', name: 'Bee' },
]


function App() {
  {/* • U komponentu postaviti niz objekata koji predstavlja niz od 5 proizvoljnih životinja. 
  Svaka životinja treba da ima:
  - vrstu
  - ime
  - datum rođenja ( new Date() )
  • `AnimalList` treba da prikaže sve životinje dodate u listu. Prikazati sva tri polja u tabeli. */}




  const [animalArray, setAnimal] = React.useState(ANIMALS)



  const handleClick = (animalIndex) => {

    setAnimal(animalArray.filter((animal, index) => animalIndex !== index))
  }

  return (
    <div className="App">
      <table name='animal-table'>
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Date of Birth</th> </tr>
        </thead>
        <tbody>
          {animalArray.map((animal, index) => (
            <tr>
              <td key={animal.type + index}>{animal.type}</td>

              <td key={animal.name + index}>{animal.name}</td>
              <td key={animal.dateOfBirth + index}>{animal.dateOfBirth ? animal.dateOfBirth : 'Unkown'}</td>
              <button onClick={e => handleClick(index)}> Remove</button>
            </tr>

          ))}
        </tbody>

      </table>
    </div >
  );
}

export default App;
