import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 text-center text-xs text-gray-500">
      © {new Date().getFullYear()} Finicify — Built with React, Tailwind, TypeScript
    </footer>
  );
};

export default Footer;
