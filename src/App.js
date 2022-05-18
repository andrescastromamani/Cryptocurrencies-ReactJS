import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Form } from './components/Form';
import { Result } from './components/Result';

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
`;
const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  color: #fff;
  text-transform: uppercase;
  text-align: left;
  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #fff;
    display: block;
  }
`;
function App() {
  const [currency, setCurrency] = useState('');
  const [cryptoCurrency, setCryptoCurrency] = useState('');
  const [response, setResponse] = useState({});
  const calculateCurrency = async () => {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`;
    const res = await axios.get(url);
    setResponse(res.data.DISPLAY[cryptoCurrency][currency]);
  }
  useEffect(() => {
    if (currency === '' || cryptoCurrency === '') return;
    calculateCurrency();
  }, [currency, cryptoCurrency]);

  return (
    <Container>
      <div>
        <Img src="https://raw.githubusercontent.com/juanpablogdl/cripto_react/master/src/cryptomonedas.png" />
      </div>
      <div>
        <Title>
          Cryptocurrencies
        </Title>
        <Form
          setCurrency={setCurrency}
          setCryptoCurrency={setCryptoCurrency}
        />
        <Result
          response={response}
        />
      </div>
    </Container>
  );
}

export default App;
