// @flow

import { type ComponentType, Suspense } from 'react';
import { Heading, Spinner } from '@tbergq/components';
import { fbt } from 'fbt';
import { Helmet } from 'react-helmet';
import useIsLoggedIn from '@tj/services/use-is-logged-in';

import './home.css';
import HomeLink from './home-link';
import programImg from './img/program.jpg';
import programWebp from './img/program.webp';
import exerciseImg from './img/exercises.jpg';
import exerciseWebp from './img/exercises.webp';
import NextRegisterLink from './next-register/next-register-link';

type Props = {};

export default (function Home() {
  useIsLoggedIn();
  return (
    <>
      <Helmet>
        <title>Trainingjournal | home</title>
      </Helmet>
      <Heading level="h1">
        <fbt desc="Home heading">Home</fbt>
      </Heading>
      <div className="Home__links-section">
        <HomeLink
          webpP={programWebp}
          img={programImg}
          text={fbt('Programs', 'Programs link')}
          to="/programs"
        />
        <HomeLink
          webpP={exerciseWebp}
          img={exerciseImg}
          text={fbt('Exercises', 'Exercises link')}
          to="/exercises"
        />
        {/* TODO: React content loader */}
        <Suspense fallback={<Spinner />}>
          <NextRegisterLink />
        </Suspense>
      </div>
    </>
  );
}: ComponentType<Props>);
