import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductType from '../../types/Product';
import fetchProducts from '../../api/fetchProducts';
import { productListSelector, productListAction } from '../../components/ReduxStore/reducers/productList';
import Button from '../../components/Button';
import Section from '../../components/Section';
import Product from '../../components/Product';
import ProductController from '../../components/ProductController';
import styles from './styles.module.scss';


type Props = {
  products: ProductType[],
};

const ProductView = ({ products=[], ...props } : Props) => (
  <div className={styles.ProductView} {...props}>
    <ProductController />
    <Section className={styles.container}>
      {products.map((product: ProductType, idx: number) => (
        <Product
          key={idx}
          image={product.image && `https://assets.ajmadison.com/${product.image.folder}/${product.image.filename}.${product.image.extension}`}
          series={product.series}
          description={product.description}
          list_price={product.prices?.list_price}
          final_price={product.prices?.final}
          save={product.prices && (product.prices?.list_price - product.prices?.final)}
          is_quick_ship={product.is_quick_ship}
        />
      ))}
    </Section>
    <Section className={styles.footer}>
      <Button className={styles.paginator}>Show More</Button>
    </Section>
  </div>
);

export default function ProductViewWrapper() {
  const dispatch = useDispatch();
  const { products=[] } = useSelector(productListSelector);

  React.useEffect(() => {
    fetchProducts().then((products) => dispatch(productListAction(products)));
  },[dispatch]);

  return <ProductView products={products} />
};
