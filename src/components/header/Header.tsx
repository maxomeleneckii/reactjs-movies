import React from 'react';
import { Box } from '@mui/material';
import { HeaderWrapper, Overlay, styles } from './Header.styles';
import { Logo } from './logo/Logo';
import { Search } from './search/Search';
import { Languages } from './languages/Languages';

export const Header = () => {
  const [langListIsActive, setlangListIsActive] = React.useState(false);

  const openLangList = () => {
    setlangListIsActive(!langListIsActive ? true : false);
  };

  const closeLangList = (event: React.MouseEvent<HTMLInputElement>) => {
    setlangListIsActive(event.currentTarget.name !== 'list-lang-item' ? false : true);
  };

  return (
    <>
      <HeaderWrapper>
        <Logo />
        <Box sx={styles.headerSearchLangWrapper}>
          <Search />
          <Languages openLangList={openLangList} langListIsActive={langListIsActive} />
        </Box>
        <Overlay onClick={closeLangList} overlay={langListIsActive} />
      </HeaderWrapper>
    </>
  );
};
