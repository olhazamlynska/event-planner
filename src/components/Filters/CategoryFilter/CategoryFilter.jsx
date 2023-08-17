import { useState, useEffect, useCallback } from 'react';
import { categoryFilter } from 'data/fiter';

import {
  StyledWrap,
  StyledSelect,
  CategoryIconStyled,
  StyledOptions,
  StyledItem,
} from './CategoryFilter.styled';
import { nanoid } from 'nanoid';
const CategoryFilter = ({ isTabletDevice }) => {
  const [isActive, setIsActive] = useState(false);
  const handleCloseSelect = useCallback(event => {
    if (!event.target.closest('#category')) {
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
    <StyledWrap id="category">
      <StyledSelect
        onClick={() => setIsActive(!isActive)}
        active={isActive.toString()}
      >
        <CategoryIconStyled />
        {isActive || isTabletDevice ? 'Category' : null}
        {isActive && (
          <StyledOptions>
            {categoryFilter.map(el => {
              return <StyledItem key={nanoid()}>{el}</StyledItem>;
            })}
          </StyledOptions>
        )}
      </StyledSelect>
    </StyledWrap>
  );
};

export default CategoryFilter;
