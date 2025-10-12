import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAdmin, signOut } = useAuth();

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  useEffect(() => {
    // This useEffect is responsible for scrolling to the anchor link after a route change.
    if (location.hash) {
      handleScroll(location.hash.substring(1));
    }
  }, [location]);

  const navItems = [
    { name: "Business English", href: "/business-english" },
    { name: "Conversational English", href: "/conversational-english" },
    { name: "Exam Preparation", href: "/exam-preparation" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" }
  ];

  const memberNavItems = user ? [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Practice", href: "/members/activities" },
    ...(isAdmin ? [{ name: "Admin", href: "/admin" }] : []),
  ] : [];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="cursor-pointer">
              <h1 className="text-3xl font-bold text-brand-navy font-pacifico hover:text-brand-royal transition-colors duration-200">
                English Unpacked
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link"
              >
                {item.name}
              </a>
            ))}
            {memberNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="nav-link"
              >
                {item.name}
              </Link>
            ))}
            {user ? (
              <Button 
                variant="default" 
                className="bg-brand-royal hover:bg-brand-navy transition-colors duration-200"
                onClick={signOut}
              >
                Logout
              </Button>
            ) : (
              <>
                <Button 
                  variant="default" 
                  className="bg-brand-royal hover:bg-brand-navy transition-colors duration-200"
                  asChild
                >
                  <Link to="/auth">Login</Link>
                </Button>
                <Button 
                  variant="default" 
                  className="bg-brand-royal hover:bg-brand-navy transition-colors duration-200"
                  asChild
                >
                  <a href="https://calendly.com/english-unpacked/consultation" target="_blank" rel="noopener noreferrer">
                    Book Consultation
                  </a>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-navy"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              {memberNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="nav-link text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {user ? (
                <Button 
                  variant="default" 
                  className="bg-brand-royal hover:bg-brand-navy transition-colors duration-200 w-full"
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Button 
                    variant="default" 
                    className="bg-brand-royal hover:bg-brand-navy transition-colors duration-200 w-full"
                    asChild
                  >
                    <Link to="/auth" onClick={() => setIsMenuOpen(false)}>Login</Link>
                  </Button>
                  <Button 
                    variant="default" 
                    className="bg-brand-royal hover:bg-brand-navy transition-colors duration-200 w-full"
                    asChild
                  >
                    <a href="https://calendly.com/english-unpacked/consultation" target="_blank" rel="noopener noreferrer">
                      Book Consultation
                    </a>
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
