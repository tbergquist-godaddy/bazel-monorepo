// @flow

import { type Node, type ComponentType, forwardRef } from 'react';
import classNames from 'classnames';
import { MdChevronRight } from 'react-icons/md';

import styles from './select.module.css';

type Option = {
  +label: string,
  +value: string | number,
};
type Props = {
  +name: string,
  +placeholder?: string,
  +options: $ReadOnlyArray<Option>,
  +error?: ?string,
  +label: string,
};

function Select({ placeholder, options, error, label, ...rest }, ref): Node {
  return (
    <label className={styles.Select__label}>
      <div className={styles['Select__label-container']}>{label}</div>
      <select
        {...rest}
        className={classNames(styles.Select__select, {
          [styles['Select__select--error']]: error != null,
        })}
        ref={ref}
      >
        {placeholder != null && <option value="">{placeholder}</option>}
        {options.map((inputOption) => (
          <option key={inputOption.value} value={inputOption.value}>
            {inputOption.label}
          </option>
        ))}
      </select>
      {error != null && (
        <div aria-live="polite" className={styles['Select__error-text']}>
          {error}
        </div>
      )}
      <MdChevronRight className={styles.Select__arrow} />
    </label>
  );
}

export default (forwardRef(Select): ComponentType<Props>);
