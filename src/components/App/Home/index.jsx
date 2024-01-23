/* eslint-disable no-shadow */
/* eslint-disable arrow-body-style */
/* eslint-disable max-len */
import { useSelector, useDispatch } from 'react-redux';
import Content from './Content';
import './styles.scss';
import { changeFilterField } from '../../../actions/pokemon';
import PokemonFilterByName from './PokemonFilterByName';
import PokemonFilterByType from './PokemonFilterByType';

function Home() {
  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.pokedex.pokemons);
  const filterName = useSelector((state) => state.pokedex.pokemonFilterName);
  const types = useSelector((state) => state.pokedex.types);
  const filteredTypes = useSelector((state) => state.pokedex.filteredTypes);

  // Filtrer un tableau avec différents filtres
  const customFilter = (pokemons, filterName, filteredTypes) => {
    return pokemons.filter((pokemon) => {
      // Si le nom et les types sont vides, renvoyer true pour inclure tous les Pokémon
      if (!filterName && filteredTypes.length === 0) {
        return true;
      }
      // Filtrer par nom si le nom est défini
      const nameMatches = !filterName || pokemon.name.toLowerCase().includes(filterName);
      // Filtrer par type si des types sont sélectionnés
      const typesMatch = filteredTypes.length === 0 || filteredTypes.every((selectedType) => pokemon.types.some((type) => type.name.toLowerCase() === selectedType.toLowerCase()));
      // Le Pokémon sera inclus s'il correspond au nom et aux types
      return nameMatches && typesMatch;
    });
  };

  const filteredPokemons = customFilter(pokemons, filterName, filteredTypes);

  return (
    <div className="home">
      <h1 className="home-title">Liste des Pokémons</h1>
      <PokemonFilterByName
        filter={filterName}
        changeField={(newValue) => {
          dispatch(changeFilterField(newValue));
        }}
      />
      <PokemonFilterByType
        types={types}
        filteredTypes={filteredTypes}
      />
      <Content pokemons={filterName.length === 0 && filteredTypes.length === 0 ? pokemons : filteredPokemons} /> {/* Si le filtre est vide on affiche tous les pokemons */}
    </div>
  );
}

export default Home;
