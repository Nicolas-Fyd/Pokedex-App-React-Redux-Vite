import * as React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';
import { clearSuccessMessage } from '../../../actions/successMessage';

export default function SuccessMessage({ message }) {
  const dispatch = useDispatch();

  const handleClearMessage = () => {
    dispatch(clearSuccessMessage());
  };

  React.useEffect(() => {
    // Déclencher l'action au bout de 5 secondes
    const timeoutId = setTimeout(() => {
      dispatch(clearSuccessMessage());
    }, 5000);

    // Nettoyer le timeout lorsqu'un composant est démonté (timeout ou clic sur la croix)
    return () => clearTimeout(timeoutId);
  }, [dispatch]);

  return (
    <Stack
      spacing={2}
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 9999,
        maxWidth: 600,
      }}
    >
      <SnackbarContent
        message={message}
        action={(
          <Button color="secondary" size="small" onClick={handleClearMessage}>
            X
          </Button>
        )}
      />
    </Stack>
  );
}

SuccessMessage.propTypes = {
  message: PropTypes.string,
};

SuccessMessage.defaultProps = {
  message: null,
};
