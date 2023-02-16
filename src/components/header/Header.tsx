import React from 'react';
import { Box, Button, IconButton, InputBase, List, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {
  HeaderWrapper,
  LanguageBtnWrapper,
  LanguagesListWrapper,
  Logo,
  Overlay,
  Search,
  styles,
} from './Header.styles';

export const Header = () => {
  const [activeLangList, setActiveLangList] = React.useState(false);

  const openLangList = () => {
    setActiveLangList(!activeLangList ? true : false);
  };

  const closeLangList = (event: React.MouseEvent<HTMLInputElement>) => {
    setActiveLangList(event.currentTarget.name !== 'list-lang-item' ? false : true);
  };

  return (
    <>
      <HeaderWrapper>
        <Logo>
          <Typography sx={styles.headerLogo} variant="h6" noWrap component="a" href="/">
            MOVIES
          </Typography>
        </Logo>
        <Box sx={styles.headerSearchLangWrapper}>
          <Search>
            <InputBase sx={styles.headerSearch} placeholder="Movies, person, movie theaters" />
            <IconButton sx={styles.headerSearchBtn} type="button" aria-label="search">
              <SearchIcon sx={styles.headerSearchIcon} />
            </IconButton>
          </Search>
          <LanguageBtnWrapper>
            <Button name="btn-lang" onClick={openLangList} sx={styles.headerLangBtn}>
              EN
            </Button>
            <LanguagesListWrapper langList={activeLangList}>
              <List>
                <Button name="list-lang-item" value="RU" sx={styles.headerLangListItem}>
                  RU
                </Button>
                <Button name="list-lang-item" value="EN" sx={styles.headerLangListItem}>
                  EN
                </Button>
              </List>
            </LanguagesListWrapper>
          </LanguageBtnWrapper>
        </Box>
        <Overlay onClick={closeLangList} overlay={activeLangList} />
      </HeaderWrapper>
    </>
  );
};
