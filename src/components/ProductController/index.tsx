import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Section from '../Section';
import { ApplianceSelector } from '../FieldsetApplianceTypes';
import { DeliveryCheckbox } from '../FieldsetDeliveryTypes';
import { SortSelectorInline } from '../FieldsetSortTypes';
import styles from './styles.module.scss';


type Props = {
  children?: React.ReactNode;
};

const ProductController = ({ children } : Props) => (
  <div className={styles.ProductController}>
    <Section className={styles.MobileController}>
      <Link to="/products/filter"><Button className={styles.button}>Sort & Filter</Button></Link>
    </Section>
    <Section className={styles.DesktopController}>
      <div className={styles.options}>
        <ApplianceSelector />
        <SortSelectorInline />
        <DeliveryCheckbox />
      </div>
      <div className={styles.buttons}>
        <Button>Clear All</Button>
      </div>
      {children}
    </Section>
  </div>
);

export default ProductController;
