import { Button, List } from '@mui/material';
import { LanguageBtnWrapper, styles, LanguagesListWrapper } from '../Header.styles';

export const Languages = ({
  openLangList,
  langListIsActive,
}: {
  openLangList: () => void;
  langListIsActive: boolean;
}) => {
  return (
    <>
      <LanguageBtnWrapper>
        <Button name="btn-lang" onClick={openLangList} sx={styles.headerLangBtn}>
          EN
        </Button>
        <LanguagesListWrapper langList={langListIsActive}>
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
    </>
  );
};
