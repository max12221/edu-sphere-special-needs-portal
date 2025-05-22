
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Book, 
  HelpCircle, 
  MessageSquare, 
  Video, 
  FileText, 
  ArrowRight, 
  Mail, 
  Phone 
} from 'lucide-react';

const Help: React.FC = () => {
  return (
    <Layout isLoggedIn={true}>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">EduSphere Help Center</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find answers to common questions or contact our support team for assistance.
          </p>
          <div className="flex max-w-xl mx-auto">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                className="pl-10 py-6" 
                placeholder="Search for help articles, topics, or questions..." 
                type="search"
              />
            </div>
            <Button className="ml-2">Search</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-200">
            <div className="rounded-full bg-edusphere-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <Book className="h-6 w-6 text-edusphere-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Documentation</h3>
            <p className="text-muted-foreground mb-4">
              Browse our comprehensive documentation to learn about EduSphere's features.
            </p>
            <Button variant="outline" asChild className="w-full">
              <Link to="/documentation">
                View Documentation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-200">
            <div className="rounded-full bg-edusphere-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <HelpCircle className="h-6 w-6 text-edusphere-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">FAQs</h3>
            <p className="text-muted-foreground mb-4">
              Find answers to frequently asked questions about our platform.
            </p>
            <Button variant="outline" asChild className="w-full">
              <Link to="/faqs">
                Browse FAQs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-200">
            <div className="rounded-full bg-edusphere-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <Video className="h-6 w-6 text-edusphere-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
            <p className="text-muted-foreground mb-4">
              Watch step-by-step video guides for using EduSphere features.
            </p>
            <Button variant="outline" className="w-full">
              Watch Tutorials
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">Popular Help Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                <FileText className="h-6 w-6 text-edusphere-600 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Getting Started with EduSphere</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn how to set up your account and navigate the platform.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                <FileText className="h-6 w-6 text-edusphere-600 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Managing Student Records</h3>
                  <p className="text-sm text-muted-foreground">
                    How to create, update, and manage student information.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                <FileText className="h-6 w-6 text-edusphere-600 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Uploading and Managing Documents</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn how to upload, organize, and share important documents.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                <FileText className="h-6 w-6 text-edusphere-600 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Session Documentation</h3>
                  <p className="text-sm text-muted-foreground">
                    How to record and submit session notes for services provided.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                <FileText className="h-6 w-6 text-edusphere-600 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Generating Reports</h3>
                  <p className="text-sm text-muted-foreground">
                    How to create and export different types of reports.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                <FileText className="h-6 w-6 text-edusphere-600 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Account and Security Settings</h3>
                  <p className="text-sm text-muted-foreground">
                    Managing your account, permissions, and security options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-muted p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="rounded-full bg-edusphere-100 p-3 mr-4">
                <MessageSquare className="h-6 w-6 text-edusphere-600" />
              </div>
              <h3 className="text-xl font-semibold">Live Chat Support</h3>
            </div>
            <p className="mb-6">
              Chat with our support team in real-time for immediate assistance with your questions.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Available Monday-Friday, 9am-5pm EST
            </p>
            <Button>
              Start Live Chat
            </Button>
          </div>
          
          <div className="bg-muted p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="rounded-full bg-edusphere-100 p-3 mr-4">
                <Mail className="h-6 w-6 text-edusphere-600" />
              </div>
              <h3 className="text-xl font-semibold">Email Support</h3>
            </div>
            <p className="mb-6">
              Send us an email and our team will respond to your inquiry within 24 business hours.
            </p>
            <div className="flex items-center mb-4">
              <Mail className="h-5 w-5 text-edusphere-600 mr-2" />
              <a href="mailto:support@edusphere.edu" className="hover:text-edusphere-600 transition">
                support@edusphere.edu
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-edusphere-600 mr-2" />
              <a href="tel:+12125550123" className="hover:text-edusphere-600 transition">
                (212) 555-0123
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
