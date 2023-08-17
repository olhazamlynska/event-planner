import { useEffect, useState } from 'react';
import EventItem from 'components/EventItem';
import { StyledList } from './EventsList.styled';
import { fetchEvents } from 'services/eventsAPI';
import toast from 'react-hot-toast';

const EventsList = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getEvents() {
      try {
        setIsLoading(true);
        const result = await fetchEvents();
        setEvents(result);
        toast.success('We found events');
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
      {events.map(event => (
        <EventItem key={event.id} event={event} />
      ))}
    </StyledList>
  );
};

export default EventsList;
