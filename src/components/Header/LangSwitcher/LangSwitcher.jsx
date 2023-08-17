import { useContext, useState } from 'react';
import {
  LangSelect,
  StyledList,
  LangItem,
  ArrowIconStyled,
} from './LangSwitcher.styled';
import { LangContext } from 'components/context/LangProvider';

const LangSwitcher = () => {
  const { lang, toggleLanguage } = useContext(LangContext);
  const [isActive, setIsActive] = useState(false);
  return (
    <LangSelect onClick={() => setIsActive(!isActive)}>
      {lang}
      <ArrowIconStyled />
      {isActive && (
        <StyledList>
          <LangItem
            onClick={e => {
              setIsActive(false);
              toggleLanguage('UA');
            }}
          >
            UA
          </LangItem>
          <LangItem
            onClick={e => {
              setIsActive(false);
              toggleLanguage('EN');
            }}
          >
            EN
          </LangItem>
        </StyledList>
      )}
    </LangSelect>
  );
};

export default LangSwitcher;
