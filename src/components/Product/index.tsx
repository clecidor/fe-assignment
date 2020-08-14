import React from 'react';
import DefaultImage from './images/default.jpg';
import QuickShipSVG from './images/quickship.svg';
// import QuickShip from './images/quickship-pdp.png';
import styles from './styles.module.scss';


type Props = {
  description?: string;
  image?: string;
  series?: string;
  final_price?: string | number;
  save?: string | number;
  list_price?: string | number;
  is_quick_ship?: boolean;
  children?: React.ReactNode;
};

export const Product = (props: Props) => (
  <div className={styles.Product}>
    <img className={styles.image} src={props.image || DefaultImage} alt="Product preview" />
    <p className={styles.description}>
      <span className={styles.series}>Viking 5 Series</span>
      4 Piece Kitchen Appliances Package with Side-by Side Refrigerator, Gas Range and Dishwasher in Stainless Steel
    </p>
    <img className={styles.quickship} src={QuickShipSVG} alt="Quick Ship" />
    <span className={styles.final_price}>$1,893.00</span>
    <div>
      <span className={styles.save}>Save $905.19</span>
      <span className={styles.list_price}>$2,099.99</span>
    </div>
    {props.children}

    <button className={styles.view_package}>View Package</button>
  </div>
);

export default Product;
