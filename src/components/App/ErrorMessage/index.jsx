import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function ErrorMessage({ severity, message }) {
  return (
    <Stack sx={{ width: '50%', margin: 'auto' }} spacing={2}>
      <Alert variant="filled" severity={severity}>
        {message}
      </Alert>
    </Stack>
  );
}
