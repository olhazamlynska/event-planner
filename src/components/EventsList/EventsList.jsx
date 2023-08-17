import { useEffect, useState } from 'react';
import EventItem from 'components/EventItem';
import { StyledList } from './EventsList.styled';
import { fetchEvents } from 'services/eventsAPI';
import toast from 'react-hot-toast';
import Loader from 'components/Loader/Loader';
import NotFound from 'components/NotFound/NotFound';

const EventsList = ({ location }) => {
  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem('Events')) || []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getEvents() {
      try {
        setIsLoading(true);
        const result = await fetchEvents();
        setEvents(result);
        localStorage.setItem('Events', JSON.stringify(result));
      } catch (error) {
        toast.error('Something went wrong.Try again.');
        setIsLoading(false);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getEvents();
  }, []);

  return (
    <StyledList>
      {isLoading && <Loader />}
      {!isLoading && error && <NotFound />}
      {events &&
        !isLoading &&
        !error &&
        events.map(event => (
          <EventItem key={event.id} event={event} locationFrom={location} />
        ))}
    </StyledList>
  );
};

export default EventsList;
