import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';

function App() {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            .then(error => console.log(error))
    }, [])
    return (
        <div className="App App-header">
            <h3>Country Loading: {countries.length}</h3>
            <ul>
                {
                    countries.map(country => <Country countryName={country.name}></Country>)
                }
            </ul>
        </div>

    );
}

export default App;
