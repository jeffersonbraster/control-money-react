import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Summary from "../../components/Summary";
import SearchForm from "./components/SearchForm";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  value: number;
  price: number;
  category: string;
  createdAt: Date;
}

const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const loadTransactions = async () => {
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();

    setTransactions(data);
  };

  useEffect(() => {
    loadTransactions();
  }, []);

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
