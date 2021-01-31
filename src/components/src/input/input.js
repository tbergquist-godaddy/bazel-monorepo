// @flow

import { forwardRef, type Node, type ComponentType } from 'react';
import classNames from 'classnames';

import styles from './input.module.css';

type Props = {
  +value?: string,
  +onChange?: (SyntheticInputEvent<HTMLInputElement>) => void,
  +label: Node,
  +type?: 'text' | 'password' | 'email',
  +inputMode?: ?'email' | 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'url',
  +name: string,
  +defaultValue?: string,
  +error?: ?string,
  +placeholder?: ?string,
};

function Input({ label, type = 'text', error, ...rest }: Props, ref): Node {
  const hasError = error != null && error !== '';
  return (
    <label className="TextInput">
      <div className={styles.TextInput__label}>{label}</div>
      <input
        {...rest}
        className={classNames(styles.TextInput__input, {
          [styles['TextInput__input--error']]: hasError,
        })}
        type={type}
        ref={ref}
      />
      {error != null && (
        <div aria-live="polite" className={styles['TextInput__error-text']}>
          {error}
        </div>
      )}
    </label>
  );
}

export default (forwardRef(Input): ComponentType<Props>);
