import React, { useState } from 'react';
import './MultiSelect.styles.css';
import Multiselect from 'multiselect-dropdown-react';

const data = [{
    name: 'ناحیه : ستارخان',
    value: 'ستارخان'
},
{
    name: 'شهر : شیراز',
    value: 'شیراز'
}];

const MultiSelectBox = (props) => {
    const [arr, setArr] = useState([]);
    const result = (params) => {
        setArr(params);
    }
    const getResult = (params) => {
        props.onSubmitQuery('https://api.zhoon.ir/odata/CityFilterDto', 'filter', `CiyName eq '${params[0]}' and Areaname eq '${params[1]}'`);
    };
    return (
        <>
            <Multiselect options={data} onSelectOptions={result} />
            <button className='select-btn' onClick={() => getResult(arr)}>Get</button>
        </>
    )
};

export default MultiSelectBox;