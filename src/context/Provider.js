import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const RECEITAS_MOCK = [
    {
      idMeal: 52771,
      strMealThumb: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      strCategory: 'Vegetarian',
      strMeal: 'Spicy Arrabiata Penne',
      strTags: 'Pasta, Curry, Macarrão',
      strArea: 'Italian',
      date: '23/06/2020',
      type: 'Meal',
    },
    {
      idDrink: 178319,
      strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      strCategory: 'Ordinary Drink',
      strAlcoholic: 'Alcoholic',
      strDrink: 'Aquamarine',
      strTags: '',
      date: '23/06/2020',
      type: 'Drink',
    },
  ];

  const [statusLoginBtn, setStatusLoginBtn] = useState(true);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [currentPage, setCurrentPage] = useState('');
  const [login, setLogin] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [allRecipes, setAllRecipes] = useState([]);

  // ESSE ESTADO TEM QUE SER SETADO NO BOTÃO 'FINALIZAR RECEITA' DA  PÁG. 'RECEITA EM PROGRESSO'
  const [allRecipesDone, setAllRecipesDone] = useState(RECEITAS_MOCK);
  const [filterRecipeDone, setFilterRecipeDone] = useState([]);

  const [linkCopied, setLinkCopied] = useState(false);

  //= ==========DETAIS PAG============================
  const [rec, setRec] = useState([]);
  const [key, setKey] = useState('');

  const [favoritesRecipes, setFavoritesRecipes] = useState([]);
  const [filterFavoritesRecipes, setFilterFavoritesRecipes] = useState([]);

  const [inputText, setInputText] = useState('');
  const [inputRadio, setInputRadio] = useState('');
  const [apiRadio, setApiRadio] = useState();
  const [filter, setFilter] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [filteredDrinkIngredients, setFilteredDrinkIngredients] = useState([]);
  const [filteredFoodIngredients, setFilteredFoodIngredients] = useState([]);

  const contextValue = {
    statusLoginBtn,
    setStatusLoginBtn,
    emailIsValid,
    setEmailIsValid,
    passwordIsValid,
    setPasswordIsValid,
    inputText,
    setInputText,
    inputRadio,
    setInputRadio,
    apiRadio,
    setApiRadio,
    currentPage,
    setCurrentPage,
    login,
    setLogin,
    showSearchBar,
    setShowSearchBar,
    allRecipes,
    setAllRecipes,
    categories,
    setCategories,
    selectedCategory,
    setSelectedCategory,
    allRecipesDone,
    setAllRecipesDone,
    filterRecipeDone,
    setFilterRecipeDone,
    linkCopied,
    setLinkCopied,
    favoritesRecipes,
    setFavoritesRecipes,
    filterFavoritesRecipes,
    setFilterFavoritesRecipes,
    filter,
    setFilter,
    filteredRecipes,
    setFilteredRecipes,
    filteredDrinkIngredients,
    setFilteredDrinkIngredients,
    filteredFoodIngredients,
    setFilteredFoodIngredients,
    rec,
    setRec,
    key,
    setKey,
  };

  return (
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
