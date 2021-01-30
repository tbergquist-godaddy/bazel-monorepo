// @flow

import { type ComponentType } from 'react';
import { Heading } from '@tbergq/components';
import { fbt } from 'fbt';
import { Helmet } from 'react-helmet';

import './home.css';
import HomeLink from './home-link';
import programImg from './img/program.jpg';
import programWebp from './img/program.webp';
import exerciseImg from './img/exercises.jpg';
import exerciseWebp from './img/exercises.webp';

type Props = {};

export default (function Home() {
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
      </div>
    </>
  );
}: ComponentType<Props>);
