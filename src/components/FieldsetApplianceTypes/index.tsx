import React from 'react';
import ApplianceTypes from '../../types/ApplianceTypes';
import Fieldset from '../../components/Fieldset';
import Selector from '../../components/Selector';
import styles from './styles.module.scss';


type Props = {
  children?: React.ReactNode;
};

// TODO: replace this with redux action
const setAppliance = (appliance: string) => console.log({ appliance });


export const ApplianceSelector = ({ children } : Props) => (
  <label>
    <strong>Select Appliances:</strong>
    <Selector onChange={(event) => setAppliance(event.target.value)}>
      {Object.entries(ApplianceTypes).map(([value, name]) => <option key={value} value={value}>{name}</option>)}
    </Selector>
  </label>
);

export const ApplianceChecklist = ({ children } : Props) => (
  <Fieldset title="Select Appliances:" className={styles.fieldset} collapsible={true} open={false}>
    <ul>
      {Object.entries(ApplianceTypes).map(([value, name]) => (
        <li key={value}>
          <label><input type="checkbox" value={value} onChange={(event) => setAppliance(event.target.value)} />{name}</label>
        </li>
      ))}
    </ul>
    {children}
  </Fieldset>
);
