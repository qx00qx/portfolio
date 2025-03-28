import FeedBackForm from '../../shared/ui/forms/FeedBackForm';
import Link from 'next/link';
import { FC } from 'react';

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`w-full ${className}`}>
      <div className="bg-black text-white p-[50px] w-full flex gap-[150px]">
        <div className="right">
          <img className="mb-[80]" src="/logo-img.svg" alt="Андрей Табуринский" />
          <FeedBackForm />
        </div>
        <div className="left">
          <div className="columns flex gap-[100px]">
            <div className="column">
              <h3 className="text-3xl uppercase mb-[30px] font-medium tracking-tighter">контакты</h3>
              <ul className="links-column">
                <li className="opacity-50 text-base mb-[16px]">
                  <Link href="mailto:andrey@taburinskiy.ru">andrey@taburinskiy.ru</Link>
                </li>
                <li className="opacity-50 text-base">
                  <Link href="">telegram</Link>
                </li>
              </ul>
            </div>
            <div className="navigation-column">
              <h3 className="text-3xl uppercase mb-[30px] font-medium tracking-tighter">меню</h3>
              <ul className="navigation-columns">
                <li className="opacity-50 text-base mb-[16px]">
                  <Link href="#">венчур</Link>
                </li>
                <li className="opacity-50 text-base mb-[16px]">
                  <Link href="#">менторство / эдвайз</Link>
                </li>
                <li className="opacity-50 text-base mb-[16px]">
                  <Link href="#">вечные темы / интервью</Link>
                </li>
                <li className="opacity-50 text-base mb-[16px]">
                  <Link href="#">лидерская программа</Link>
                </li>
                <li className="opacity-50 text-base mb-[16px]">
                  <Link href="#">культурный слой</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
