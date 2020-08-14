import React from 'react';
import Header from '../../components/Header';
import Section from '../../components/Section';
import ProductView from '../ProductView';
import styles from './styles.module.scss';


type Props = {
  children?: React.ReactNode;
};

const HomeView = ({ children } : Props) => (
  <main className={styles.HomeView}>
    <Section>
      <Header title="Appliance Packages" className={styles.header}>
        Looking for a great deal on home appliances? Packages are the best bet. Most appliance packages consist
        of a range, refrigerator, over-the-range microwave, and dishwasher. However, some upscale brands have
        packages that incorporate wall ovens, cooktops, and integrated refrigerators.
      </Header>
    </Section>
    <ProductView />
    {children}
  </main>
);

export default HomeView;
