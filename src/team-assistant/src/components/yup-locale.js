// @flow

import { setLocale } from 'yup';

import getLanguage from './get-language';

(() => {
  const locales = {
    es_PE: {
      mixed: {
        required: ({ label, path }) => `${label ?? path} es obligatorio`,
      },
      string: {
        email: ({ label, path }) => `${label ?? path} no es un correo valido`,
      },
    },
    nb_NO: {
      mixed: {
        required: ({ label, path }) => `${label ?? path} er påkrevd`,
      },
      string: {
        email: ({ label, path }) => `${label ?? path} er ikke en gyldig epost adresse`,
      },
    },
  };
  const locale = locales[getLanguage()];

  if (locale != null) {
    setLocale(locale);
  }
})();
