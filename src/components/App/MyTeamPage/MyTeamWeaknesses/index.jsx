/* eslint-disable max-len */
import './styles.scss';
import PropTypes from 'prop-types';

function MyTeamWeaknesses({ myPokemons }) {
  // Déclarer un tableau vide qui va nous servir à stocker les faiblesses x4
  const allWeaknesses = [];
  // Déclarer un tableau vide qui va nous servir à stocker le nom de la faiblesse et celui du Pokemon
  const typeAndPokemonNames = [];

  // Boucle sur le tableau des Pokémons de ma team
  myPokemons.forEach((pokemon) => {
    // Déclarer un tableau vide qui va stocker les faiblesses et résistances du Pokemon
    const mergedWeaknessAndResist = [];

    // Boucle sur toutes les faiblesses et résistances du Pokemon
    pokemon.weakness_and_resist.forEach((entry) => {
      const typeId = entry.typecoverage_id;

      // Chercher l'entrée existante dans mergedWeaknessAndResist par typeId
      const existingEntry = mergedWeaknessAndResist.find((e) => e.typecoverage_id === typeId);

      if (!existingEntry) {
        // Si l'entrée n'existe pas, ajouter une nouvelle entrée
        mergedWeaknessAndResist.push({
          typecoverage_id: typeId,
          name_typecoverage: entry.name_typecoverage,
          color_typecoverage: entry.color_typecoverage,
          multiplier: entry.multiplier,
        });
      } else {
        // Si l'entrée existe, mettre à jour le multiplicateur
        existingEntry.multiplier *= entry.multiplier;
      }
    });

    // Filtrer les entrées avec un `multiplier` de 4 (faiblesse)
    const weaknesses = mergedWeaknessAndResist.filter((entry) => entry.multiplier === 4);

    // Ajouter les faiblesses au tableau global, seulement si elles n'existent pas déjà
    weaknesses.forEach((weakness) => {
      if (!allWeaknesses.some((existingWeakness) => existingWeakness.typecoverage_id === weakness.typecoverage_id)) {
        allWeaknesses.push(weakness);
      }
    });

    // Pour chaque faiblesse, on push le nom du type et le nom du Pokemon
    weaknesses.forEach((weakness) => {
      typeAndPokemonNames.push({
        typeName: weakness.name_typecoverage,
        pokemonNames: pokemon.name,
      });
    });
  });

  return (
    <div className="my-team-weaknesses">
      <h2 className="my-team-weaknesses-title">Très vulnérable aux types</h2>
      {/* Pour chaque faiblesse on créé une une ligne */}
      {allWeaknesses.map((weakness) => (
        <div key={weakness.typecoverage_id} className="my-team-weaknesses-type">
          <div
            className="my-team-weaknesses-type-name"
            style={{ backgroundColor: weakness.color_typecoverage }}
          >
            {weakness.name_typecoverage}
          </div>
          <div className="my-team-weaknesses-type-pokemons-sprites">
            {typeAndPokemonNames
              // On filtre les Pokemons qui correspondent au type
              .filter((typeAndPokemon) => typeAndPokemon.typeName === weakness.name_typecoverage)
              // On map sur les Pokemons correspondants et on va les chercher dans le tableau des pokemon de l'équipe pour récupérer leur sprite
              .map((typeAndPokemon) => {
                const matchingPokemon = myPokemons.find((pokemon) => pokemon.name === typeAndPokemon.pokemonNames);

                return (
                  <img
                    key={`${typeAndPokemon.typeName}-${matchingPokemon.id}`}
                    src={matchingPokemon.sprite}
                    alt={matchingPokemon.name}
                    title={matchingPokemon.name}
                  />
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}

MyTeamWeaknesses.propTypes = {
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

MyTeamWeaknesses.defaultProps = {
  myPokemons: null,
};

export default MyTeamWeaknesses;
