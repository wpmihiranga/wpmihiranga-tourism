import React, { useState } from 'react';
import { PageType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PackagesPage } from './pages/PackagesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedPackageForEnquiry, setSelectedPackageForEnquiry] = useState<string>('Sri Lanka Highlights');

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPackageForEnquiry = (packageTitle: string) => {
    setSelectedPackageForEnquiry(packageTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#2C2723] overflow-x-hidden selection:bg-[#E2D5C3]">
      {/* Global Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectPackageForEnquiry={handleSelectPackageForEnquiry}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'packages' && (
          <PackagesPage
            onNavigate={handleNavigate}
            onSelectPackageForEnquiry={handleSelectPackageForEnquiry}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            initialPackage={selectedPackageForEnquiry}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
