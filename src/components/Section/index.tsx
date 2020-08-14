import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';


type Props = {
  title?: string;
  className?: string;
  children: React.ReactNode;
};

const Section = ({ title, className, children, ...props } : Props) => (
  <section className={classnames(styles.Section, className)} {...props}>
    {title && <h2 className={styles.title}>{title}</h2>}
    {children}
  </section>
);

export default Section;
