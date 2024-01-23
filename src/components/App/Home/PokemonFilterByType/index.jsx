import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import TypeSpan from './TypeSpan';
import './styles.scss';
import { deleteTypeFilters, selectTypeFilters } from '../../../../actions/pokemon';

function PokemonFilterByType({ types }) {
  const dispatch = useDispatch();
  const filteredTypes = useSelector((state) => state.pokedex.filteredTypes);

  return (
    <div className="type-filter">
      {types.map((type) => (
        <TypeSpan
          key={type.id}
          onClick={(newValue) => {
            if (filteredTypes.includes(newValue)) {
              dispatch(deleteTypeFilters(newValue));
            } else {
              dispatch(selectTypeFilters(newValue));
            }
          }}
          {...type}
        />
      ))}
    </div>
  );
}

PokemonFilterByType.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ),
};

PokemonFilterByType.defaultProps = {
  types: null,
};

export default PokemonFilterByType;
