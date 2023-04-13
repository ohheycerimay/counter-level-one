import React, { useState} from 'react';
import Counter from './components/Counter';
import './App.css';

const App = () => {
  // const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [people, setPeople] = useState([
    { name: 'John', latitude: 37.7749, longitude: -122.4194, clickCount: 0 },
    { name: 'Jane', latitude: 40.7128, longitude: -74.0060, clickCount: 0 },
    { name: 'Bob', latitude: 51.5074, longitude: -0.1278, clickCount: 0 },
  ]);
  const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const { latitude, longitude } = position.coords;
  //       setLocation({ latitude, longitude });
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }, []);

  // const handleAddPerson = () => {
  //   const name = prompt('Enter name:');
  //   if (name) {
  //     setPeople((prevPeople) => [...prevPeople, { name, ...location, clickCount: 0 }]);
  //   }
  // };

  // const handleSetCurrentUser = (index) => {
  //   setCurrentUser(index);
  // };

  const handleIncrementClickCount = () => {
    setPeople((prevPeople) => {
      const updatedPeople = [...prevPeople];
      updatedPeople[currentUser].clickCount += 1;
      return updatedPeople;
    });
  };

  const handleCountUpdate = (index) => {
    setPeople((prevPeople) => {
      const newPeople = [...prevPeople];
      newPeople[index].count = (newPeople[index].count || 0) + 1;
      return newPeople;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Level One Counter</h1>
      </header>
      <main>
        {/* <GeolocationTable data={people} /> */}
        <Counter onClick={handleIncrementClickCount} onCountUpdate={handleCountUpdate} />
        {/* <button onClick={handleAddPerson}>Add Person</button>
        <p>Current user: {currentUser !== null ? people[currentUser].name : 'None'}</p>
        <ul>
          {people.map((person, index) => (
            <li key={person.name}>
              <button onClick={() => handleSetCurrentUser(index)}>{person.name}</button> - {person.clickCount} clicks
            </li>
          ))}
        </ul> */}
      </main>
    </div>
  );
};

export default App;
