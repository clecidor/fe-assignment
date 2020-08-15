import React from 'react';
import { Link } from 'react-router-dom';
import DeliveryTypes from '../../types/DeliveryTypes';
import Fieldset from '../../components/Fieldset';
import styles from './styles.module.scss';


type Props = {
  children?: React.ReactNode;
};

// TODO: replace this with redux action
const setQuickShip = (quickShip: boolean) => console.log({ quickShip });

export const DeliveryCheckbox = ({ children } : Props) => (
  <span>
    <strong>Delivery Method:</strong>
    <label>
      <input type="checkbox" onChange={(event) => setQuickShip(!event.target.checked)} /> Quick Ship
    </label>
  </span>
);

export const DeliveryChecklist = ({ children } : Props) => (
  <Fieldset title="Delivery Method:" className={styles.fieldset} collapsible={true} open={false}>
    <ul>
      <li><label><input type="checkbox" onChange={(event) => setQuickShip(!event.target.checked)} /> Quick Ship</label></li>
    </ul>
  </Fieldset>
);

export default DeliveryChecklist;
