// @flow

import { type Node } from 'react';
import { fbt } from 'fbt';

import useNextRegister from './use-next-register';
import HomeLink from '../home-link';
import webpImg from '../img/register.webp';
import jpgImg from '../img/register.jpg';

export default function NextRegisterLink(): Node {
  const nextRegister = useNextRegister();

  if (nextRegister == null) {
    return null;
  }
  const { program, day } = nextRegister;
  return (
    <HomeLink
      webpP={webpImg}
      img={jpgImg}
      text={fbt(
        `Register ${fbt.param('programName', program.name)} - ${fbt.param('dayName', day.name)}`,
        'Next register link',
      )}
      to={`/register/${day.id}`}
    />
  );
}
