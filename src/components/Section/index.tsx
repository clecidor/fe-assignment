import React from 'react';
import styles from './styles.module.scss';


type Props = {
  title?: string;
  className?: string;
  children: React.ReactNode;
};

const Section = ({ title, className, children, ...props } : Props) => (
  <section className={styles.Section} {...props}>
    {title && <h2 className={styles.title}>{title}</h2>}
    {children}
  </section>
);

export default Section;
