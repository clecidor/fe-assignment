import React from 'react';
import styles from './styles.module.scss';
import QuickShip from './images/quickship-pdp.png';
import DefaultImage from './images/default.jpg';


type Props = {
  description?: string;
  image?: string;
  series?: string;
  final_price?: string | number;
  save?: string | number;
  list_price?: string | number;
  is_quick_ship?: boolean;
  children: React.ReactNode;
};

export const Product = (props: Props) => (
  <div className={styles.product}>
    <img src={props.image || DefaultImage} alt="Product image" />
    <p className={styles.description}>
      {props.series && <span className={styles.series}>Viking 5 Series</span>}
      4 Piece Kitchen Appliances Package with Side-by Side Refrigerator, Gas Range and Dishwasher in Stainless Steel
    </p>
    {props.is_quick_ship && <img src={QuickShip} alt="Quick Ship" />}
    <span className={styles.final_price}>$1,893.00</span>
    {props.save && <span className={styles.save}>Save $905.19</span>}
    {props.list_price && <span className={styles.list_price}>$2,099.99</span>}
  </div>
);

export default Product;
