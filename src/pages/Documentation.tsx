
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, Book, FileText, Users, ClipboardList, BarChart, CheckCircle, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Documentation: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <Layout isLoggedIn={true}>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <Book className="h-12 w-12 text-edusphere-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-6">EduSphere Documentation</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Comprehensive guides and reference materials for using the EduSphere platform
          </p>
          <div className="flex max-w-xl mx-auto">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                className="pl-10 py-6" 
                placeholder="Search documentation..." 
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button className="ml-2">Search</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="font-medium text-lg mb-4">Table of Contents</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#getting-started" className="text-edusphere-600 hover:text-edusphere-700 font-medium">
                    Getting Started
                  </a>
                </li>
                <li>
                  <a href="#student-management" className="text-foreground hover:text-edusphere-600">
                    Student Management
                  </a>
                </li>
                <li>
                  <a href="#provider-portal" className="text-foreground hover:text-edusphere-600">
                    Provider Portal
                  </a>
                </li>
                <li>
                  <a href="#document-management" className="text-foreground hover:text-edusphere-600">
                    Document Management
                  </a>
                </li>
                <li>
                  <a href="#reports" className="text-foreground hover:text-edusphere-600">
                    Reports & Analytics
                  </a>
                </li>
                <li>
                  <a href="#admin" className="text-foreground hover:text-edusphere-600">
                    Administration
                  </a>
                </li>
                <li>
                  <a href="#api" className="text-foreground hover:text-edusphere-600">
                    API Documentation
                  </a>
                </li>
              </ul>
              
              <h3 className="font-medium text-lg mb-4 mt-8">Documentation Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Button variant="link" className="p-0 h-auto text-foreground hover:text-edusphere-600">
                    Release Notes
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="p-0 h-auto text-foreground hover:text-edusphere-600">
                    Video Tutorials
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="p-0 h-auto text-foreground hover:text-edusphere-600">
                    PDF Downloads
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <section id="getting-started" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-full bg-edusphere-100 p-2">
                  <CheckCircle className="h-5 w-5 text-edusphere-600" />
                </div>
                <h2 className="text-3xl font-bold">Getting Started</h2>
              </div>
              
              <p className="text-lg mb-6">
                Welcome to EduSphere! This section will guide you through the initial setup
                and basic navigation of the platform.
              </p>
              
              <Tabs defaultValue="overview" className="mb-8">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="setup">Account Setup</TabsTrigger>
                  <TabsTrigger value="navigation">Navigation</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="p-6 border rounded-b-md mt-2">
                  <h3 className="text-xl font-semibold mb-4">EduSphere Overview</h3>
                  <p className="mb-4">
                    EduSphere is a comprehensive platform designed to streamline the management of
                    special education services for preschool children in New York State. The platform
                    connects students, service providers, and educational institutions in one unified system.
                  </p>
                  <h4 className="text-lg font-semibold mb-2">Core Features</h4>
                  <ul className="space-y-2 mb-4 list-disc pl-5">
                    <li>Student profile and IEP management</li>
                    <li>Service provider credentialing and session tracking</li>
                    <li>Document storage and validation</li>
                    <li>Reporting and analytics tools</li>
                    <li>Billing and attendance tracking</li>
                  </ul>
                  <h4 className="text-lg font-semibold mb-2">User Roles</h4>
                  <ul className="space-y-2 list-disc pl-5">
                    <li><strong>Administrators:</strong> Full system access with configuration abilities</li>
                    <li><strong>Coordinators:</strong> Manage student assignments and service scheduling</li>
                    <li><strong>Providers:</strong> Document delivered services and access assigned student information</li>
                    <li><strong>Evaluators:</strong> Conduct and document student evaluations</li>
                  </ul>
                </TabsContent>
                <TabsContent value="setup" className="p-6 border rounded-b-md mt-2">
                  <h3 className="text-xl font-semibold mb-4">Account Setup Guide</h3>
                  <ol className="space-y-4 list-decimal pl-5">
                    <li>
                      <strong>Registration</strong>
                      <p>Complete the registration form with your name, email, and organization details.</p>
                    </li>
                    <li>
                      <strong>Email Verification</strong>
                      <p>Click the verification link sent to your email address.</p>
                    </li>
                    <li>
                      <strong>Complete Your Profile</strong>
                      <p>Add professional credentials, contact information, and profile photo.</p>
                    </li>
                    <li>
                      <strong>Role Assignment</strong>
                      <p>Your administrator will assign the appropriate role and permissions.</p>
                    </li>
                    <li>
                      <strong>Training</strong>
                      <p>Complete the required training modules for your assigned role.</p>
                    </li>
                  </ol>
                  <div className="bg-muted p-4 rounded-md mt-4">
                    <h4 className="font-semibold mb-2">Need Help?</h4>
                    <p>If you encounter any issues during the setup process, please contact our support team at <a href="mailto:support@edusphere.edu" className="text-edusphere-600 hover:underline">support@edusphere.edu</a>.</p>
                  </div>
                </TabsContent>
                <TabsContent value="navigation" className="p-6 border rounded-b-md mt-2">
                  <h3 className="text-xl font-semibold mb-4">Platform Navigation</h3>
                  <p className="mb-4">
                    The EduSphere platform features a user-friendly interface with consistent navigation elements across all pages.
                  </p>
                  <h4 className="text-lg font-semibold mb-2">Main Navigation Elements</h4>
                  <ul className="space-y-3 mb-4">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                        <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <strong>Header Navigation:</strong> Access to Dashboard, Students, Providers, Reports, and Account settings.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                        <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <strong>Dashboard:</strong> Quick access to recent activities, pending tasks, and important notifications.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                        <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <strong>Profile Menu:</strong> Access your profile, settings, and logout options.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                        <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <strong>Search:</strong> Global search functionality available in the top navigation bar.
                      </div>
                    </li>
                  </ul>
                  <div className="bg-muted p-4 rounded-md">
                    <p className="font-semibold">💡 Pro Tip:</p>
                    <p>Use keyboard shortcuts for faster navigation. Press <kbd className="px-2 py-1 bg-background rounded border">?</kbd> to view available shortcuts.</p>
                  </div>
                </TabsContent>
              </Tabs>
              
              <Accordion type="single" collapsible className="mb-8">
                <AccordionItem value="setup-checklist">
                  <AccordionTrigger>Getting Started Checklist</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-edusphere-100 p-1">
                        <CheckCircle className="h-4 w-4 text-edusphere-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Complete your profile</h4>
                        <p className="text-sm text-muted-foreground">
                          Add your professional information, credentials, and contact details.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-edusphere-100 p-1">
                        <CheckCircle className="h-4 w-4 text-edusphere-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Upload required documents</h4>
                        <p className="text-sm text-muted-foreground">
                          Add your professional licenses, certifications, and other required documentation.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-edusphere-100 p-1">
                        <CheckCircle className="h-4 w-4 text-edusphere-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Complete training modules</h4>
                        <p className="text-sm text-muted-foreground">
                          Finish the required training for your role in the system.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-edusphere-100 p-1">
                        <CheckCircle className="h-4 w-4 text-edusphere-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Set notification preferences</h4>
                        <p className="text-sm text-muted-foreground">
                          Configure how and when you receive alerts and notifications.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq">
                  <AccordionTrigger>Frequently Asked Questions</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <div>
                      <h4 className="font-medium">How do I reset my password?</h4>
                      <p className="text-sm text-muted-foreground">
                        Click the "Forgot Password" link on the login page and follow the instructions sent to your email.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">Can I use EduSphere on mobile devices?</h4>
                      <p className="text-sm text-muted-foreground">
                        Yes, EduSphere is fully responsive and works on smartphones and tablets.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">How do I get help if I'm having trouble?</h4>
                      <p className="text-sm text-muted-foreground">
                        You can contact our support team via email, chat, or phone during business hours.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="flex justify-end">
                <Button variant="outline" className="flex items-center gap-2">
                  Next: Student Management
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </section>
            
            <section id="student-management" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-full bg-edusphere-100 p-2">
                  <Users className="h-5 w-5 text-edusphere-600" />
                </div>
                <h2 className="text-3xl font-bold">Student Management</h2>
              </div>
              
              <p className="text-lg mb-6">
                This module enables you to manage all aspects of student information,
                from basic details to IEP requirements and service histories.
              </p>
              
              <div className="space-y-8">
                <div className="p-6 border rounded-md">
                  <h3 className="text-xl font-semibold mb-4">Adding a New Student</h3>
                  <p className="mb-4">
                    To add a new student to the system, navigate to the Students section from the main
                    navigation menu and click the "Add Student" button. You will need to complete the
                    following information:
                  </p>
                  <ul className="space-y-2 list-disc pl-5 mb-4">
                    <li>Basic information (name, date of birth, contact information)</li>
                    <li>Parent/guardian details</li>
                    <li>School and district information</li>
                    <li>Service eligibility and requirements</li>
                  </ul>
                  <Button>View Detailed Steps</Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 border rounded-md">
                    <h3 className="text-lg font-semibold mb-3">Managing IEP Documents</h3>
                    <p className="mb-4">
                      Learn how to upload, update, and track IEP documents for each student.
                      This section covers document validation and compliance tracking.
                    </p>
                    <Button variant="outline" className="w-full">Read More</Button>
                  </div>
                  
                  <div className="p-6 border rounded-md">
                    <h3 className="text-lg font-semibold mb-3">Service Tracking</h3>
                    <p className="mb-4">
                      Monitor services delivered to each student and compare them against
                      IEP requirements to ensure compliance and appropriate intervention.
                    </p>
                    <Button variant="outline" className="w-full">Read More</Button>
                  </div>
                </div>
                
                <div className="p-6 border rounded-md bg-muted">
                  <h3 className="text-lg font-semibold mb-3">Best Practices</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                        <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Update student records promptly when changes occur</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                        <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Regularly review service delivery against IEP requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                        <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Maintain organized documentation for each student</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                        <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>Set reminders for upcoming evaluations and IEP reviews</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Additional sections would follow the same pattern */}
            <section id="provider-portal" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-full bg-edusphere-100 p-2">
                  <ClipboardList className="h-5 w-5 text-edusphere-600" />
                </div>
                <h2 className="text-3xl font-bold">Provider Portal</h2>
              </div>
              <p className="text-lg mb-6">
                Documentation for service providers to manage credentials, session notes, and billing.
              </p>
              <div className="p-6 border rounded-md text-center">
                <p className="text-muted-foreground">Detailed documentation coming soon.</p>
                <Button className="mt-4">Request Early Access</Button>
              </div>
            </section>
            
            <section id="document-management" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-full bg-edusphere-100 p-2">
                  <FileText className="h-5 w-5 text-edusphere-600" />
                </div>
                <h2 className="text-3xl font-bold">Document Management</h2>
              </div>
              <p className="text-lg mb-6">
                Learn how to upload, organize, and manage all documentation in EduSphere.
              </p>
              <div className="p-6 border rounded-md text-center">
                <p className="text-muted-foreground">Detailed documentation coming soon.</p>
                <Button className="mt-4">Request Early Access</Button>
              </div>
            </section>
            
            <section id="reports" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-full bg-edusphere-100 p-2">
                  <BarChart className="h-5 w-5 text-edusphere-600" />
                </div>
                <h2 className="text-3xl font-bold">Reports & Analytics</h2>
              </div>
              <p className="text-lg mb-6">
                Guidance on generating and interpreting reports within the platform.
              </p>
              <div className="p-6 border rounded-md text-center">
                <p className="text-muted-foreground">Detailed documentation coming soon.</p>
                <Button className="mt-4">Request Early Access</Button>
              </div>
            </section>
            
            <div className="bg-muted p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Need Additional Help?</h3>
              <p className="mb-4">
                If you can't find what you're looking for in our documentation, our support team is ready to assist you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="bg-background">
                  Contact Support
                </Button>
                <Button variant="link" className="bg-transparent">
                  View Video Tutorials
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Documentation;
