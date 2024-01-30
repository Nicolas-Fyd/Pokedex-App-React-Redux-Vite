/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import Home from './Home';
import './styles.scss';
import PokemonDetailsPage from './PokemonDetailsPage';
import { fetchPokemons, fetchTypes } from '../../actions/pokemon';
import Loading from './Loading';
import SignUp from './SignUp';
import MyTeamPage from './MyTeamPage';
import SuccessMessage from './SuccessMessage';
import Error from './Error';

function App() {
  const dispatch = useDispatch();
  const isPokemonsLoaded = useSelector((state) => state.pokedex.isPokemonsLoaded);
  const isTypesLoaded = useSelector((state) => state.pokedex.isTypesLoaded);
  const isLogged = useSelector((state) => state.user.isLogged);
  const successMessage = useSelector((state) => state.successMessage.successMessage);

  useEffect(() => {
    dispatch(fetchPokemons());
    dispatch(fetchTypes());
  }, []);

  if (!isPokemonsLoaded || !isTypesLoaded) {
    return <Loading />;
  }

  return (

    <div className="app">
      <Header />
      { successMessage && <SuccessMessage message={successMessage} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/:name" element={<PokemonDetailsPage />} />
        {isLogged && <Route path="/mon-equipe" element={<MyTeamPage />} />}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
