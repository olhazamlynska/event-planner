import { useState } from 'react';

import {
  StyledInput,
  SearchInputWrapp,
  StyledButton,
  StyledCrossIcon,
} from './SearchInput.styled';

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = e => {
    setSearchValue(e.target.value);
  };
  return (
    <SearchInputWrapp>
      <StyledInput
        type="text"
        title="Search by keywords"
        placeholder="Search by keywords"
        value={searchValue}
        onChange={handleChange}
      />
      {searchValue && (
        <StyledButton type="button" onClick={() => setSearchValue('')}>
          <StyledCrossIcon />
        </StyledButton>
      )}
    </SearchInputWrapp>
  );
};

export default SearchInput;
