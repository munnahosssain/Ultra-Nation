import React from 'react';

const Country = (props) => {
    // console.log(props.countryInformation);
    const { name, region, flag } = props.countryInformation;
    const flagStyle = { width: '50px' }
    const countyStyle = { border: '1px solid red', margin: '5px' }
    const addCountry = props.addCountry;

    return (
        <div style={countyStyle}>
            <img style={flagStyle} src={flag} alt="" />
            <h4>This is : {name}</h4>
            <h5>This is : {region}</h5>
            <button onClick={() => addCountry(props.addCountry)} >Add Country</button>
        </div>
    );
};
export default Country;