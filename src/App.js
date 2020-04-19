import React from 'react';
import './App.css';
import Person from './Person/Person.js';
import { useState } from 'react';

function App() {
  const [peopleState, setPeopleState ] = useState({
    people: [
      { name: 'Mantas', age: 26 },
      { name: 'Jonas', age: 27 },
      { name: 'Shaun', age: 30 }
    ]
  });

  const [otherState, setOtherState ] = useState('some othe value');

  console.log(peopleState);

  const switchState = () => {
    setPeopleState({
      people: [
        { name: 'Mantaz', age: 26 },
        { name: 'Jonaz', age: 27 },
        { name: 'Shaunaz', age: 30 }
      ]
    });
  };

  const changeName = (event) => {
    setPeopleState({
      people: [
        { name: 'Mantaz', age: 26 },
        { name: event.target.value, age: 27 },
        { name: 'Shaunaz', age: 30 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>cia yra React Hooks</h1>
      <Person name={peopleState.people[0].name} age={peopleState.people[0].age} />
      <Person name={peopleState.people[1].name} age={peopleState.people[1].age} changed={changeName}/>
      <Person name={peopleState.people[2].name} age={peopleState.people[2].age} />
      <button onClick={switchState}> Switch state </button>
    </div>
  );
}

export default App;
