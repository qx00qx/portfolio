import { cn } from '@/lib/styles';
import { FC } from 'react';

interface ArticleProps {
    className?: string;
}

export const Article: FC<ArticleProps> = ({ className }) => {
    return (
        <div className={cn(className, 'relative bg-gray w-[500px] h-[300px] rounded-[10px] p-[20px]')}>
            <h3 className='text-black text-2xl tracking-[-0.5px] font-semibold mb-[20px]'>
                Lorem ipsum dolor sit amet
            </h3>
            <p className='text-base tracking-[-3%]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
            <button className='absolute bottom-[20px] right-[20px]'>
                <img src="/arrow-black.svg" alt="Прочитать статью" />
            </button>
        </div>
    );
};

export default Article;