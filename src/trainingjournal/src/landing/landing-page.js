// @flow

import { type Node } from 'react';
import { Heading } from '@tbergq/components';
import { fbt } from 'fbt';
import { create } from '@adeira/sx';
import { Helmet } from 'react-helmet';

export default function LandingPage(): Node {
  return (
    <>
      <Helmet>
        <title>Trainingjournal | landing</title>
      </Helmet>
      <section className={styles('section')}>
        <Heading level="h1">
          <fbt desc="landing page heading">Traningjournal</fbt>
        </Heading>
        <p className={styles('paragraph')}>
          <fbt desc="landing page info text">
            Are you tired of keeping your training journal in a notebook? So are we! Here you can
            keep your training journal online instead, and always have it backed up in the cloud.
          </fbt>
        </p>
      </section>
      <section className={styles('section')}>
        <p className={styles('paragraph')}>
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

const styles = create({
  paragraph: {
    lineHeight: 1.5,
    fontSize: '1.8rem',
  },
  section: {
    ':not(:last-of-type)': {
      marginBottom: 'var(--space-large)',
    },
  },
});
