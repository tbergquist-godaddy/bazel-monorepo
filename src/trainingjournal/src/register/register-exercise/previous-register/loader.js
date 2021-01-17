// @flow

import { type Node } from 'react';
import ContentLoader from 'react-content-loader';

const RegisterExerciseLoader = (): Node => (
  <ContentLoader
    speed={2}
    width="100%"
    height="100%"
    backgroundColor="rgb(0, 109, 119)"
    foregroundColor="#f3f3f3"
  >
    <rect x="22" y="37" rx="0" ry="0" width="0" height="1" />
    <rect x="53" y="85" rx="0" ry="0" width="20" height="3" />
    <rect x="8" y="0" rx="0" ry="0" width="577" height="90" />
  </ContentLoader>
);

export default RegisterExerciseLoader;
