import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import plus from '/plus.png';
import './styles.scss';
import { addPokemonInMyTeam } from '../../../../../actions/myTeam';

function Pokemon({ ...pokemon }) {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);

  return (
    <div className="pokemon">
      {isLogged && (
      <div className="logo-container">
        <Link
          to="/"
          onClick={() => {
            dispatch(addPokemonInMyTeam(pokemon.id));
          }}
        >
          <img className="logo-img" src={plus} alt="Votre logo" />
        </Link>
      </div>
      )}
      <Link to={pokemon.name}>
        <img className="pokemon-img" src={pokemon.image} alt={pokemon.name} />
      </Link>
      <div className="pokemon-name">#{pokemon.id } {pokemon.name}</div>
      <div className="pokemon-types">
        {pokemon.types.map((type) => (
          <a
            key={type.color}
            className="pokemon-type"
            style={{ backgroundColor: type.color }}
          >
            {type.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Pokemon;
