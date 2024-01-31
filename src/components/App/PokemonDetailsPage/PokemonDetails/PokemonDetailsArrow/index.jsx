import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function PokemonDetailsArrow() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ArrowForwardIosIcon
    style={{
      fontSize: '4rem',
      ...(matches && {
        transform: 'rotate(90deg)',
      }),
    }} 
    />
  );
}

export default PokemonDetailsArrow;
