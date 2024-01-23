import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import './styles.scss';
import ErrorMessage from '../ErrorMessage';
import { clearErrorMessage } from '../../../actions/apiMessage';
import { resetSubmitSuccess } from '../../../actions/user';

function SignUp() {
  const errorMessage = useSelector((state) => state.error.errorMessage);
  const submitSuccess = useSelector((state) => state.user.submitSuccess);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (submitSuccess) {
      navigate('/');
      dispatch(resetSubmitSuccess()); // Optionnel : efface le statut submitSuccess
    }
  }, [submitSuccess]);

  // Efface le message d'erreur lorsque le composant est démonté
  useEffect(() => () => {
    dispatch(clearErrorMessage());
  }, [dispatch]);

  return (
    <div className="sign-up">
      <SignUpForm />
      { errorMessage && <ErrorMessage severity="error" message={errorMessage} />}
    </div>
  );
}

export default SignUp;
