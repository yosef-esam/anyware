import type { ReactNode } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-gray-900 text-white">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-4 bg-gray-100 flex-1">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
