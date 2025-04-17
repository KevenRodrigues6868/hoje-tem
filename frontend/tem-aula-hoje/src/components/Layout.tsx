
import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  user: any;
  children: ReactNode;
}

export const Layout = ({ user, children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar user={user} />
      <main className="flex-1 overflow-auto p-6">
        {children}
      </main>
    </div>
  );
};
