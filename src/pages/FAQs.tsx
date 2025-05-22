
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <HelpCircle className="h-12 w-12 text-edusphere-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find answers to the most common questions about the EduSphere platform.
          </p>
          <div className="flex max-w-xl mx-auto">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                className="pl-10 py-6" 
                placeholder="Search for answers..." 
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button className="ml-2">Search</Button>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="general" className="mb-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="student">Student Records</TabsTrigger>
              <TabsTrigger value="provider">Provider Portal</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general" className="mt-6">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg">What is EduSphere?</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <p>
                      EduSphere is a comprehensive platform designed to streamline the management of 
                      special education services for preschool children (ages 3-5) in New York State. 
                      It connects educational institutions, service providers, and administrators in 
                      one unified system to improve service delivery, compliance, and outcomes for children.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg">How can EduSphere help my organization?</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <p className="mb-4">
                      EduSphere offers numerous benefits for organizations involved in special education services:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Reduced administrative burden through streamlined digital processes</li>
                      <li>Improved compliance with state regulations and IEP requirements</li>
                      <li>Enhanced communication between all stakeholders</li>
                      <li>Comprehensive reporting for better decision-making</li>
                      <li>Secure document management and storage</li>
                      <li>Simplified billing and service verification</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg">Is EduSphere compliant with privacy regulations?</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <p className="mb-4">
                      Yes, EduSphere is fully compliant with all relevant privacy regulations, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Family Educational Rights and Privacy Act (FERPA)</li>
                      <li>Health Insurance Portability and Accountability Act (HIPAA)</li>
                      <li>Children's Online Privacy Protection Act (COPPA)</li>
                      <li>New York State Education Law §2-d</li>
                    </ul>
                    <p className="mt-4">
                      We implement robust security measures to protect all data, including encryption, 
                      role-based access controls, regular security audits, and comprehensive data backup procedures.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg">What technical requirements are needed to use EduSphere?</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <p className="mb-4">
                      EduSphere is a web-based platform that works on most modern devices with an internet connection. Recommended specifications:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Web browser: Chrome, Firefox, Safari, or Edge (latest versions)</li>
                      <li>Internet connection: Broadband connection (1 Mbps or faster)</li>
                      <li>Screen resolution: Minimum 1280 x 720</li>
                      <li>Mobile devices: iOS 12+ or Android 8+</li>
                    </ul>
                    <p className="mt-4">
                      No software installation is required as EduSphere is entirely cloud-based.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg">How do I get training for my staff?</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <p>
                      EduSphere offers comprehensive training options for all users. These include:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                      <li>Interactive online training modules for each user role</li>
                      <li>Live webinar sessions scheduled regularly</li>
                      <li>Custom on-site training (available for enterprise plans)</li>
                      <li>Comprehensive documentation and video tutorials</li>
                      <li>One-on-one training sessions with our implementation specialists</li>
                    </ul>
                    <p className="mt-4">
                      To schedule training for your organization, please contact our customer success 
                      team at <a href="mailto:training@edusphere.edu" className="text-edusphere-600 hover:underline">training@edusphere.edu</a>.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            
            <TabsContent value="account" className="mt-6">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg">How do I create an account?</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <p>
                      Account creation is typically managed by your organization's administrator.
                      They will send you an invitation email with instructions to complete your registration.
                      If you're an administrator setting up an organization account, please contact our
                      sales team at <a href="mailto:sales@edusphere.edu" className="text-edusphere-600 hover:underline">sales@edusphere.edu</a>.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg">How do I reset my password?</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <p className="mb-4">
                      To reset your password:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Go to the login page</li>
                      <li>Click on "Forgot Password"</li>
                      <li>Enter your email address</li>
                      <li>Check your email for reset instructions</li>
                      <li>Follow the link to create a new password</li>
                    </ol>
                    <p className="mt-4">
                      If you don't receive the reset email within a few minutes, check your spam folder
                      or contact support for assistance.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg">What roles are available in EduSphere?</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <p className="mb-4">
                      EduSphere offers several user roles with different permissions:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Administrator:</strong> Complete system access, user management, and configuration</li>
                      <li><strong>Coordinator:</strong> Manages student assignments, scheduling, and service coordination</li>
                      <li><strong>Provider:</strong> Documents delivered services and accesses assigned student information</li>
                      <li><strong>Evaluator:</strong> Conducts and documents student evaluations</li>
                      <li><strong>Billing Specialist:</strong> Manages billing, claims, and financial reporting</li>
                    </ul>
                    <p className="mt-4">
                      Roles and permissions can be customized to meet your organization's specific needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg">How secure is my account?</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <p className="mb-4">
                      EduSphere implements multiple security measures to protect user accounts:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Secure password requirements with regular rotation policies</li>
                      <li>Optional two-factor authentication</li>
                      <li>Automatic session timeout after periods of inactivity</li>
                      <li>Login anomaly detection and prevention</li>
                      <li>Role-based access controls to limit data access</li>
                      <li>All activities are logged for audit purposes</li>
                    </ul>
                    <p className="mt-4">
                      We recommend enabling two-factor authentication for enhanced security.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            
            <TabsContent value="student" className="mt-6">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg">How do I add a new student to the system?</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <p className="mb-4">
                      To add a new student:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Navigate to the Students section in the main menu</li>
                      <li>Click the "Add Student" button</li>
                      <li>Complete the required information in the form</li>
                      <li>Upload any necessary documentation (IEP, evaluations, etc.)</li>
                      <li>Click "Save" to create the student record</li>
                    </ol>
                    <p className="mt-4">
                      Note that you must have appropriate permissions to add new students.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg">How do I upload an IEP document?</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <p className="mb-4">
                      To upload an IEP document:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Navigate to the student's profile</li>
                      <li>Select the "Documents" tab</li>
                      <li>Click "Upload Document"</li>
                      <li>Select "IEP" as the document type</li>
                      <li>Choose the file from your computer (PDF format recommended)</li>
                      <li>Add relevant details like effective dates</li>
                      <li>Click "Upload" to save the document</li>
                    </ol>
                    <p className="mt-4">
                      The system will validate the document and extract key information automatically.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg">How do I track services for a student?</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <p className="mb-4">
                      EduSphere provides comprehensive service tracking for each student:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Navigate to the student's profile</li>
                      <li>Select the "Services" tab</li>
                      <li>View the service history, including:
                        <ul className="list-disc pl-5 mt-2">
                          <li>Mandated services from the IEP</li>
                          <li>Delivered services with dates and providers</li>
                          <li>Compliance status (on track, at risk, not compliant)</li>
                        </ul>
                      </li>
                      <li>Use filters to view specific date ranges or service types</li>
                      <li>Export service reports as needed</li>
                    </ol>
                    <p className="mt-4">
                      The system automatically compares delivered services against IEP mandates to track compliance.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            
            <TabsContent value="provider" className="mt-6">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg">How do I document a therapy session?</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <p>Session documentation coming soon. This feature is currently under development.</p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg">How do I update my credentials?</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <p>Credential management coming soon. This feature is currently under development.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            
            <TabsContent value="billing" className="mt-6">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg">How does billing work in EduSphere?</AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <p>Billing features coming soon. This module is currently under development.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
          
          <div className="bg-muted p-8 rounded-xl text-center mb-8">
            <h3 className="text-xl font-bold mb-4">Can't find what you're looking for?</h3>
            <p className="mb-6 max-w-lg mx-auto">
              Our support team is ready to help with any questions or issues you might have.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <a href="mailto:support@edusphere.edu">Contact Support</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/documentation">View Documentation</a>
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Popular Topics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start">Account Setup</Button>
              <Button variant="outline" className="justify-start">Password Reset</Button>
              <Button variant="outline" className="justify-start">Document Management</Button>
              <Button variant="outline" className="justify-start">Service Documentation</Button>
              <Button variant="outline" className="justify-start">Reporting Features</Button>
              <Button variant="outline" className="justify-start">Security & Privacy</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQs;
