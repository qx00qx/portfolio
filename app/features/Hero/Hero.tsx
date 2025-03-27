import { cn } from '@/app/shared/lib/styles';
import React from 'react';
import { FC } from 'react';

interface HeroProps {
    className?: string;
}

export const Hero: FC<HeroProps> = ({ className }) => {
    return (
        <div className={cn(className, 'flex justify-between')}>
            <div className="right_container">
                <div className="flex flex-col justify-between gap-[368px]">
                    <img src="heading.svg" alt="Андрей Табуринский" />
                    <span className='tracking-[-2.2px] text-4xl w-[357px] block leading-[150%]'>
                        жизнь это путь к себе через соблазны быть кем то еще
                    </span>
                </div>
            </div>
            <div className="img_container">
                <img src="/hero-img.png" alt="Андрей Табуринский" />
            </div>
        </div>
    );
};

export default Hero;