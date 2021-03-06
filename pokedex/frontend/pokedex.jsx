import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon } from './util/api_util';
import { RECEIVE_ALL_POKEMON, receiveAllPokemon } from './actions/pokemon_actions';




document.addEventListener('DOMContentLoaded', () => {
  const rootEL = document.getElementById('root');

  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;

  ReactDOM.render(<Pokedex />, rootEL);
});