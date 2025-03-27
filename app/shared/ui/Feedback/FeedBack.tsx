import React from "react";
import Input from "../Input/Input";

const FeedBack = () => {
  return (
    <div>
      <p className="uppercase text-2xl">cвязь со мной</p>
      <div className="relative w-[420px] mt-[30px]">
        <Input placeholder="email" className="w-full" />
        <button className="absolute right-0 bottom-0 py-[10px]">
          <img src="/arrow.svg" alt="отправить" />
        </button>
      </div>
    </div>
  );
};

export default FeedBack;
