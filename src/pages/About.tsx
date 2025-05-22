
import React from 'react';
import Layout from '@/components/layout/Layout';
import { GraduationCap, Building, Users, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">About EduSphere</h1>
          <p className="text-xl text-muted-foreground">
            Transforming special education services for preschool children across New York State
            through innovative technology and compassionate support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-4">
              At EduSphere, our mission is to streamline the delivery of special education
              services to preschool children by connecting educators, service providers, and
              families on one intuitive platform.
            </p>
            <p className="text-lg mb-4">
              We believe that every child deserves access to high-quality educational support,
              and we're committed to breaking down the administrative barriers that can delay
              or complicate service delivery.
            </p>
            <p className="text-lg">
              By simplifying compliance, reducing paperwork, and improving communication between
              all stakeholders, we help ensure that children receive the services they need when
              they need them.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2132&q=80" 
              alt="Children playing" 
              className="rounded-2xl shadow-xl max-w-full h-auto"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-200">
              <div className="rounded-full bg-edusphere-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-edusphere-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
              <p className="text-muted-foreground">
                We make special education services more accessible by simplifying processes and removing barriers.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-200">
              <div className="rounded-full bg-edusphere-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-edusphere-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accountability</h3>
              <p className="text-muted-foreground">
                Our platform ensures transparency and accountability in service delivery and reporting.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-200">
              <div className="rounded-full bg-edusphere-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-edusphere-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in everything we do, from product design to customer support.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-200">
              <div className="rounded-full bg-edusphere-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-edusphere-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously innovate to improve special education service delivery and outcomes.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2249&q=80" 
              alt="Team working together" 
              className="rounded-2xl shadow-xl max-w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-lg mb-4">
              EduSphere was founded by a dedicated team of educators, therapists, and technologists
              who understand the unique challenges of special education administration.
            </p>
            <p className="text-lg mb-4">
              Our diverse team brings together expertise in educational psychology, speech-language pathology,
              occupational therapy, software development, and data security to create a comprehensive
              solution for special education service management.
            </p>
            <p className="text-lg">
              We're united by a shared passion for making a positive impact on the lives of children
              with special needs and the professionals who support them.
            </p>
          </div>
        </div>

        <div className="bg-muted rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Our Mission</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Whether you're a school administrator, service provider, or parent, we invite you to join
            the EduSphere community and help us transform special education services for preschoolers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Contact Us
            </a>
            <a href="/signup" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Sign Up Today
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
