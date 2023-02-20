import { InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchForm, styles } from '../Header.styles';

export const Search = () => {
  return (
    <>
      <SearchForm>
        <InputBase sx={styles.headerSearch} placeholder="Movies, person, movie theaters" />
        <IconButton sx={styles.headerSearchBtn} type="button" aria-label="search">
          <SearchIcon sx={styles.headerSearchIcon} />
        </IconButton>
      </SearchForm>
    </>
  );
};
