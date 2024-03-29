import type { FC } from "react";

//Really basic footer with nothing but the name of the page.

const Footer: FC<{ title?: string }> = ({ title }) => {
  return (
    <footer className="flex justify-center items-center text-center bg-black h-12 text-white text-xl fixed bottom-0 w-full">
      {title}
    </footer>
  );
};

export default Footer;
