
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, ClipboardList, FileText, Chart } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-edusphere-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-edusphere-900">
                Special Education Services Management Made Simple
              </h1>
              <p className="text-lg text-muted-foreground">
                EduSphere streamlines preschool special education services in New York State, 
                connecting students, providers, and schools in one comprehensive platform.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/login">Log In</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80" 
                alt="Children in classroom" 
                className="rounded-2xl shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Comprehensive Special Education Management</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform offers everything you need to manage special education services efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-200">
              <div className="rounded-full bg-edusphere-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-edusphere-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Student Management</h3>
              <p className="text-muted-foreground">
                Comprehensive tools for managing student profiles, evaluations, IEPs, and service histories.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-200">
              <div className="rounded-full bg-edusphere-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <ClipboardList className="h-6 w-6 text-edusphere-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Provider Portal</h3>
              <p className="text-muted-foreground">
                Easy access for service providers to manage credentials, session notes, and billing.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-200">
              <div className="rounded-full bg-edusphere-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-edusphere-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Document Management</h3>
              <p className="text-muted-foreground">
                Securely store, manage, and validate IEPs, evaluations, and other critical documents.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-200">
              <div className="rounded-full bg-edusphere-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Chart className="h-6 w-6 text-edusphere-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reports & Analytics</h3>
              <p className="text-muted-foreground">
                Generate detailed reports on services delivered, compliance, and student progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1555116505-38ab61800975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Teacher with children" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Why Choose EduSphere?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-edusphere-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Streamlined Compliance</h3>
                    <p className="text-muted-foreground">Automatically match delivered services to IEP requirements, ensuring compliance with state regulations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-edusphere-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Reduce Administrative Burden</h3>
                    <p className="text-muted-foreground">Digitize paperwork and automate routine tasks to free up time for what matters most: supporting children.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-edusphere-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Improve Communication</h3>
                    <p className="text-muted-foreground">Connect all stakeholders on a single platform for seamless collaboration and information sharing.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-edusphere-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Data-Driven Decisions</h3>
                    <p className="text-muted-foreground">Generate comprehensive reports to analyze service delivery, identify gaps, and improve outcomes.</p>
                  </div>
                </li>
              </ul>
              <Button size="lg" asChild>
                <Link to="/signup">Start Your Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-edusphere-600 text-white rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to streamline your special education services?</h2>
            <p className="mb-8 max-w-2xl mx-auto text-white/90">
              Join the hundreds of districts and providers already using EduSphere to improve outcomes for preschool children with special needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/signup">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
