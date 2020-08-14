import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Fieldset from '../../components/Fieldset';
import Header from '../../components/Header';
import Section from '../../components/Section';
import Selector from '../../components/Selector';
import CloseIcon from './images/CloseIcon.svg';
import styles from './styles.module.scss';


type Props = {
  children?: React.ReactNode;
};

const SortFilterView = ({ children } : Props) => (
  <Section className={styles.SortFilterView}>
    <Header title="Sort & Filter" className={styles.header}>
      <Link to="/products"><img src={CloseIcon} alt="Close Icon" className={styles.close} /></Link>
    </Header>
    <Fieldset title="Sort By:" className={styles.fieldset}>
      <label>
        <Selector><option>Highest Price</option></Selector>
      </label>
    </Fieldset>
    <Fieldset title="Filter By:" className={styles.fieldset}>
      <div className={styles.buttons}>
        <Button>Clear All</Button>
        <Button>Apply</Button>
      </div>
    </Fieldset>
    <Fieldset title="Select Appliances:" className={styles.fieldset} collapsible={true}>
      <ul>
        <li><label><input type="checkbox" /> Refrigerators</label></li>
        <li><label><input type="checkbox" /> Gas Range</label></li>
        <li><label><input type="checkbox" /> Electric Range</label></li>
        <li><label><input type="checkbox" /> Dual Fuel Range</label></li>
        <li><label><input type="checkbox" /> Range Hoods</label></li>
        <li><label><input type="checkbox" /> Dishwasher</label></li>
        <li><label><input type="checkbox" /> Over the Range Microwave</label></li>
        <li><label><input type="checkbox" /> Cooktop</label></li>
        <li><label><input type="checkbox" /> Wall-oven</label></li>
      </ul>
    </Fieldset>
    <Fieldset title="Delivery Method:" className={styles.fieldset} collapsible={true}>
      <ul>
        <li><label><input type="checkbox" /> Quick Ship</label></li>
      </ul>
    </Fieldset>
    {children}
  </Section>
);

export default SortFilterView;
