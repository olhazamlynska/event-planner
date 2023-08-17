import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchOneEvent } from 'services/eventsAPI';

import BackButton from 'components/BackButton';
import Container from 'components/Container';
import Loader from 'components/Loader/';
import NotFound from 'components/NotFound/';
import EventDetails from 'components/EventDetails/EventDetails';

const EventPage = () => {
  const [event, setEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    async function getOneEvent() {
      try {
        setIsLoading(true);
        const result = await fetchOneEvent(id);
        setEvent(result);
        toast.success('We found such event!!!');
      } catch (error) {
        toast.error('Something went wrong.Try again.');
        setIsLoading(false);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getOneEvent();
  }, [id]);

  const backLink = location.state?.from ?? '/';
  return (
    <Container>
      {isLoading && <Loader />}
      {!isLoading && error && <NotFound />}
      <BackButton to={backLink} />
      {!isLoading && !error && event && <EventDetails event={event} />}
    </Container>
  );
};

export default EventPage;
