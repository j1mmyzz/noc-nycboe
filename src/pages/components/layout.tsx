import type { FC, PropsWithChildren } from "react";
import Metadata from "./metadata";
import Header from "./Header";

const Layout: FC<PropsWithChildren<{ title?: string }>> = ({
  title,
  children,
}) => {
  return (
    <>
      <Metadata title={title} />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
