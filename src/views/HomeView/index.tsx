import React from 'react';
import styles from './styles.module.scss';
import Header from '../../components/Header';
import ProductView from '../ProductView';


type Props = {
  children?: React.ReactNode;
};

const HomeView = ({ children } : Props) => (
  <main className={styles.HomeView}>
    <Header title="Appliance Packages">
      Looking for a great deal on home appliances? Packages are the best bet.
      Most appliance packages consist of a range, refrigerator, over-the-range microwave, and dishwasher.
      However, some upscale brands have packages that incorporate wall ovens, cooktops, and integrated refrigerators.
    </Header>
    <ProductView />
    {children}
  </main>
);

export default HomeView;
