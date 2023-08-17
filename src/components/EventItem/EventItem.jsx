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
  EventDescription,
  MoreInfoLink,
} from './EventItem.styled';
import DefaultImg from 'images/events/bg-default.png';
import { colorPicker } from 'helpers/colorPicker';

const EventItem = ({ event, locationFrom }) => {
  const { name, description, location, img, date, category, priority, id } =
    event;
  const navigate = useNavigate();
  const color = colorPicker(priority);
  return (
    <StyledItem>
      {img !== '' ? (
        <StyledImage alt={name} src={img} loading="lazy" />
      ) : (
        <StyledImage alt="Default" src={DefaultImg} loading="lazy" />
      )}
      <AddInfoWrap>
        <CategoryStyled>{category}</CategoryStyled>
        <PriorityStyled style={color}>{priority}</PriorityStyled>
      </AddInfoWrap>
      <InformationWrap>
        <DateWrap>
          <p>{date}</p>
          <p>{location}</p>
        </DateWrap>
        <EventsTitle>{name}</EventsTitle>
        <EventDescription>{description}</EventDescription>
        <MoreInfoLink
          onClick={() => navigate(`/event/${id}`)}
          $state={locationFrom}
        >
          More info
        </MoreInfoLink>
      </InformationWrap>
    </StyledItem>
  );
};
export default EventItem;
