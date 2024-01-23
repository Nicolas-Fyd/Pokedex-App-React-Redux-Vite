import PropTypes from 'prop-types';
import PokemonDetailsGauge from './PokemonDetailsGauge';
import './styles.scss';
import PokemonDetailsArrow from './PokemonDetailsArrow';

function PokemonDetailsPage({ pokemon }) {
  const mergedWeaknessAndResist = [];

  pokemon.weakness_and_resist.forEach((entry) => {
    const typeId = entry.typecoverage_id;

    // eslint-disable-next-line max-len
    // Si le typeId n'existe pas dans le tableau on l'insert sinon on multiplie le multiplier pour obtenir la resistance/faiblesse du double type
    if (!mergedWeaknessAndResist[typeId]) {
      mergedWeaknessAndResist[typeId] = {
        typecoverage_id: typeId,
        name_typecoverage: entry.name_typecoverage,
        color_typecoverage: entry.color_typecoverage,
        multiplier: entry.multiplier,
      };
    }
    else {
      mergedWeaknessAndResist[typeId].multiplier *= entry.multiplier;
    }
  });

  return (
    <div className="pokemon-details">
      <div className="pokemon-details-div">
        <div className="pokemons-details-left">
          <img src={pokemon.image} alt={pokemon.name} className="pokemon-details-img" />
          <div className="pokemon-details-statistics">
            {Object.keys(pokemon.stats).map((statName) => (
              <div className="pokemon-details-statistics-bloc" key={statName}>
                <span className="pokemon-details-statistic-name">{statName
                  .split('_')
                  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                  .join('_')}
                </span>
                <PokemonDetailsGauge value={pokemon.stats[statName]} />
              </div>
            ))}
          </div>
        </div>
        <div className="pokemon-details-right">
          <div className="pokemon-details-right-top">
            <h2 className="pokemon-details-right-title">#{pokemon.id} {pokemon.name}</h2>
            <div className="pokemon-details-right-types">
              {pokemon.types.map((type) => (
                <a
                  key={type.color}
                  className="pokemon-details-right-type"
                  style={{ backgroundColor: type.color }}
                >
                  {type.name}
                </a>
              ))}
            </div>
          </div>
          <div className="pokemon-details-description">{pokemon.description}</div>
          {/* RESISTANCES ET FAIBLESSES  */}
          <h3 className="pokemon-details-weakandresist-title">Résistances et faiblesses</h3>
          <div className="pokemon-details-weakandresist-array">
            <div className="pokemon-details-weakandresist-column">
              <h4 className="pokemon-details-weakandresist-name">Immunité</h4>
              <div className="pokemon-details-weakandresist-types">
                {mergedWeaknessAndResist
                  .filter((entry) => entry.multiplier === 0)
                  .map((entry) => (
                    <a
                      key={entry.typecoverage_id}
                      className="pokemon-details-weakandresist-type"
                      style={{ backgroundColor: entry.color_typecoverage }}
                    >
                      {entry.name_typecoverage}
                    </a>
                  ))}
              </div>
            </div>
            <div className="pokemon-details-weakandresist-column">
              <h4 className="pokemon-details-weakandresist-name">Très résistant</h4>
              <div className="pokemon-details-weakandresist-types">
                {mergedWeaknessAndResist
                  .filter((entry) => entry.multiplier === 0.25)
                  .map((entry) => (
                    <a
                      key={entry.typecoverage_id}
                      className="pokemon-details-weakandresist-type"
                      style={{ backgroundColor: entry.color_typecoverage }}
                    >
                      {entry.name_typecoverage}
                    </a>
                  ))}
              </div>
            </div>
            <div className="pokemon-details-weakandresist-column">
              <h4 className="pokemon-details-weakandresist-name">Résistant</h4>
              <div className="pokemon-details-weakandresist-types">
                {mergedWeaknessAndResist
                  .filter((entry) => entry.multiplier === 0.5)
                  .map((entry) => (
                    <a
                      key={entry.typecoverage_id}
                      className="pokemon-details-weakandresist-type"
                      style={{ backgroundColor: entry.color_typecoverage }}
                    >
                      {entry.name_typecoverage}
                    </a>
                  ))}
              </div>
            </div>
            <div className="pokemon-details-weakandresist-column">
              <h4 className="pokemon-details-weakandresist-name">Vulnérable</h4>
              <div className="pokemon-details-weakandresist-types">
                {mergedWeaknessAndResist
                  .filter((entry) => entry.multiplier === 2)
                  .map((entry) => (
                    <a
                      key={entry.typecoverage_id}
                      className="pokemon-details-weakandresist-type"
                      style={{ backgroundColor: entry.color_typecoverage }}
                    >
                      {entry.name_typecoverage}
                    </a>
                  ))}
              </div>
            </div>
            <div className="pokemon-details-weakandresist-column">
              <h4 className="pokemon-details-weakandresist-name">Très vulnérable</h4>
              <div className="pokemon-details-weakandresist-types">
                {mergedWeaknessAndResist
                  .filter((entry) => entry.multiplier === 4)
                  .map((entry) => (
                    <a
                      key={entry.typecoverage_id}
                      className="pokemon-details-weakandresist-type"
                      style={{ backgroundColor: entry.color_typecoverage }}
                    >
                      {entry.name_typecoverage}
                    </a>
                  ))}
              </div>
            </div>
          </div>
          {/* EVOLUTIONS  */}
          {pokemon.evolution && /* pokemon.evolution.length && */ (
            <div className="pokemon-details-evolutions">
              <h3 className="pokemon-details-evolutions-title">Evolutions</h3>
              {/* POKEMON SANS EVOLUTION PRECEDENTE */}
                {!pokemon.evolution.find((evo) => evo.state === 'prev') && (
                  <div className="pokemon-details-evolutions-content">
                    <div className="pokemon-details-evolutions-bloc">
                      <div className="pokemon-details-evolution">
                        <img src={pokemon.thumbnail} alt={pokemon.name} className="pokemon-details-evolution-img" />
                        <div className="pokemon-details-evolution-name">{pokemon.name}</div>
                      </div>
                    </div>
                    <PokemonDetailsArrow />
                    <div className="pokemon-details-evolutions-bloc">
                      {pokemon.evolution.map((evo) => (
                        <div className="pokemon-details-evolution" key={evo.evolutionName}>
                          <a href={`/${evo.evolutionName}`}>
                            <img src={`https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/${evo.evolutionId.toString().padStart(3, '0')}.png`} alt={evo.evolutionName} className="pokemon-details-evolution-img" />
                          </a>
                          <div className="pokemon-details-evolution-name">{evo.evolutionName}</div>
                          <div className="pokemon-details-evolution-condition">{evo.condition}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {/* POKEMON SANS EVOLUTION SUIVANTE */}
                {!pokemon.evolution.find((evo) => evo.state === 'next') && (
                  <div className="pokemon-details-evolutions-content">
                    <div className="pokemon-details-evolutions-bloc">
                      {pokemon.evolution.map((evo) => (
                        <div className="pokemon-details-evolution" key={evo.evolutionName}>
                          <a href={`/${evo.evolutionName}`}>
                            <img src={`https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/${evo.evolutionId.toString().padStart(3, '0')}.png`} alt={evo.evolutionName} className="pokemon-details-evolution-img" />
                          </a>
                          <div className="pokemon-details-evolution-name">{evo.evolutionName}</div>
                          <div className="pokemon-details-evolution-condition">{evo.condition}</div>
                        </div>
                      ))}
                    </div>
                    <PokemonDetailsArrow />
                    <div className="pokemon-details-evolutions-bloc">
                      <div className="pokemon-details-evolution">
                        <img src={pokemon.thumbnail} alt={pokemon.name} className="pokemon-details-evolution-img" />
                        <div className="pokemon-details-evolution-name">{pokemon.name}</div>
                      </div>
                    </div>
                  </div>
                )}
                {/* POKEMON AVEC EVOLUTION PRECEDENTE ET SUIVANTE */}
                {pokemon.evolution.find((evo) => evo.state === 'next') && pokemon.evolution.find((evo) => evo.state === 'prev') && (
                  <div className="pokemon-details-evolutions-content">
                    <div className="pokemon-details-evolutions-bloc">
                      {pokemon.evolution.filter((evo) => evo.state === 'prev').map((evo) => (
                        <div className="pokemon-details-evolution" key={evo.evolutionName}>
                          <a href={`/${evo.evolutionName}`}>
                            <img src={`https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/${evo.evolutionId.toString().padStart(3, '0')}.png`} alt={evo.evolutionName} className="pokemon-details-evolution-img" />
                          </a>
                          <div className="pokemon-details-evolution-name">{evo.evolutionName}</div>
                          <div className="pokemon-details-evolution-condition">{evo.condition}</div>
                        </div>
                      ))}
                    </div>
                    <PokemonDetailsArrow />
                    <div className="pokemon-details-evolutions-bloc">
                      <div className="pokemon-details-evolution">
                        <img src={pokemon.thumbnail} alt={pokemon.name} className="pokemon-details-evolution-img" />
                        <div className="pokemon-details-evolution-name">{pokemon.name}</div>
                      </div>
                    </div>
                    <PokemonDetailsArrow />
                    <div className="pokemon-details-evolutions-bloc">
                      {pokemon.evolution.filter((evo) => evo.state === 'next').map((evo) => (
                        <div className="pokemon-details-evolution" key={evo.evolutionName}>
                          <a href={`/${evo.evolutionName}`}>
                            <img src={`https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/thumbnails/${evo.evolutionId.toString().padStart(3, '0')}.png`} alt={evo.evolutionName} className="pokemon-details-evolution-img" />
                          </a>
                          <div className="pokemon-details-evolution-name">{evo.evolutionName}</div>
                          <div className="pokemon-details-evolution-condition">{evo.condition}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

PokemonDetailsPage.propTypes = {
  pokemon: PropTypes.shape({
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
    }).isRequired,
    types: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      }).isRequired,
    ),
    evolution: PropTypes.arrayOf(
      PropTypes.shape({
        state: PropTypes.string.isRequired,
        evolutionId: PropTypes.string.isRequired,
        evolutionName: PropTypes.string.isRequired,
        condition: PropTypes.string.isRequired,
      }).isRequired,
    ),
    image: PropTypes.string.isRequired,
    sprite: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    weakness_and_resist: PropTypes.arrayOf(
      PropTypes.shape({
        typecoverage_id: PropTypes.number.isRequired,
        name_typecoverage: PropTypes.string.isRequired,
        color_typecoverage: PropTypes.string.isRequired,
        multiplier: PropTypes.number.isRequired,
      }).isRequired,
    ),
  }),
};

PokemonDetailsPage.defaultProps = {
  pokemon: null,
};

export default PokemonDetailsPage;
