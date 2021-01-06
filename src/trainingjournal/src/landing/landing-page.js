// @flow

import { type Node } from 'react';
import { Heading } from '@tbergq/components';
import { fbt } from 'fbt';
import { Helmet } from 'react-helmet';

import * as styles from './landing-page.css';

export default function LandingPage(): Node {
  return (
    <>
      <Helmet>
        <title>Trainingjournal | landing</title>
      </Helmet>
      <section className={styles.LandingPage__section}>
        <Heading level="h1">
          <fbt desc="landing page heading">Traningjournal</fbt>
        </Heading>
        <p className="LandingPage__paragraph">
          <fbt desc="landing page info text">
            Are you tired of keeping your training journal in a notebook? So are we! Here you can
            keep your training journal online instead, and always have it backed up in the cloud.
          </fbt>
        </p>
      </section>
      <section className={styles.LandingPage__section}>
        <p className={styles.LandingPage__paragraph}>
          <fbt desc="landing page info text2">
            To get started, just create your account, create your exercises, and then create your
            first program. Then bring your phone to the gym and just register your exercises as you
            go. We will tell you how much you lifted the last time you did your current exercise
          </fbt>
        </p>
      </section>
    </>
  );
}
