import React from 'react';
import styles from './styles.module.scss';


type Props = {
  children?: React.ReactNode;
};

const ProductController = ({ children } : Props) => (
  <div className={styles.ProductController}>
    <strong>ProductController goes here</strong>
    {children}
  </div>
);

export default ProductController;
