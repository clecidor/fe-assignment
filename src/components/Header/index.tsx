import React from 'react';
import styles from './styles.module.scss';


type Props = {
  title?: string;
  children: React.ReactNode;
};

const Header = ({ title, children } : Props) => (
  <header className={styles.Header}>
    {title && <h1 className={styles.title}>{title}</h1>}
    <p>{children}</p>
  </header>
);

export default Header;
