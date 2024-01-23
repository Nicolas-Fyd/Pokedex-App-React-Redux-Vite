import './styles.scss';

function PokemonFilterByName({ filter, changeField }) {
  return (
    <div>
      <input
        className="filter"
        type="text"
        placeholder="Filtrer les pokémons ..."
        value={filter}
        onChange={(event) => {
          event.preventDefault();
          changeField(event.target.value);
        }}
      />
    </div>
  );
}

export default PokemonFilterByName;
