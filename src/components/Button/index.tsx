import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';


type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Button = ({ className, children, ...props }: Props) => (
  <button className={classnames(styles.Button, className)} {...props}>
    {children}
  </button>
);

export default Button;