import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Fieldset from '../../components/Fieldset';
import Header from '../../components/Header';
import Section from '../../components/Section';
import { ApplianceChecklist } from '../../components/FieldsetApplianceTypes';
import { DeliveryChecklist } from '../../components/FieldsetDeliveryTypes';
import { SortSelector } from '../../components/FieldsetSortTypes';
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
    <div className={styles.container}>
      <SortSelector />
      <Fieldset title="Filter By:">
        <div className={styles.buttons}>
          <Button>Clear All</Button>
          <Button>Apply</Button>
        </div>
      </Fieldset>
      <div className={styles.fieldset}>
        <ApplianceChecklist />
      </div>
      <div className={styles.fieldset}>
        <DeliveryChecklist />
      </div>
    </div>
    {children}
  </Section>
);

export default SortFilterView;
