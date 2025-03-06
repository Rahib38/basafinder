import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="min-h-screen">{children}</main>
    </div>
  );
};

export default CommonLayout;
