import React from 'react';
import Input from '../Input/Input';

const FeedBackForm = ({ }) => {
  return (
    <div>
      <p className="uppercase text-2xl">cвязь со мной</p>
      <form className="relative w-[420px] mt-[30px]">
        <Input placeholder="email" type='email' className="w-full border-white placeholder-white" />
        <button className="absolute right-0 bottom-0 py-[10px]">
          <img src="/arrow.svg" alt="отправить" />
        </button>
      </form>
    </div>
  );
};

export default FeedBackForm;
