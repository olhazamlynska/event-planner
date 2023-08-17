import { useState, useEffect, useCallback, Fragment } from 'react';
import { sortFiltersList } from 'data/fiter';

import {
  StyledWrap,
  StyledSelect,
  SortIconStyled,
  BigArrowIconStyled,
  StyledOptions,
  StyledItem,
} from './SortFilter.styled';
import { nanoid } from 'nanoid';
const SortFilter = ({ isTabletDevice }) => {
  const [isActive, setIsActive] = useState(false);

  const handleCloseSelect = useCallback(event => {
    if (!event.target.closest('#sort')) {
      setIsActive(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleCloseSelect);
    return () => {
      document.removeEventListener('click', handleCloseSelect);
    };
  }, [handleCloseSelect]);

  return (
    <StyledWrap id={'sort'}>
      <StyledSelect
        onClick={() => setIsActive(!isActive)}
        active={isActive.toString()}
      >
        {isActive || isTabletDevice ? 'Sort by' : null}
        <SortIconStyled />
        {isActive && (
          <StyledOptions>
            {sortFiltersList.map(el => {
              return (
                <Fragment key={nanoid()}>
                  <StyledItem>
                    by {el}
                    <BigArrowIconStyled direction={'true'} />
                  </StyledItem>
                  <StyledItem>
                    by {el}
                    <BigArrowIconStyled direction={'false'} />
                  </StyledItem>
                </Fragment>
              );
            })}
          </StyledOptions>
        )}
      </StyledSelect>
    </StyledWrap>
  );
};

export default SortFilter;
