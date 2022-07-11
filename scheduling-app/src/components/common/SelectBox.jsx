import React from 'react';

function SelectBox(props) {
    
    return (
        <div>
            <select>
            <option>{}</option>
            {props.options && props.options.map()}
            </select>
        </div>
    );
}

export default SelectBox;

// <SelectBox options={[1,2,3,4]}/>
