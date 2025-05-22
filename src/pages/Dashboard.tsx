
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserRound, Users, FileText, Calendar, Clock, Activity } from 'lucide-react';

// Sample data for dashboard
const dashboardData = {
  students: {
    total: 154,
    active: 128,
    pendingEvaluation: 26,
    recentlyUpdated: 12
  },
  providers: {
    total: 43,
    active: 38,
    newApplications: 5
  },
  sessions: {
    scheduled: 86,
    completed: 64,
    cancelled: 7
  }
};

const Dashboard: React.FC = () => {
  return (
    <Layout isLoggedIn={true} userRole="admin">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500">Welcome back to EduSphere!</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <span className="text-sm text-muted-foreground">Today: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="providers">Providers</TabsTrigger>
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
          </TabsList>
          
          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Students Card */}
              <Card className="hover:shadow-md transition-all duration-200">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-medium">Students</CardTitle>
                    <UserRound className="h-5 w-5 text-edusphere-600" />
                  </div>
                  <CardDescription>Student enrollment overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl font-bold">{dashboardData.students.total}</span>
                    <span className="text-sm text-muted-foreground">Total Students</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Active</span>
                      <span className="font-medium">{dashboardData.students.active}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Pending Evaluation</span>
                      <span className="font-medium">{dashboardData.students.pendingEvaluation}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Recently Updated</span>
                      <span className="font-medium">{dashboardData.students.recentlyUpdated}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Providers Card */}
              <Card className="hover:shadow-md transition-all duration-200">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-medium">Providers</CardTitle>
                    <Users className="h-5 w-5 text-edusphere-600" />
                  </div>
                  <CardDescription>Service provider overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl font-bold">{dashboardData.providers.total}</span>
                    <span className="text-sm text-muted-foreground">Total Providers</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Active Providers</span>
                      <span className="font-medium">{dashboardData.providers.active}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>New Applications</span>
                      <span className="font-medium">{dashboardData.providers.newApplications}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Sessions Card */}
              <Card className="hover:shadow-md transition-all duration-200">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-medium">Sessions</CardTitle>
                    <Calendar className="h-5 w-5 text-edusphere-600" />
                  </div>
                  <CardDescription>Weekly session overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl font-bold">{dashboardData.sessions.scheduled}</span>
                    <span className="text-sm text-muted-foreground">Scheduled This Week</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Completed</span>
                      <span className="font-medium">{dashboardData.sessions.completed}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Cancelled</span>
                      <span className="font-medium">{dashboardData.sessions.cancelled}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Recent Activity Card */}
              <Card className="md:col-span-2 lg:col-span-3 hover:shadow-md transition-all duration-200">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Recent Activity</CardTitle>
                    <Activity className="h-5 w-5 text-edusphere-600" />
                  </div>
                  <CardDescription>Latest updates across the system</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">New IEP Uploaded</p>
                        <p className="text-sm text-muted-foreground">Emily Johnson's IEP was uploaded by Dr. Smith</p>
                        <p className="text-xs text-muted-foreground mt-1">Today, 9:42 AM</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Session Rescheduled</p>
                        <p className="text-sm text-muted-foreground">Speech therapy for Alex Martinez moved to Thursday</p>
                        <p className="text-xs text-muted-foreground mt-1">Yesterday, 2:15 PM</p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <UserRound className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">New Student Enrolled</p>
                        <p className="text-sm text-muted-foreground">Noah Williams was added to the system</p>
                        <p className="text-xs text-muted-foreground mt-1">Yesterday, 10:30 AM</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="students" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Student Management</CardTitle>
                <CardDescription>Manage all students in the system</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Student management content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="providers" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Provider Management</CardTitle>
                <CardDescription>Manage all service providers in the system</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Provider management content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="sessions" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Session Management</CardTitle>
                <CardDescription>View and manage therapy sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Session management content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Dashboard;
