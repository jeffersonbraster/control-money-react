import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import Summary from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import SearchForm from "./components/SearchForm";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

const Transactions = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((t) => {
              return (
                <tr key={t.id}>
                  <td width="50%">{t.description}</td>
                  <td>
                    <PriceHighLight variant={t.type}>{t.price}</PriceHighLight>
                  </td>
                  <td>{t.category}</td>
                  <td>{t.category}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
};

export default Transactions;
