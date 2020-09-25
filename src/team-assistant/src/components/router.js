// @flow

import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spinner } from '@tbergq/components';

const Login = React.lazy(() => import('../account/login/login'));
const Home = React.lazy(() => import('../home/home'));
const Signup = React.lazy(() => import('../account/signup/signup'));
const Dashboard = React.lazy(() => import('../dashboard/dashboard'));

export default function Router(): React.Node {
  return (
    <React.Suspense fallback={<Spinner />}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </React.Suspense>
  );
}
