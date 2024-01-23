import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import './styles.scss';

function Content({ pokemons }) {
  return (
    <div className="content">
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
}

Content.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      height: PropTypes.string.isRequired,
      weight: PropTypes.string.isRequired,
      stats: PropTypes.shape({
        hp: PropTypes.number.isRequired,
        attack: PropTypes.number.isRequired,
        defense: PropTypes.number.isRequired,
        spe_attack: PropTypes.number.isRequired,
        spe_defense: PropTypes.number.isRequired,
        speed: PropTypes.number.isRequired,
      }),
      types: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          color: PropTypes.string.isRequired,
        }),
      ).isRequired,
      image: PropTypes.string.isRequired,
    }),
  ),
};

Content.defaultProps = {
  pokemons: null,
};

export default Content;
