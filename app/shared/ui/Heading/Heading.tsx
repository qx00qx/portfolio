import { cn } from '@/lib/styles';
import { FC } from 'react';

interface HeadingProps {
    className?: string;
    text: string;
}

export const Heading: FC<HeadingProps> = ({ className, text }) => {
    return (
        <h1 className={cn(className, 'font-bold text-[64px] leading-[150%] leading-[-2.2px] uppercase')}>
            {text}
        </h1>
    );
};

export default Heading;