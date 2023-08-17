import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import BackButton from 'components/BackButton';
import Container from 'components/Container';
import ReusableTitle from 'components/ReusableTitle/ReusableTitle';

const EditPage = () => {
  const location = useLocation();
  const { id } = useParams();
  const backLink = location.state?.from ?? `/`;
  const [event, setEvent] = useState([]);
  useEffect(() => {
    const events = JSON.parse(localStorage.getItem('Events'));
    const data = events.find(el => el.id === id);
    setEvent(data);
  }, [id]);

  return (
    <Container>
      <BackButton to={backLink} />
      <ReusableTitle text={event.name} />
    </Container>
  );
};

export default EditPage;
