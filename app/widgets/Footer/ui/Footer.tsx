import FeedBack from "@/app/shared/ui/Feedback/FeedBack";
import { FC } from "react";

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer className={className}>
      <div className="bg-black text-white px-[50] py-[150]">
        <div className="right">
          <img
            className="mb-[80]"
            src="/logo-img.svg"
            alt="Андрей Табуринский"
          />
          <FeedBack />
        </div>
        <div className="left"></div>
      </div>
    </footer>
  );
};
