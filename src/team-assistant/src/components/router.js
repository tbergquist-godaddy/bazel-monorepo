// @flow

import { lazy, Suspense, type Node } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spinner } from '@tbergq/components';

const Login = lazy(() => import('../account/login/login'));
const Home = lazy(() => import('../home/home'));
const Signup = lazy(() => import('../account/signup/signup'));
const Dashboard = lazy(() => import('../dashboard/dashboard'));

export default function Router(): Node {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}
