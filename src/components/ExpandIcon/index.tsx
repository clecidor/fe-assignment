import React from 'react';
import classnames from 'classnames';
import PlusIcon from './images/PlusIcon.svg';
import MinusIcon from './images/MinusIcon.svg';
import styles from './styles.module.scss';


type Props = {
  open?: boolean;
  onClick?: React.MouseEventHandler<Element>
  className?: string;
  children?: React.ReactNode;
};

export const ExpandIcon = ({ open, onClick, className, children, ...props } : Props) => (
  <i className={classnames(styles.ExpandIcon, styles.className)} onClick={onClick} {...props}>
    <img src={!open ? PlusIcon : MinusIcon} alt="Expand Button" />
    {children}
  </i>
);

export default ExpandIcon;
