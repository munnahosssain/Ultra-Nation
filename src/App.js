// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {
    const [countries, setCountries] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            .then(error => console.log(error))
    }, [])

    const addCountry = (country) => {
        const newCart = [...cart, country];
        setCart(newCart);
    }

    return (
        <div className="App App-header">
            <h3>Country Loading : {countries.length}</h3>
            <h4>Country Added {cart.length}: </h4>
            <Cart cart={cart}></Cart>
            <ul>
                {
                    countries.map(country => <Country countryInformation={country} addCountry={addCountry}></Country>)
                }
            </ul>
        </div>

    );
}
export default App;
