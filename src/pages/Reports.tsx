
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from '@/components/ui/label';
import { Download, FileText, BarChart, PieChart, Calendar } from 'lucide-react';

// Mock data for charts
const studentsByDisability = [
  { disability: 'Speech/Language', count: 42 },
  { disability: 'Developmental Delay', count: 38 },
  { disability: 'Autism', count: 25 },
  { disability: 'Multiple Disabilities', count: 15 },
  { disability: 'Other Health Impairment', count: 22 },
  { disability: 'Not Determined', count: 12 },
];

const serviceDelivery = [
  { month: 'January', delivered: 435, mandated: 460 },
  { month: 'February', delivered: 442, mandated: 460 },
  { month: 'March', delivered: 455, mandated: 460 },
  { month: 'April', delivered: 450, mandated: 462 },
  { month: 'May', delivered: 458, mandated: 462 },
  { month: 'June', delivered: 441, mandated: 462 },
  { month: 'July', delivered: 410, mandated: 450 },
  { month: 'August', delivered: 415, mandated: 450 },
  { month: 'September', delivered: 440, mandated: 458 },
  { month: 'October', delivered: 455, mandated: 458 },
  { month: 'November', delivered: 450, mandated: 458 },
  { month: 'December', delivered: 425, mandated: 458 },
];

const Reports: React.FC = () => {
  const [reportPeriod, setReportPeriod] = useState('current-month');
  const [reportType, setReportType] = useState('all');

  return (
    <Layout isLoggedIn={true}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
            <p className="text-gray-500">Generate and view reports on services and compliance</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Quick Stats Cards */}
          <Card className="bg-gradient-to-br from-edusphere-50 to-white hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Active Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-4xl font-bold">154</div>
                <div className="text-sm text-muted-foreground">
                  <span className="text-green-600 font-medium">+12</span> from last month
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-edusphere-50 to-white hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Service Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-4xl font-bold">96.7%</div>
                <div className="text-sm text-muted-foreground">
                  <span className="text-green-600 font-medium">+2.3%</span> from last month
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-edusphere-50 to-white hover:shadow-md transition-all duration-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Pending Evaluations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-4xl font-bold">18</div>
                <div className="text-sm text-muted-foreground">
                  <span className="text-red-600 font-medium">+5</span> from last month
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="service-delivery">Service Delivery</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="custom">Custom Reports</TabsTrigger>
          </TabsList>
          
          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Students by Disability */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Students by Disability</CardTitle>
                    <PieChart className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <CardDescription>Distribution of primary disabilities</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="bg-muted/30 rounded-md h-full w-full flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-muted-foreground">Pie chart visualization would be displayed here</p>
                      <p className="text-sm text-muted-foreground mt-2">Data shows highest proportion for Speech/Language (27%)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Delivery Trend */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Service Delivery vs. Mandated</CardTitle>
                    <BarChart className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <CardDescription>12-month service delivery performance</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <div className="bg-muted/30 rounded-md h-full w-full flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-muted-foreground">Bar chart visualization would be displayed here</p>
                      <p className="text-sm text-muted-foreground mt-2">Shows comparison between mandated and delivered services</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Reports */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Recently Generated Reports</CardTitle>
                    <FileText className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <CardDescription>Access your recent report exports</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="py-3 px-4 text-left font-medium">Report Name</th>
                          <th className="py-3 px-4 text-left font-medium">Generated On</th>
                          <th className="py-3 px-4 text-left font-medium">Type</th>
                          <th className="py-3 px-4 text-left font-medium">Generated By</th>
                          <th className="py-3 px-4 text-left font-medium w-[100px]">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4">Monthly Service Compliance</td>
                          <td className="py-3 px-4">2023-11-01</td>
                          <td className="py-3 px-4">Compliance</td>
                          <td className="py-3 px-4">John Smith</td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Student Enrollment Summary</td>
                          <td className="py-3 px-4">2023-10-15</td>
                          <td className="py-3 px-4">Enrollment</td>
                          <td className="py-3 px-4">John Smith</td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Provider Credential Status</td>
                          <td className="py-3 px-4">2023-10-10</td>
                          <td className="py-3 px-4">Providers</td>
                          <td className="py-3 px-4">Jane Doe</td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">Quarterly IEP Compliance</td>
                          <td className="py-3 px-4">2023-10-01</td>
                          <td className="py-3 px-4">Compliance</td>
                          <td className="py-3 px-4">Jane Doe</td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Service Delivery Tab */}
          <TabsContent value="service-delivery" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Service Delivery Reports</CardTitle>
                <CardDescription>Generate reports on service delivery and compliance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label>Report Period</Label>
                    <Select value={reportPeriod} onValueChange={setReportPeriod}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="current-month">Current Month</SelectItem>
                        <SelectItem value="previous-month">Previous Month</SelectItem>
                        <SelectItem value="current-quarter">Current Quarter</SelectItem>
                        <SelectItem value="year-to-date">Year to Date</SelectItem>
                        <SelectItem value="custom">Custom Range</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Report Type</Label>
                    <Select value={reportType} onValueChange={setReportType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Services</SelectItem>
                        <SelectItem value="speech">Speech Therapy</SelectItem>
                        <SelectItem value="ot">Occupational Therapy</SelectItem>
                        <SelectItem value="pt">Physical Therapy</SelectItem>
                        <SelectItem value="counseling">Counseling</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-end">
                    <Button className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Generate Report
                    </Button>
                  </div>
                </div>

                <div className="rounded-md border p-6 bg-muted/30 text-center min-h-[300px] flex flex-col items-center justify-center">
                  <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-lg font-medium mb-2">Select report criteria above</p>
                  <p className="text-muted-foreground">
                    Reports will be generated based on your selections
                  </p>
                  <Button variant="outline" className="mt-4">View Sample Report</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Compliance Tab */}
          <TabsContent value="compliance" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Reports</CardTitle>
                <CardDescription>Track IEP compliance and service delivery requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Compliance reporting content will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Custom Reports Tab */}
          <TabsContent value="custom" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Custom Report Builder</CardTitle>
                <CardDescription>Create customized reports based on your needs</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Custom report builder will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Reports;
