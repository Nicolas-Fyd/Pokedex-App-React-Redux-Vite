import PropTypes from 'prop-types';
import './styles.scss';
import { useSelector } from 'react-redux';

function TypeSpan({ onClick, ...type }) {
  const filteredTypes = useSelector((state) => state.pokedex.filteredTypes);
  const { name } = type;

  const isTypeSelected = filteredTypes.includes(name);

  return (
    <div>
      <a
        className={isTypeSelected ? 'type-filter-span-selected' : 'type-filter-span'}
        onClick={() => {
          onClick(name);
        }}
        style={{ backgroundColor: type.color }}
      >
        {type.name}
      </a>
    </div>
  );
}

TypeSpan.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default TypeSpan;
