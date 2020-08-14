import React from 'react';
import classnames from 'classnames';
import ArrowDown from './images/ArrowDown.svg';
import styles from './styles.module.scss';


type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Selector = ({ className, children, ...props }: Props) => (
  <span className={classnames(styles.Selector, className)} {...props}>
    <select className={styles.select}>
      {children}
    </select>
    <img src={ArrowDown} className={styles.arrow} alt="" />
  </span>
);

export default Selector;