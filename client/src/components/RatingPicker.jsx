import React from 'react';
import PropTypes from 'prop-types';

const RatingPicker = ({value, onChange, options}) => (
    <span>
        <h1>{value}</h1>
        <select onChange={e => onChange(e.target.value)}
                value={value}>
            {options.map(option =>
                <option value={option} key={option}>
                    {option}
                </option>)
            }
        </select>
    </span>
);

RatingPicker.Proptypes = {
    options: PropTypes.arrayOf(
        PropTypes.number.isRequired
    ).isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default RatingPicker;