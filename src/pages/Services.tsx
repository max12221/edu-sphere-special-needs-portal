
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Users, ClipboardList, FileText, BarChart, Calendar, Shield, Database, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Services: React.FC = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-edusphere-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive tools and services to streamline special education
              management for preschool children in New York State.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Service 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-200 flex flex-col h-full">
              <div className="rounded-full bg-edusphere-100 p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-edusphere-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Student Management</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                Comprehensive digital profiles for each student, including personal information, 
                evaluation results, IEP details, and service history.
              </p>
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Secure student record management</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Digital IEP tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Service history documentation</span>
                </li>
              </ul>
              <Button size="sm" asChild>
                <Link to="/students">Learn More</Link>
              </Button>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-200 flex flex-col h-full">
              <div className="rounded-full bg-edusphere-100 p-4 w-16 h-16 flex items-center justify-center mb-6">
                <ClipboardList className="h-8 w-8 text-edusphere-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Provider Portal</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                Specialized tools for service providers to manage credentials, record session notes, 
                and streamline billing processes.
              </p>
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Credential management</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Digital session documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Medicaid billing integration</span>
                </li>
              </ul>
              <Button size="sm" asChild>
                <Link to="/providers">Learn More</Link>
              </Button>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-200 flex flex-col h-full">
              <div className="rounded-full bg-edusphere-100 p-4 w-16 h-16 flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-edusphere-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Document Management</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                Secure storage and management of all critical documents, including IEPs, 
                evaluations, and STAC forms.
              </p>
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Cloud document storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Document validation tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Secure access control</span>
                </li>
              </ul>
              <Button size="sm" variant="outline">Coming Soon</Button>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-200 flex flex-col h-full">
              <div className="rounded-full bg-edusphere-100 p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-edusphere-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Attendance Tracking</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                Digital attendance system that connects directly to service delivery 
                requirements and billing processes.
              </p>
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Digital attendance records</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Service compliance tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Automated absence notifications</span>
                </li>
              </ul>
              <Button size="sm" variant="outline">Coming Soon</Button>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-200 flex flex-col h-full">
              <div className="rounded-full bg-edusphere-100 p-4 w-16 h-16 flex items-center justify-center mb-6">
                <BarChart className="h-8 w-8 text-edusphere-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Reports & Analytics</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                Comprehensive reporting tools for tracking service delivery, compliance, 
                and student progress over time.
              </p>
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Custom report generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Data visualization</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>CSV data export</span>
                </li>
              </ul>
              <Button size="sm" asChild>
                <Link to="/reports">Learn More</Link>
              </Button>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-all duration-200 flex flex-col h-full">
              <div className="rounded-full bg-edusphere-100 p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-edusphere-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Compliance Management</h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                Tools to ensure compliance with state regulations, including credential tracking 
                and service delivery verification.
              </p>
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Regulatory compliance tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Credential expiration alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-edusphere-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Service verification tools</span>
                </li>
              </ul>
              <Button size="sm" variant="outline">Coming Soon</Button>
            </div>
          </div>

          <div className="bg-edusphere-50 rounded-2xl p-8 md:p-12 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Integration Services</h2>
                <p className="text-lg mb-4">
                  Our team provides comprehensive support for school districts and service providers
                  looking to integrate EduSphere into their existing systems.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                      <FileCheck className="h-4 w-4 text-edusphere-600" />
                    </div>
                    <span>Custom implementation plans tailored to your organization's needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                      <FileCheck className="h-4 w-4 text-edusphere-600" />
                    </div>
                    <span>Data migration assistance from legacy systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                      <FileCheck className="h-4 w-4 text-edusphere-600" />
                    </div>
                    <span>API integration with existing educational platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="rounded-full bg-edusphere-100 p-1 mt-1">
                      <FileCheck className="h-4 w-4 text-edusphere-600" />
                    </div>
                    <span>Comprehensive staff training programs</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link to="/contact">Request a Consultation</Link>
                </Button>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Integration services" 
                  className="rounded-xl shadow-lg max-w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              Join the hundreds of schools and providers already using EduSphere to streamline their
              special education services and improve outcomes for preschool children.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/signup">Sign Up Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
