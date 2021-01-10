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
    <label>
      <div className={styles['Select__label-container']}>{label}</div>
      <div className={styles['Select__select-container']}>
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
        <MdChevronRight className={styles.Select__arrow} />
      </div>
      {error != null && (
        <div aria-live="polite" className={styles['Select__error-text']}>
          {error}
        </div>
      )}
    </label>
  );
}

export default (forwardRef(Select): ComponentType<Props>);
