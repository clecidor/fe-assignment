import React from 'react';
import styles from './styles.module.scss';


type Props = {
  children?: React.ReactNode;
};

const HomeView = ({ children } : Props) => (
  <main className={styles.HomeView}>
    <header>
      <h1>Appliance Packages</h1>
      <p>
        Looking for a great deal on home appliances? Packages are the best bet.
        Most appliance packages consist of a range, refrigerator, over-the-range microwave, and dishwasher.
        However, some upscale brands have packages that incorporate wall ovens, cooktops, and integrated refrigerators.
      </p>
    </header>
    {children}
  </main>
);

export default HomeView;
