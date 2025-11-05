import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center mb-[40px]">
      <div>
        <h1 className="text-2xl font-bold">Company Internal Comparison</h1>
        <p className="text-sm text-gray-400">Overview & analytics</p>
      </div>
    </header>
  );
};

export default Header;
