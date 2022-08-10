import * as Dialog from "@radix-ui/react-dialog";
import NewTransactionModal from "../NewTransactionModal";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>Jeje Money</h1>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
