import React from 'react';
import styled from '@emotion/styled';

const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
`;
const Paragraph = styled.p`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 0;
`;
const Span = styled.span`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 0;
    color: #a9a9a9;
`;

export const Result = ({ response }) => {
    if (Object.keys(response).length === 0) {
        return null;
    }
    console.log(response);
    return (
        <ResultContainer>
            <h1>Result</h1>
            <Paragraph>Price: <Span>{response.PRICE}</Span></Paragraph>
            <Paragraph>High day: <Span>{response.HIGHDAY}</Span></Paragraph>
            <Paragraph>Low day: <Span>{response.LOWDAY}</Span></Paragraph>
            <Paragraph>Last Update: <Span>{response.LASTUPDATE}</Span></Paragraph>
        </ResultContainer>

    )
}
