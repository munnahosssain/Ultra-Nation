import React from 'react';

const Country = (props) => {
    // console.log(props.countryName);
    return (
        <div>
            <h4>This is : {props.countryName}</h4>
        </div>
    );
};

export default Country;