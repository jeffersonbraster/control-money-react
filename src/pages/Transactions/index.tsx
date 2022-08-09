import Header from "../../components/Header";
import Summary from "../../components/Summary";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

const Transactions = () => {
  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 10.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Ifood</td>
              <td>
                <PriceHighLight variant="outcome">R$ 5.000,00</PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>20/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
};

export default Transactions;
