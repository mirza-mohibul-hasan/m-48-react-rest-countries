import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Header></Header>
      <Countries></Countries>
    </div>
  );
}
/* function LoadCountries() {
  const [countries, setCountries] = useState([])
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => setCountries(data));
  return(
    <div>
      <h1>Let's visit the world</h1>
      <h4>Number of countries: {countries.length}</h4>
      {
        countries.map(country => <DisplayCountries name = {country.name.common}></DisplayCountries>)
      }
  </div>
  )
}
function DisplayCountries(props) {
  return(
    <div>
        <h1>Name:{props.name}</h1>
    </div>
  )
} */

export default App;
