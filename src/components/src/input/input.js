// @flow

import * as React from 'react';
import { create } from '@adeira/sx';

type Props = {
  +value?: string,
  +onChange?: (SyntheticEvent<HTMLInputElement>) => void,
  +label: React.Node,
  +type?: 'text' | 'password' | 'email',
  +inputMode?: ?'email' | 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'url',
  +name: string,
  +defaultValue?: string,
  +error?: ?string,
};

function Input({ label, type = 'text', error, ...rest }: Props, ref): React.Node {
  const hasError = error != null && error !== '';
  return (
    <label>
      <div className={styles('label')}>{label}</div>
      <input
        {...rest}
        className={styles('input', hasError && 'inputError')}
        type={type}
        ref={ref}
      />
      {error != null && (
        <div aria-live="polite" className={styles('error')}>
          {error}
        </div>
      )}
    </label>
  );
}

const styles = create({
  label: {
    marginBottom: 'var(--space-small)',
    color: 'var(--color-text-black)',
  },
  input: {
    'borderRadius': 'var(--border-radius-normal)',
    'padding': 'var(--space-normal)',
    'border': '1px solid var(--color-gray-light)',
    'width': '100%',
    'outline': 'none',
    'color': 'var(--color-text-black)',
    ':focus': {
      boxShadow: 'var(--color-primary-focus) 0px 0px 0px 0.2rem',
    },
  },
  inputError: {
    'border': '1px solid var(--color-error)',
    ':focus': {
      boxShadow: 'var(--color-error) 0px 0px 0px 0.2rem',
    },
  },
  error: {
    color: 'var(--color-error)',
    fontSize: 'var(--text-size-small)',
    lineHeight: 1.75,
  },
});

export default (React.forwardRef(Input): React.ComponentType<Props>);
