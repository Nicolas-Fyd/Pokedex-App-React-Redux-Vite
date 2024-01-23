import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import plus from '/plus.png';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import './styles.scss';
import { deletePokemonInMyTeam } from '../../../../actions/myTeam';

function MyTeam({ myPokemons }) {
  const dispatch = useDispatch();

  return (
    <div className="my-team">
      {Array.from({ length: 6 }, (_, index) => {
        const pokemon = myPokemons[index];
        return (
          <div key={index} className="my-team-member">
            <div className="delete-icon-container">
              <Link
                to="/mon-equipe"
                onClick={() => {
                  dispatch(deletePokemonInMyTeam(pokemon.id));
                }}
              >
                <DeleteIcon style={{ color: 'white' }} />
              </Link>
            </div>
            <Link to={pokemon ? `/${pokemon.name}` : '/'}>
              <img
                className="my-team-member-img"
                src={pokemon ? pokemon.image : plus}
                alt={pokemon ? pokemon.name : 'plus'}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

MyTeam.propTypes = {
  myPokemons: PropTypes.arrayOf(
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

MyTeam.defaultProps = {
  myPokemons: null,
};

export default MyTeam;
