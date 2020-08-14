import React from 'react';
import classnames from 'classnames';
import ExpandIcon from '../ExpandIcon';
import styles from './styles.module.scss';


type Props = {
  title?: string;
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
};

const Fieldset = ({ title, className, children, collapsible, ...props } : Props) => {
  const [isOpen, setOpen] = React.useState(true);
  const showChildren = !collapsible || (collapsible && isOpen);

  return (
    <fieldset className={classnames(styles.Fieldset, className)} {...props}>
      <header className={styles.header}>
        <strong className={styles.title}>{title}</strong>
        {collapsible && <ExpandIcon open={isOpen} onClick={() => setOpen(!isOpen)} />}
      </header>
      {showChildren && children}
    </fieldset>
  );
}

export default Fieldset;
