import { MagnifyingGlass } from "phosphor-react";
import React from "react";
import { SearchFormContainer } from "./styles";

const SearchForm = () => {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por suas transações" />

      <button type="submit">
        <MagnifyingGlass size={20} /> Buscar
      </button>
    </SearchFormContainer>
  );
};

export default SearchForm;
