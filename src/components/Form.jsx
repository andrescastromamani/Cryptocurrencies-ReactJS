import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

import { useCurrency } from '../hooks/useCurrency';
import { useCryptoCurrency } from '../hooks/useCryptocurrency';
import { Error } from './Error';

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

export const Form = ({ setCurrency, setCryptoCurrency }) => {
    const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
    const [error, setError] = useState(false);
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
        },
        {
            name: 'ARS',
            value: 'ARS',
        },
        {
            name: 'BOB',
            value: 'BOB',
        }
    ];
    const [currency, Select] = useCurrency('Currency', '', currencies);
    const [cryptoCurrency, SelectCryptoCurrency] = useCryptoCurrency('CryptoCurrency', '', cryptoCurrencies);
    //get data from API
    const getData = async () => {
        const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
        const res = await axios.get(url);
        setCryptoCurrencies(res.data.Data);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (cryptoCurrency === '' || currency === '') {
            setError(true);
            return;
        }
        setError(false);
        setCurrency(currency);
        setCryptoCurrency(cryptoCurrency);
    }
    useEffect(() => {
        getData();
    }, [currency, cryptoCurrency]);
    return (

        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error message="All fields are required" /> : null}
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
