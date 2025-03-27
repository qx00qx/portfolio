import { MainLayout } from '../../widgets/Layout/MainLayout';

export const HomePage = () => {
    return (
        <MainLayout>
            <div className='flex justify-between'>
                <div className="right_container px-[25px]">
                    <div className="flex flex-col justify-between gap-[446px]">
                        <img className='mt-[25px]' src="heading.svg" alt="Андрей Табуринский" />
                        <span className='tracking-[-2.2px] text-[40px] w-[457px] block leading-[150%] font-medium'>
                            жизнь это путь к себе через соблазны быть кем то еще
                        </span>
                    </div>
                </div>
                <div className="img_container">
                    <img src="/hero-img.png" alt="Андрей Табуринский" />
                </div>
            </div>
        </MainLayout>
    );
}; 