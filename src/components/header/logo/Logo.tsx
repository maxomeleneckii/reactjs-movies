import { Typography } from '@mui/material';
import { Heading, styles } from '../Header.styles';

export const Logo = () => {
  return (
    <>
      <Heading>
        <Typography sx={styles.headerLogo} variant="h6" noWrap component="a" href="/">
          MOVIES
        </Typography>
      </Heading>
    </>
  );
};
