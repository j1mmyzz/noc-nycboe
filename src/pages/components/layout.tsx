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
    </>
  );
};

export default Layout;

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   return (
//     <div>
//       <Metadata />
//       <Header />
//       <main>{children}</main>
//       {/* Other footer or additional components */}
//     </div>
//   );
// };
// export default Layout;
