import axios from 'axios';

axios.defaults.baseURL =
  'https://64d3baa167b2662bf3dca499.mockapi.io/event-planner/api/';

export const fetchEvents = async () => {
  const { data } = await axios.get('/events');
  return data;
};

export const fetchOneEvent = async id => {
  const { data } = await axios.get(`/events/${id}`);
  return data;
};
