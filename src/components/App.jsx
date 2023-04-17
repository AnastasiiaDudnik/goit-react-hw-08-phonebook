import { useEffect } from 'react';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchContacts } from 'redux/contacts/operations';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />
      <Route path="/register" element={<div>register page</div>} />
      <Route path="/login" element={<div>login page</div>} />
      <Route path="/contacts" element={<div>contacts page</div>} />
    </Routes>
  );
};
