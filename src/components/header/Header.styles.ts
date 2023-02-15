import styled from 'styled-components';

export const styles = {
  headerLogo: {
    fontSize: '1.5rem',
    fontWeight: 900,
    letterSpacing: '0.3125rem',
  },
  headerSearch: {
    marginLeft: '0.5rem',
    flex: 1,
  },
  headerSearchBtn: {
    padding: '0.4rem 0.625rem',
  },
  headerSearchIcon: {
    color: '#000',
  },
  headerLangBtn: {
    fontWeight: 900,
    color: '#fff',
    minWidth: 0,
    padding: 0,
    lineHeight: 0,
    width: '100%',
    height: '100%',
  },
  headerLangListItem: {
    color: '#000',
    justifyContent: 'center',
    minHeight: 'auto',
    paddingTop: 0,
    paddingBottom: '0.25rem',
  },
};

export const HeaderWrapper = styled.header`
  display: flex;
  column-gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 0;
`;

export const Logo = styled.h1``;

export const Search = styled.form`
  padding: 0.125rem 0.25rem;
  display: flex;
  align-items: center;
  max-width: 35rem;
  width: 100%;
  background: #fff;
  border-radius: 0.1875rem;
`;

export const LanguageBtnWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 2.5rem;
  width: 100%;
  height: 1.875rem;
  background: black;
  border: 2px solid #fff;
  border-radius: 0.1875rem;
`;

export const LanguagesListWrapper = styled.div<{ langListActive: boolean; name: string }>`
  position: absolute;
  bottom: -370%;
  width: 3.75rem;
  background: white;
  border-bottom-right-radius: 0.1875rem;
  border-bottom-left-radius: 0.1875rem;
  display: ${(props) => (props.langListActive ? 'block' : 'none')};
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: calc(50% - 5px);
    width: 0.625rem;
    height: 0.625rem;
    background: white;
    transform: translateY(-50%) rotate(45deg);
    z-index: 0;
  }
`;
