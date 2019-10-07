import React from 'react';
import './MultiSelect.styles.css';
import Multiselect from 'multiselect-dropdown-react';

const data = [{
    name: 'one',
    value: 'ستارخان'
},
{
    name: 'two',
    value: 'شیراز'
}];

const MultiSelectBox = (props) => {
    console.log(props)
    const result = (params) => {
        // console.log(params.length)
        if (params.length === 2) {
            console.log(params);

            props.onSubmitQuery('https://api.zhoon.ir/odata/CityFilterDto', 'filter', `CiyName eq ${params[0]} AND Areaname eq ${params[1]}`);
        }
    }
    return (
        <>
            <Multiselect options={data} onSelectOptions={result} />
        </>
    )
};

export default MultiSelectBox;