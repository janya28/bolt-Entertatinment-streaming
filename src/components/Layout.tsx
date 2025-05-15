import React from 'react';
import Navbar from './Navbar';
import { PlayCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <PlayCircle className="h-8 w-8 text-purple-500 mr-2" />
              <span className="text-xl font-bold">StreamHub</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} StreamHub. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;