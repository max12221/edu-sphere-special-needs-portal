
import React from 'react';
import Layout from '@/components/layout/Layout';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Have questions about EduSphere? We're here to help.
            Reach out to our team using any of the methods below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-200 flex flex-col items-center text-center">
            <div className="rounded-full bg-edusphere-100 p-4 w-16 h-16 flex items-center justify-center mb-4">
              <Phone className="h-8 w-8 text-edusphere-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground">
              Our support team is available Monday through Friday from 9am to 5pm EST.
            </p>
            <p className="font-medium mt-4">
              <a href="tel:+12125550123" className="hover:text-edusphere-600 transition">(212) 555-0123</a>
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-200 flex flex-col items-center text-center">
            <div className="rounded-full bg-edusphere-100 p-4 w-16 h-16 flex items-center justify-center mb-4">
              <Mail className="h-8 w-8 text-edusphere-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">
              Send us an email and we'll respond within 24 business hours.
            </p>
            <p className="font-medium mt-4">
              <a href="mailto:support@edusphere.edu" className="hover:text-edusphere-600 transition">support@edusphere.edu</a>
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-200 flex flex-col items-center text-center">
            <div className="rounded-full bg-edusphere-100 p-4 w-16 h-16 flex items-center justify-center mb-4">
              <MapPin className="h-8 w-8 text-edusphere-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Office</h3>
            <p className="text-muted-foreground">
              Visit our headquarters for in-person consultations.
            </p>
            <p className="font-medium mt-4">
              123 Education Blvd<br />
              New York, NY 10001
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone (Optional)
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What is your message about?"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full md:w-auto">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
            <div className="bg-muted p-6 rounded-xl mb-8">
              <div className="flex items-start gap-4 mb-4">
                <Clock className="h-5 w-5 mt-0.5 text-edusphere-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Office Hours</h3>
                  <p className="text-muted-foreground">Monday-Friday: 9:00 AM - 5:00 PM EST</p>
                  <p className="text-muted-foreground">Saturday-Sunday: Closed</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 mt-0.5 text-edusphere-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Support Hours</h3>
                  <p className="text-muted-foreground">Technical Support: 8:00 AM - 6:00 PM EST</p>
                  <p className="text-muted-foreground">Emergency Support: 24/7</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Find Us</h2>
            <div className="rounded-xl overflow-hidden h-[300px] mb-4">
              {/* Placeholder for a map - in a real app, you'd integrate Google Maps or similar */}
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <MapPin className="h-12 w-12 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground font-medium">Map Placeholder</span>
              </div>
            </div>
            <p className="text-muted-foreground">
              Located in the heart of New York City, our office is easily accessible by public transportation.
              Street parking is available, and we're just a few blocks from major subway lines.
            </p>
          </div>
        </div>
        
        <div className="bg-edusphere-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Special Education Services?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Schedule a personalized demo to see how EduSphere can help your organization streamline
            special education management and improve outcomes for the children you serve.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:demos@edusphere.edu?subject=Demo%20Request">Request a Demo</a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
