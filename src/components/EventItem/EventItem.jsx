import { useNavigate } from 'react-router-dom';
import {
  StyledImage,
  AddInfoWrap,
  CategoryStyled,
  PriorityStyled,
  StyledItem,
  InformationWrap,
  DateWrap,
  EventsTitle,
  MoreInfoLink,
} from './EventItem.styled';
import DefaultImg from 'images/events/bg-default.png';

const EventItem = ({ event }) => {
  const { name, description, location, img, date, category, priority, id } =
    event;
  const navigate = useNavigate();
  let colorPriority;
  switch (priority) {
    case 'High':
      colorPriority = { color: '#FF2B77' };
      break;
    case 'Medium':
      colorPriority = { color: '#E2A300' };
      break;
    case 'Low':
      colorPriority = { color: '#6BD475' };
      break;
    default:
      colorPriority = { color: '#7B61FF' };
      break;
  }
  return (
    <StyledItem>
      {img !== '' ? (
        <StyledImage alt={name} src={DefaultImg} />
      ) : (
        <StyledImage alt="Default" src={DefaultImg} />
      )}
      <AddInfoWrap>
        <CategoryStyled>{category}</CategoryStyled>
        <PriorityStyled style={colorPriority}>{priority}</PriorityStyled>
      </AddInfoWrap>
      <InformationWrap>
        <DateWrap>
          <p>{date}</p>
          <p>{location}</p>
        </DateWrap>
        <EventsTitle>{name}</EventsTitle>
        <p>{description}</p>
        <MoreInfoLink onClick={() => navigate(`/event/${id}`)}>
          More info
        </MoreInfoLink>
      </InformationWrap>
    </StyledItem>
  );
};
export default EventItem;
