
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Menu, X, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  isLoggedIn?: boolean;
  userRole?: 'admin' | 'provider' | 'coordinator' | 'evaluator';
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn = false, userRole }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky-header">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-edusphere-600" />
            <span className="font-bold text-2xl text-edusphere-800">EduSphere</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="text-foreground hover:text-edusphere-700 transition">
                  Dashboard
                </Link>
                {userRole === 'admin' && (
                  <Link to="/admin" className="text-foreground hover:text-edusphere-700 transition">
                    Admin Panel
                  </Link>
                )}
                <Link to="/students" className="text-foreground hover:text-edusphere-700 transition">
                  Students
                </Link>
                <Link to="/providers" className="text-foreground hover:text-edusphere-700 transition">
                  Providers
                </Link>
                <Link to="/reports" className="text-foreground hover:text-edusphere-700 transition">
                  Reports
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link to="/profile" className="w-full">Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link to="/settings" className="w-full">Settings</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link to="/logout" className="w-full">Logout</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link to="/about" className="text-foreground hover:text-edusphere-700 transition">
                  About Us
                </Link>
                <Link to="/services" className="text-foreground hover:text-edusphere-700 transition">
                  Our Services
                </Link>
                <Link to="/contact" className="text-foreground hover:text-edusphere-700 transition">
                  Contact
                </Link>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" asChild>
                    <Link to="/login">Log In</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </div>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-[500px] py-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col space-y-4">
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="text-foreground hover:text-edusphere-700 px-2 py-1 rounded">
                  Dashboard
                </Link>
                {userRole === 'admin' && (
                  <Link to="/admin" className="text-foreground hover:text-edusphere-700 px-2 py-1 rounded">
                    Admin Panel
                  </Link>
                )}
                <Link to="/students" className="text-foreground hover:text-edusphere-700 px-2 py-1 rounded">
                  Students
                </Link>
                <Link to="/providers" className="text-foreground hover:text-edusphere-700 px-2 py-1 rounded">
                  Providers
                </Link>
                <Link to="/reports" className="text-foreground hover:text-edusphere-700 px-2 py-1 rounded">
                  Reports
                </Link>
                <Link to="/profile" className="text-foreground hover:text-edusphere-700 px-2 py-1 rounded">
                  Profile
                </Link>
                <Link to="/settings" className="text-foreground hover:text-edusphere-700 px-2 py-1 rounded">
                  Settings
                </Link>
                <Link to="/logout" className="text-foreground hover:text-edusphere-700 px-2 py-1 rounded">
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link to="/about" className="text-foreground hover:text-edusphere-700 px-2 py-1 rounded">
                  About Us
                </Link>
                <Link to="/services" className="text-foreground hover:text-edusphere-700 px-2 py-1 rounded">
                  Our Services
                </Link>
                <Link to="/contact" className="text-foreground hover:text-edusphere-700 px-2 py-1 rounded">
                  Contact
                </Link>
                <div className="flex flex-col space-y-2 pt-2">
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/login">Log In</Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </div>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
