import React from 'react';
import Section from '../../components/Section';
import ProductController from '../../components/ProductController';
import Product from '../../components/Product';
import styles from './styles.module.scss';


type Props = {
  children?: React.ReactNode;
};

const ProductView = ({ children } : Props) => (
  <div className={styles.ProductView}>
    <ProductController />
    <Section className={styles.container}>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      {children}
    </Section>
  </div>
);

export default ProductView;
