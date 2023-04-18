// import { useEffect } from 'react';
import { lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Login />} />
        <Route path="/login" element={<div>login page</div>} />
        <Route path="/contacts" element={<div>contacts page</div>} />
      </Route>
    </Routes>
  );
};
