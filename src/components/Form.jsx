import React from 'react';
import styled from '@emotion/styled';

import { useCurrency } from '../hooks/useCurrency';
import { useCryptoCurrency } from '../hooks/useCryptocurrency';

const Button = styled.button`
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.2s;
    &:hover {
        background-color: #3e8e41;
        cursor: pointer; 
    }
`;

export const Form = () => {
    const currencies = [
        {
            name: 'USD',
            value: 'USD',
        },
        {
            name: 'EUR',
            value: 'EUR',
        },
        {
            name: 'GBP',
            value: 'GBP',
        }
    ];
    const [currency, Select] = useCurrency('Currency', 'USD', currencies);
    const [cryptoCurrency, SelectCryptoCurrency] = useCryptoCurrency('CryptoCurrency', 'BTC');
    return (
        <form>
            <Select />
            <SelectCryptoCurrency />
            <Button
                type="submit"
                value="Submit"
            >
                <i className="fas fa-plus"></i>
                <span>Add</span>
            </Button>
        </form>
    )
}
