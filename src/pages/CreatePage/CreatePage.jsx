// import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import BackButton from 'components/BackButton';
import Container from 'components/Container';
import ReusableTitle from 'components/ReusableTitle';
import AddEventForm from 'components/AddEventForm';
// import Loader from 'components/Loader/';
// import NotFound from 'components/NotFound/';
const CreatePage = () => {
  const location = useLocation();

  const backLink = location.state?.from ?? `/`;
  return (
    <Container>
      <BackButton to={backLink} />
      <ReusableTitle text="Create new event" />
      <AddEventForm />
    </Container>
  );
};

export default CreatePage;
