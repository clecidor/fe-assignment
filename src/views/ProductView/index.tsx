import React from 'react';
import styles from './styles.module.scss';
import ProductController from '../../components/ProductController';


type Props = {
  children?: React.ReactNode;
};

const ProductView = ({ children } : Props) => (
  <section className={styles.ProductView}>
    <ProductController />
    {children}
  </section>
);

export default ProductView;
