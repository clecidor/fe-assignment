import React from 'react';
import Button from '../../components/Button';
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
    <Section className={styles.footer}>
      <Button className={styles.paginator}>Show More</Button>
    </Section>
  </div>
);

export default ProductView;
