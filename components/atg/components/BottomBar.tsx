import React from 'react';

const BottomBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full  rounded-b-lg bg-orange-100 shadow-lg">
      {children}
    </div>
  );
};

export default BottomBar;
