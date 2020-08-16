import React from 'react';
import Button from '../Button';
import DefaultImage from './images/default.jpg';
import QuickShipSVG from './images/quickship.svg';
// import QuickShip from './images/quickship-pdp.png';
import styles from './styles.module.scss';


type Props = {
  description?: string;
  image?: string;
  url?: string;
  series?: string;
  final_price?: string | number;
  save?: string | number;
  list_price?: string | number;
  is_quick_ship?: boolean;
  children?: React.ReactNode;
};

const formatPrice = (price: string | number) => Number(price).toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const Product = (props: Props) => (
  <div className={styles.Product}>
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <img className={styles.image} src={props.image || DefaultImage} alt="Product preview" />
    </a>
    <div className={styles.details}>
      <p className={styles.description}>
        {props.series && <strong className={styles.series}>{props.series}&nbsp;</strong>}
        {props.description}
      </p>
      {props.is_quick_ship && <img className={styles.quickship} src={QuickShipSVG} alt="Quick Ship" />}
      <div className={styles.prices}>
        {props.final_price && <span className={styles.final_price}>${formatPrice(props.final_price)}</span>}
        <div>
          {props.save && <span className={styles.save}>Save ${formatPrice(props.save)}</span>}
          {props.list_price && <span className={styles.list_price}>${formatPrice(props.list_price)}</span>}
        </div>
      </div>
      {props.children}
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <Button className={styles.view_package}>View Package</Button>
      </a>
    </div>
  </div>
);

export default Product;
