import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { colorPicker } from 'helpers/colorPicker';
import { removeEvent } from 'services/eventsAPI';
import ReusableTitle from 'components/ReusableTitle';
import Loader from 'components/Loader';
import NotFound from 'components/NotFound';
import {
  ButtonsList,
  DataItemStyled,
  DataListStyled,
  ImageStyled,
  InformationWrap,
  CardStyled,
  TextStyled,
  WrapStyled,
  ButtonStyled,
  ButtonsItem,
} from './EventDetails.styled';

const EventDetails = ({ event }) => {
  const { name, description, location, img, date, category, priority, id } =
    event;
  const navigate = useNavigate();
  const color = colorPicker(priority);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRemove = async () => {
    try {
      setIsLoading(true);
      await removeEvent(id);
      toast.success('You successfully delete this event!');
      navigate('/');
    } catch (error) {
      toast.error('Something went wrong.Try again.');
      setIsLoading(false);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <WrapStyled>
      {isLoading && <Loader />}
      {!isLoading && error && <NotFound />}
      {event !== null && !isLoading && !error && (
        <>
          <ReusableTitle text={name} />
          <CardStyled>
            <ImageStyled alt={name} src={img} />
            <InformationWrap>
              <TextStyled>{description}</TextStyled>
              <DataListStyled>
                <DataItemStyled>{category}</DataItemStyled>
                <DataItemStyled style={color}>{priority}</DataItemStyled>
                <DataItemStyled>{location}</DataItemStyled>
                <DataItemStyled>{date}</DataItemStyled>
              </DataListStyled>
              <ButtonsList>
                <ButtonsItem>
                  <ButtonStyled
                    type="button"
                    onClick={() => {
                      navigate(`/edit/${id}`);
                    }}
                  >
                    Edit
                  </ButtonStyled>
                </ButtonsItem>
                <ButtonsItem>
                  <ButtonStyled type="button" onClick={handleRemove}>
                    Delete event
                  </ButtonStyled>
                </ButtonsItem>
              </ButtonsList>
            </InformationWrap>
          </CardStyled>
        </>
      )}
    </WrapStyled>
  );
};

export default EventDetails;
