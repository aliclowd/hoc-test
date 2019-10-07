import React, { useState } from 'react';
import './SearchByName.styles.css';

const SearchByName = (props) => {
    console.log('hoc props: ', props);
    const [name, setName] = useState('');
    const handleChange = (e) => {
        let val = e.target.value;
        setName(val);
        props.onSubmitQuery('pathToApi/customers/', 'filter', `name eq ${val}`);
    };
    return (
        <div className='input-container'>
            <input className='input' placeholder='search by name' onChange={handleChange} value={name} />
        </div>
    )
};

export default SearchByName;