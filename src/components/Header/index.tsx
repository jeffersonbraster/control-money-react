import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>Jeje Money</h1>
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
