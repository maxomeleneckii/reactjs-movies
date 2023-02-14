import { IconButton, InputBase, Typography } from '@mui/material';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

export const HeaderWrapper = styled.header`
  display: flex;
`;

export const Logo = styled.h1``;

export const Search = styled.form`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 400;
`;

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Logo>
          <Typography variant="h6" noWrap component="a" href="/">
            MOVIES
          </Typography>
        </Logo>
        <Search>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Movies, person, movie theaters"
            inputProps={{ 'aria-label': 'movies, person, movie theaters' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Search>
      </HeaderWrapper>
    </>
  );
};
