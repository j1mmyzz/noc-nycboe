import type { FC } from "react";

const Footer: FC<{ title?: string }> = ({ title }) => {
  return (
    <footer className="flex justify-center items-center text-center bg-black h-12 text-white text-xl">
      {title}
    </footer>
  );
};

export default Footer;
