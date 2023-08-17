import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { Toaster } from 'react-hot-toast';
const HomePage = lazy(() => import('pages/HomePage'));
const EventPage = lazy(() => import('pages/EventPage'));
const CreatePage = lazy(() => import('pages/CreatePage'));
const EditPage = lazy(() => import('pages/EditPage'));
const NotFound = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/event/:id" element={<EventPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/edit" element={<EditPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
