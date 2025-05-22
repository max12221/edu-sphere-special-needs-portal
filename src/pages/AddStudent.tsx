
import React from 'react';
import Layout from '@/components/layout/Layout';
import StudentForm from '@/components/students/StudentForm';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AddStudent: React.FC = () => {
  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to your backend
    // and then redirect to the student list or the new student's profile
  };

  return (
    <Layout isLoggedIn={true}>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/students">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Students
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Add New Student</h1>
          <p className="text-gray-500">Enter student details to create a new record</p>
        </div>
        
        <div className="mb-8">
          <StudentForm onSubmit={handleSubmit} />
        </div>
      </div>
    </Layout>
  );
};

export default AddStudent;
