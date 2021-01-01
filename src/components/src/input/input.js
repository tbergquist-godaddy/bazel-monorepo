// @flow

import { forwardRef, type Node, type ComponentType } from 'react';
import classNames from 'classnames';

import './input.css';

type Props = {
  +value?: string,
  +onChange?: (SyntheticInputEvent<HTMLInputElement>) => void,
  +label: Node,
  +type?: 'text' | 'password' | 'email',
  +inputMode?: ?'email' | 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'url',
  +name: string,
  +defaultValue?: string,
  +error?: ?string,
};

function Input({ label, type = 'text', error, ...rest }: Props, ref): Node {
  const hasError = error != null && error !== '';
  return (
    <label className="TextInput">
      <div className="TextInput__label">{label}</div>
      <input
        {...rest}
        className={classNames('TextInput__input', {
          'TextInput__input--error': hasError,
        })}
        type={type}
        ref={ref}
      />
      {error != null && (
        <div aria-live="polite" className="TextInput__error-text">
          {error}
        </div>
      )}
    </label>
  );
}

export default (forwardRef(Input): ComponentType<Props>);
