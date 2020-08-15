import React from 'react';
import SortTypes from '../../types/SortTypes';
import Fieldset from '../../components/Fieldset';
import Selector from '../../components/Selector';
import styles from './styles.module.scss';


type Props = {
  children?: React.ReactNode;
};

// TODO: replace this with redux action
const setSortBy = (sortBy: string) => console.log({ sortBy });


export const SortSelector = ({ children } : Props) => (
  <Fieldset title="Sort By:" className={styles.fieldset}>
    <Selector>
      {Object.entries(SortTypes).map(([value, name]) => <option key={value} value={value}>{name}</option>)}
    </Selector>
  </Fieldset>
);

// TODO: refactor Fieldset component to support Inline labels
export const SortSelectorInline = ({ children } : Props) => (
  <label>
    <strong>Sort By:</strong>
    <Selector onChange={(event) => setSortBy(event.target.value)}>
      {Object.entries(SortTypes).map(([value, name]) => <option key={value} value={value}>{name}</option>)}
    </Selector>
  </label>
);