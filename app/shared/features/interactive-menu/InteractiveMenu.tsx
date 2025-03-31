import { FC } from 'react';
import styles from './InteractiveMenu.module.scss';

interface InteractiveMenuProps {
    className?: string;
}

export const InteractiveMenu: FC<InteractiveMenuProps> = ({ className }) => {
    return (
        <div className={styles.image_container}>
            <div className={styles.image_part}>
                <img src="/images/interactive-menu/blur-part-1.png" alt="" />
            </div>
        </div>
    );
};

export default InteractiveMenu;