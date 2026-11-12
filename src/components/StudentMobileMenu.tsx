import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BookOpen, Briefcase, ChevronRight, GraduationCap, Home, LayoutDashboard,
  LogIn, LogOut, Menu, MessageCircle, Mic, Shield, Star, Trophy, Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface StudentMobileMenuProps {
  signedIn: boolean;
  isAdmin: boolean;
  onSignOut: () => void;
}

const mainLinks = [
  { name: "Practice", href: "/members/activities", icon: BookOpen },
  { name: "Business", href: "/members/activities?tab=business", icon: Briefcase },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
];

const subjectLinks = [
  { name: "Grammar", href: "/members/activities?tab=grammar", icon: GraduationCap },
  { name: "Pronunciation", href: "/members/activities?tab=pronunciation", icon: Mic },
  { name: "Topics", href: "/members/activities?tab=topics", icon: Compass },
  { name: "Exams", href: "/members/activities?tab=exams", icon: Trophy },
  { name: "Young learners", href: "/members/activities?tab=young-learners", icon: Star },
];

const courseLinks = [
  { name: "Business English", href: "/business-english", icon: Briefcase },
  { name: "Conversational English", href: "/conversational-english", icon: MessageCircle },
  { name: "Exam Preparation", href: "/exam-preparation", icon: Trophy },
  { name: "English for Kids", href: "/english-for-kids", icon: Star },
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/#about", icon: BookOpen },
  { name: "Contact", href: "/#contact", icon: MessageCircle },
];

export default function StudentMobileMenu({ signedIn, isAdmin, onSignOut }: StudentMobileMenuProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const tab = new URLSearchParams(location.search).get("tab");

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  const isActive = (href: string) => {
    const [path, search] = href.split("?");
    if (search) return location.pathname === path && tab === new URLSearchParams(search).get("tab");
    return location.pathname === path && !location.hash && (path !== "/members/activities" || !tab);
  };

  const renderLink = (item: typeof mainLinks[number], prominent = false) => {
    const active = isActive(item.href);
    const Icon = item.icon;
    return (
      <Button
        key={item.href}
        asChild
        variant="ghost"
        className={`h-auto min-h-11 w-full justify-start whitespace-normal px-3 py-3 text-left hover:bg-secondary hover:text-primary ${prominent ? "min-h-12 text-base font-semibold" : "text-sm"} ${active ? "bg-primary/10 text-primary" : "text-foreground"}`}
      >
        <Link to={item.href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>
          <Icon aria-hidden="true" className={prominent ? "text-primary" : "text-muted-foreground"} />
          <span className="min-w-0 flex-1">{item.name}</span>
          {prominent && <ChevronRight aria-hidden="true" className="text-muted-foreground" />}
        </Link>
      </Button>
    );
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="min-h-11 shrink-0 gap-2 px-3 text-brand-navy hover:bg-secondary hover:text-primary xl:hidden" aria-label="Open menu">
          <Menu aria-hidden="true" />
          <span>Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        id="student-mobile-menu"
        aria-describedby={undefined}
        className="flex h-dvh w-full max-w-sm flex-col gap-0 p-0 motion-reduce:animate-none motion-reduce:transition-none [&>button]:right-3 [&>button]:top-3 [&>button]:flex [&>button]:size-11 [&>button]:items-center [&>button]:justify-center"
      >
        <SheetHeader className="shrink-0 border-b px-5 py-5 text-left">
          <SheetTitle className="pr-12 font-merriweather text-brand-navy">Menu</SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile menu" className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-3">
          {signedIn && (
            <>
              <div className="space-y-1">{mainLinks.map((item) => renderLink(item, true))}</div>
              <section aria-labelledby="practice-subjects-title" className="mt-4 border-t pt-4">
                <h2 id="practice-subjects-title" className="px-3 pb-2 text-xs font-semibold uppercase text-muted-foreground">More practice</h2>
                {subjectLinks.map((item) => renderLink(item))}
              </section>
            </>
          )}
          {signedIn ? (
            <details className="mt-4 border-t pt-3">
              <summary className="cursor-pointer rounded-md px-3 py-3 text-sm font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Courses & information</summary>
              <div className="pt-1">{courseLinks.map((item) => renderLink(item))}</div>
            </details>
          ) : (
            <div>{courseLinks.map((item) => renderLink(item, true))}</div>
          )}
          {signedIn && isAdmin && (
            <div className="mt-3 border-t pt-3">{renderLink({ name: "Admin", href: "/admin", icon: Shield })}</div>
          )}
        </nav>
        <div className="shrink-0 space-y-2 border-t px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4">
          {signedIn ? (
            <Button variant="outline" className="min-h-11 w-full" onClick={() => { setOpen(false); onSignOut(); }}>
              <LogOut aria-hidden="true" /> Logout
            </Button>
          ) : (
            <>
              <Button asChild className="min-h-11 w-full">
                <Link to="/auth" onClick={() => setOpen(false)}><LogIn aria-hidden="true" /> Login</Link>
              </Button>
              <Button asChild variant="outline" className="min-h-11 w-full">
                <a href="https://calendly.com/english-unpacked/consultation" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Book Consultation</a>
              </Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}