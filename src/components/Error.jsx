import React from 'react';
import styled from '@emotion/styled';

const ErrorContainer = styled.div`
    background-color: #f44336;
    border-radius: 4px;
    padding: 10px;
    margin-top: 10px;
    color: white;
    font-size: 16px;
    text-align: center;
    &:hover {
        cursor: pointer;
    }
`;


export const Error = ({ message }) => {
    return (
        <ErrorContainer>
            {message}
        </ErrorContainer>
    )
}
