import React, { useLayoutEffect, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import StudentMobileMenu from "@/components/StudentMobileMenu";

const Navigation = () => {
  const location = useLocation();
  const { user, isAdmin, signOut } = useAuth();
  const barRef = useRef<HTMLDivElement>(null);
  // The menu lives in a portal, so only the header bar contributes to the page offset.

  useLayoutEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const publish = () => {
      const nav = bar.closest("nav");
      const container = nav?.firstElementChild;
      if (!nav || !container) return;
      const border = parseFloat(getComputedStyle(nav).borderBottomWidth) || 0;
      const height = container.getBoundingClientRect().bottom - nav.getBoundingClientRect().top + border;
      document.documentElement.style.setProperty("--nav-h", `${Math.round(height)}px`);
    };
    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(bar);
    window.addEventListener("resize", publish);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", publish);
    };
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
    { name: "English for Kids", href: "/english-for-kids", isKids: true },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" }
  ];

  const memberNavItems = user ? [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Practice", href: "/members/activities" },
    ...(isAdmin ? [{ name: "Admin", href: "/admin" }] : []),
  ] : [];

  // Signed-in members see their own links; the landing-page anchors stay in the footer.
  const visibleNavItems = user ? navItems.filter((i) => i.name !== "About" && i.name !== "Contact") : navItems;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="mx-auto w-full max-w-[1400px] px-4 py-3">
        <div ref={barRef} className="flex flex-nowrap items-center justify-between gap-x-4">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Link to="/" className="cursor-pointer" aria-label="English Unpacked home">
              <span className="block whitespace-nowrap text-2xl font-bold text-brand-navy font-pacifico hover:text-brand-royal transition-colors duration-200 lg:text-[26px] xl:text-[28px]">
                English Unpacked
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden min-w-0 flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm xl:flex xl:text-[15px]">
            {visibleNavItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={item.isKids 
                  ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-fredoka font-semibold px-4 py-1.5 rounded-full hover:from-yellow-500 hover:to-orange-500 transition-all duration-200 shadow-sm"
                  : "nav-link"
                }
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

          <StudentMobileMenu signedIn={Boolean(user)} isAdmin={isAdmin} onSignOut={signOut} />
        </div>

      </div>
    </nav>
  );
};

export default Navigation;
