import React from 'react';
import styles from './Button.module.css';

interface AnchorButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
}

const AnchorButton: React.FC<AnchorButtonProps> = ({ children, ...props }) => {
    return (
        <a {...props} className={styles.AnchorButton}>
            {children}
        </a>
    );
};

export default AnchorButton;
