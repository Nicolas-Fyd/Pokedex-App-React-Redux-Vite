/* eslint-disable max-len */
import logo from '/logo.png';
import pokeball from '/pokeball.png';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import './styles.scss';
import { changeLoginField, deleteAuthData, submitLogin } from '../../../actions/user';
import ErrorMessage from '../ErrorMessage';
import { clearErrorMessage } from '../../../actions/apiMessage';

function Header() {
  const {
    email, password, isLogged, pseudo,
  } = useSelector((state) => state.user);
  const errorMessage = useSelector((state) => state.error.errorMessage);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  // Efface le message d'erreur lorsque l'URL change
  useEffect(() => {
    dispatch(clearErrorMessage());
  }, [location.pathname]); // ajout de location.pathname pour dispatch clearErrorMessage si il y a un chagement d'url + exclure le composant si l'utilisateur est sur la route /sign-up

  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      { location.pathname !== '/sign-up' && errorMessage && <ErrorMessage severity="error" message={errorMessage} />}
      <div className="right-header">
        { pseudo && (
          <Link to="/mon-equipe" title="Mon équipe">
            <img className="pokeball" src={pokeball} alt="pokeball logo" />
          </Link>
        )}
        <div className="connexion">
          <LoginForm
            email={email}
            password={password}
            changeField={(newValue, identifier) => {
              dispatch(changeLoginField(newValue, identifier));
            }}
            handleLogin={() => {
              dispatch(submitLogin());
            }}
            handleLogout={() => {
              dispatch(deleteAuthData());
              navigate('/');
            }}
            isLogged={isLogged}
            loggedMessage={`Bienvenue ${pseudo}`}
          />
          { !pseudo && <a href="/sign-up" className="registration">Pas encore inscrit ?</a>}
        </div>
      </div>
    </div>
  );
}

export default Header;
