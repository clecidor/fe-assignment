import React from 'react';
import styles from './styles.module.scss';
import Header from '../../components/Header';
import Section from '../../components/Section';
import ProductView from '../ProductView';


type Props = {
  children?: React.ReactNode;
};

const HomeView = ({ children } : Props) => (
  <main className={styles.HomeView}>
    <Section>
      <Header title="Appliance Packages">
        Looking for a great deal on home appliances? Packages are the best bet. Most appliance packages consist<br />
        of a range, refrigerator, over-the-range microwave, and dishwasher. However, some upscale brands have <br />
        packages that incorporate wall ovens, cooktops, and integrated refrigerators.
      </Header>
    </Section>
    <ProductView />
    {children}
  </main>
);

export default HomeView;
