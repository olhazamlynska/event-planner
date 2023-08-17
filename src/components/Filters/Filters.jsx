import CategoryFilter from './CategoryFilter';
import SortFilter from './SortFilter/';
import { StyledWrap, AddIconStyled, StyleLink } from './Filters.styled';
import { useMedia } from 'react-use';

const Filters = () => {
  const isTabletDevice = useMedia('(min-width: 768px)');

  return (
    <StyledWrap>
      <CategoryFilter isTabletDevice={isTabletDevice} />
      <SortFilter isTabletDevice={isTabletDevice} />
      <StyleLink to="/create">
        <AddIconStyled />
        {isTabletDevice && 'Add new event'}
      </StyleLink>
    </StyledWrap>
  );
};
export default Filters;
