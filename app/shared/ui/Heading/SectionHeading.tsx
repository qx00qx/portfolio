import { FC } from 'react';

interface SectionHeadingProps {
    className?: string;
    title: string;
}

export const SectionHeading: FC<SectionHeadingProps> = ({ className, title }) => {
    return (
        <div className={className}>
            <h2 className="text-[48px] font-medium">
                {title}
            </h2>
        </div>
    );
};

export default SectionHeading;