import logo from './logo.svg';
import './App.css';

function App() {
  {/* • U komponentu postaviti niz objekata koji predstavlja niz od 5 proizvoljnih životinja. 
  Svaka životinja treba da ima:
  - vrstu
  - ime
  - datum rođenja ( new Date() )
  • `AnimalList` treba da prikaže sve životinje dodate u listu. Prikazati sva tri polja u tabeli. */}

  const animalArray = [{ type: 'mammal', name: 'Elephant', dateOfBirth: new Date().toLocaleDateString() },
  { type: 'mammal', name: 'Lion', dateOfBirth: new Date().toLocaleDateString() },
  { type: 'bird', name: 'Pigeon', dateOfBirth: new Date().toLocaleDateString() },
  { type: 'insect', name: 'Ant', dateOfBirth: new Date().toLocaleDateString() },
  { type: 'reptile', name: 'Turtle', dateOfBirth: new Date().toLocaleDateString() },
  ]


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
              <td key={animal.dateOfBirth + index}>{animal.dateOfBirth}</td>
            </tr>

          ))}
        </tbody>

      </table>
    </div >
  );
}

export default App;
