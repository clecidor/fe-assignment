import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';


type Props = {
  title?: string;
  className?: string;
  children: React.ReactNode;
};

const Header = ({ title, className, children } : Props) => (
  <header className={classnames(styles.Header, className)}>
    {title && <h1 className={styles.title}>{title}</h1>}
    <p>{children}</p>
  </header>
);

export default Header;
