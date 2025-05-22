
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  isLoggedIn?: boolean;
  userRole?: 'admin' | 'provider' | 'coordinator' | 'evaluator';
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  isLoggedIn = false,
  userRole 
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoggedIn={isLoggedIn} userRole={userRole} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
