
import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-7 w-7 text-edusphere-600" />
              <span className="font-bold text-xl text-edusphere-800">EduSphere</span>
            </Link>
            <p className="text-muted-foreground">
              Streamlining special education services for preschool children in New York State.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-edusphere-600 transition">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/students" className="text-muted-foreground hover:text-edusphere-600 transition">
                  Students
                </Link>
              </li>
              <li>
                <Link to="/providers" className="text-muted-foreground hover:text-edusphere-600 transition">
                  Providers
                </Link>
              </li>
              <li>
                <Link to="/reports" className="text-muted-foreground hover:text-edusphere-600 transition">
                  Reports
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-edusphere-600 transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-muted-foreground hover:text-edusphere-600 transition">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-muted-foreground hover:text-edusphere-600 transition">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                Email: support@edusphere.edu
              </li>
              <li className="text-muted-foreground">
                Phone: (212) 555-0123
              </li>
              <li className="text-muted-foreground">
                Address: 123 Education Blvd, New York, NY 10001
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} EduSphere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
