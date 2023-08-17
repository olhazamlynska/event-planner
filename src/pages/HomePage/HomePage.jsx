import Container from 'components/Container';
import EventsList from 'components/EventsList';
import Filters from 'components/Filters';
import ReusableTitle from 'components/ReusableTitle/ReusableTitle';
import { useLocation } from 'react-router-dom';
import { useMedia } from 'react-use';

const HomePage = () => {
  const isDescDevice = useMedia('(min-width: 1440px)');
  const isShown = isDescDevice ? 'block' : 'none';

  const location = useLocation();
  return (
    <Container style={{ padding: '40px' }}>
      <Filters />
      <ReusableTitle text="My Events" $show={isShown} />
      <EventsList location={location} />
    </Container>
  );
};

export default HomePage;
