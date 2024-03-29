import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.25rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 1rem;
    display: block;
`;
const Select = styled.select`
    width: 100%;
    display: block;
    padding: 0.5rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    border-radius: 0;
    background-color: #fff;
    font-size: 1.25rem;
    color: #000;
    margin-bottom: 1rem;
    &:focus {
        outline: none;
    }
`;

export const useCurrency = (label, initialState, currencies) => {
    const [currency, setCurrency] = useState(initialState);
    const select = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                value={currency}
                onChange={e => setCurrency(e.target.value)}
            >
                <option value="">Select Currency</option>
                {
                    currencies.map(currency => (
                        <option key={currency.value} value={currency.value}>{currency.name}</option>
                    ))
                }
            </Select>
        </Fragment>
    )
    return [currency, select, setCurrency]
}
