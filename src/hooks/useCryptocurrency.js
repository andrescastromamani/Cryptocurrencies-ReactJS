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

export const useCryptoCurrency = (label, initialState, options) => {
    const [cryptoCurrency, setCryptoCurrency] = useState(initialState);
    const selectCrypto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                value={cryptoCurrency}
                onChange={e => setCryptoCurrency(e.target.value)}
            >
                <option value="">Select CryptoCurrency</option>
                {
                    options.map(option => (
                        <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
                    ))
                }
            </Select>
        </Fragment>
    )
    return [cryptoCurrency, selectCrypto, setCryptoCurrency]
}