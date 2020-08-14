import React from 'react';
import Section from '../../components/Section';
import ProductController from '../../components/ProductController';
import styles from './styles.module.scss';


type Props = {
  children?: React.ReactNode;
};

const ProductView = ({ children } : Props) => (
  <div className={styles.ProductView}>
    <ProductController />
    <Section>
      {children}
    </Section>
  </div>
);

export default ProductView;
