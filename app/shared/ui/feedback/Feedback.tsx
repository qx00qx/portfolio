import { FC } from 'react';
import Avatar from '../avatar/Avatar';
import { cn } from '@/lib/styles';

interface FeedbackProps {
    className?: string;
}

export const Feedback: FC<FeedbackProps> = ({ className }) => {
    return (
        <div className={cn("flex flex-col items-center py-[50px] mb-[80px]", className)}>
            <Avatar className="large" img="/avatar.png" />
            <div className="mt-[20px] flex flex-col items-center gap-[20px]">
                <p className="text-4xl font-medium text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quaerat facilis aperiam.</p>
                <p className='text-2xl font-light'>Jhon Doe</p>
            </div>
        </div>
    );
};

export default Feedback;