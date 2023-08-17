import type { FC, PropsWithChildren } from "react";
import Metadata from "./metadata";
import Header from "./Header";
import Footer from "./Footer";

//This is the layout file. In other files you can wrap the code with <Layout></Layout> and it'll add a the header and the footer.

const Layout: FC<PropsWithChildren<{ title?: string }>> = ({
  title,
  children,
}) => {
  return (
    <>
      <Metadata title={title} />
      <Header />
      <main>{children}</main>
      <Footer title={title} />
    </>
  );
};

export default Layout;
