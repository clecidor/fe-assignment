import React from 'react';
import Button from '../Button';
import Section from '../Section';
import styles from './styles.module.scss';


type Props = {
  children?: React.ReactNode;
};

const ProductController = ({ children } : Props) => (
  <Section className={styles.ProductController}>
    <div className={styles.options}>
      <label>
        <strong>Select Appliances:</strong>
        <select><option>4 Appliances Selected</option></select>
      </label>
      <label>
        <strong>Sort By:</strong>
        <select><option>Highest Price</option></select>
      </label>
      <label>
        <strong>Delivery Method:</strong>
        <span><input type="checkbox" /> Quick Ship</span>
      </label>
    </div>
    <div className={styles.buttons}>
      <Button>Clear All</Button>
    </div>
    {children}
  </Section>
);

export default ProductController;
