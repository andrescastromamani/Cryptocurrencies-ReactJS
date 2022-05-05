import styled from '@emotion/styled';

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
  return (
    <Container>
      <div>
        <Img src="https://e7.pngegg.com/pngimages/1018/698/png-clipart-bitcoin-cash-cryptocurrency-money-blockchain-election-flyers-text-orange.png" />
      </div>
      <div>
        <Title>
          <span>Crypto</span>
        </Title>
      </div>
    </Container>
  );
}

export default App;
