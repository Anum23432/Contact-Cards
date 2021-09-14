import './App.css';
import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUsers(data.results);
      });
  }, [])

  return (
    <>
    <h1>Contact List</h1>
      {users.map(user => (
        <Main
          image={user.picture.large}
          name={user.name.first + "" + user.name.last}
          email={user.email}
          nationality={user.nat}
          age={user.dob.age}
        />
      ))}
    </>
  );
}

export default App;
