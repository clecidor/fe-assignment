import React from 'react';
import classnames from 'classnames';
import ExpandIcon from '../ExpandIcon';
import styles from './styles.module.scss';


type Props = {
  title?: string;
  collapsible?: boolean;
  open?: boolean;
  className?: string;
  children: React.ReactNode;
};

const Fieldset = ({ title, className, children, collapsible, open, ...props } : Props) => {
  const [isOpen, setOpen] = React.useState(open);
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
