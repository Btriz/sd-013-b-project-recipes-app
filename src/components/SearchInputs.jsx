import React, { useContext } from 'react';
import Context from '../context/Context';
import searchBarTextFetch from '../services/searchBarTextFetch';

function SearchInputs() {
  const {
    inputRadio,
    inputText,
    setInputRadio,
    setInputText,
    setApiRadio,
    setFilter,
  } = useContext(Context);

  const handleClickFiltrarReceita = () => {
    searchBarTextFetch(inputRadio, inputText, setApiRadio);
    setFilter(true);
  };

  return (
    <div>
      <label htmlFor="buscaTexto">
        <input
          type="text"
          id="buscaTexto"
          placeholder="Buscar Receita"
          data-testid="search-input"
          onChange={ (e) => setInputText(e.target.value) }
        />
      </label>

      <label htmlFor="ingredient">
        <input
          type="radio"
          id="ingredient"
          name="busca"
          value="Ingrediente"
          data-testid="ingredient-search-radio"
          onChange={ (e) => setInputRadio(e.target.value) }
        />
        <span> </span>
        Ingrediente
      </label>
      <span> </span>
      <label htmlFor="name">
        <input
          type="radio"
          id="name"
          name="busca"
          value="Nome"
          data-testid="name-search-radio"
          onChange={ (e) => setInputRadio(e.target.value) }
        />
        <span> </span>
        Nome
      </label>
      <span> </span>
      <label htmlFor="letra">
        <input
          type="radio"
          id="letra"
          name="busca"
          value="Primeira letra"
          data-testid="first-letter-search-radio"
          onChange={ (e) => setInputRadio(e.target.value) }
        />
        <span> </span>
        Primeira Letra
      </label>
      <span> </span>
      <button
        type="submit"
        data-testid="exec-search-btn"
        onClick={ handleClickFiltrarReceita }
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchInputs;
