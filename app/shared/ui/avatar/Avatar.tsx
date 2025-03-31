import { FC } from 'react';

interface AvatarProps {
    className?: 'small' | 'large';
    img: string;
}

export const Avatar: FC<AvatarProps> = ({ className, img }) => {
    return (
        <div className={className === 'small' ? "w-[92px] h-[92px]" : "w-[150px] h-[150px]"} >
            <img src={img} alt="avatar" />
        </div>
    );
};

export default Avatar;