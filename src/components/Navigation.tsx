import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useMobileDetection } from "@/hooks/use-mobile-detection";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [enrollmentDropdown, setEnrollmentDropdown] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Curriculum", path: "/curriculum" },
    { name: "Get Involved", path: "/get-involved" },
    { name: "Enrollment", path: isMobile ? "/enrollment" : "/enrollment/th-rogers", hasDropdown: !isMobile },
    { name: "Contact Us", path: "/contact" },
  ];

  const enrollmentSchools = [
    { name: "T.H.Rogers School", path: "/enrollment/th-rogers" },
    { name: "Hogg School", path: "/enrollment/hogg" },
    { name: "Wharton Dual Language Academy", path: "/enrollment/wharton" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isEnrollmentActive = () => location.pathname.startsWith('/enrollment');

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setEnrollmentDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 text-2xl font-bold bg-gradient-sunset bg-clip-text text-transparent">
            <img 
              src="/favicon.png" 
              alt="HorizonsForHope Logo" 
              className="h-8 w-8 object-contain"
            />
            HorizonsForHope
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div
                  key={item.path}
                  className="relative"
                  ref={dropdownRef}
                >
                  <button
                    onClick={() => setEnrollmentDropdown(!enrollmentDropdown)}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                      isEnrollmentActive()
                        ? "text-primary"
                        : "text-foreground/70"
                    }`}
                  >
                    {item.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${enrollmentDropdown ? 'rotate-180' : ''}`} />
                  </button>
                  {isEnrollmentActive() && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-sunset rounded-full" />
                  )}
                  
                  {/* Dropdown Menu */}
                  {enrollmentDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                      {enrollmentSchools.map((school) => (
                        <Link
                          key={school.path}
                          to={school.path}
                          onClick={() => setEnrollmentDropdown(false)}
                          className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-muted/50 transition-colors"
                        >
                          {school.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-foreground/70"
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-sunset rounded-full" />
                  )}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
