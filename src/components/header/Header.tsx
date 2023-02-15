import React from 'react';
import { Button, IconButton, InputBase, List, MenuItem, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {
  HeaderWrapper,
  LanguageBtnWrapper,
  LanguagesListWrapper,
  Logo,
  Search,
  styles,
} from './Header.styles';

export const Header = () => {
  const [activeLangList, setActiveLangList] = React.useState(false);

  const onClickLangBtn = () => {
    setActiveLangList(!activeLangList ? true : false);
  };

  const onClickLangClose = (event: React.MouseEvent<HTMLInputElement>) => {
    setActiveLangList(event.currentTarget.name !== 'list-lang' ? false : true);
  };

  return (
    <>
      <HeaderWrapper>
        <Logo>
          <Typography sx={styles.headerLogo} variant="h6" noWrap component="a" href="/">
            MOVIES
          </Typography>
        </Logo>
        <Search>
          <InputBase sx={styles.headerSearch} placeholder="Movies, person, movie theaters" />
          <IconButton sx={styles.headerSearchBtn} type="button" aria-label="search">
            <SearchIcon sx={styles.headerSearchIcon} />
          </IconButton>
        </Search>
        <LanguageBtnWrapper>
          <Button name="btn-lang" onClick={onClickLangBtn} sx={styles.headerLangBtn}>
            EN
          </Button>
          <LanguagesListWrapper name="list-lang" langListActive={activeLangList}>
            <List>
              <MenuItem sx={styles.headerLangListItem}>RU</MenuItem>
              <MenuItem sx={styles.headerLangListItem}>EN</MenuItem>
            </List>
          </LanguagesListWrapper>
        </LanguageBtnWrapper>
      </HeaderWrapper>
    </>
  );
};
