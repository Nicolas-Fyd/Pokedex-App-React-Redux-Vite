import './styles.scss';
import togepi from '/Togepi-falling.gif';

function Error() {
  return (
    <div className="error">
      <h1 className="error-title">Oups !</h1>
      <h2 className="error-second-title">La page que vous recherchez est introuvable.</h2>
      <a href="/" className="error-home-button">Revenir à la page d'accueil</a>
      <img src={togepi} alt="togepi" className="togepi" />
    </div>
  );
}

export default Error;
