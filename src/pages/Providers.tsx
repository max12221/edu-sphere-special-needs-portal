
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, MoreHorizontal, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample provider data
const sampleProviders = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    organization: 'ABC Therapy Services',
    role: 'Speech Therapist',
    services: ['Speech Therapy'],
    status: 'Active',
    licenseExpiry: '2024-05-15'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    organization: 'Sunshine Pediatric Therapy',
    role: 'Occupational Therapist',
    services: ['Occupational Therapy'],
    status: 'Active',
    licenseExpiry: '2024-08-22'
  },
  {
    id: 3,
    name: 'Dr. Emily Chen',
    organization: 'Child Development Center',
    role: 'Psychologist',
    services: ['Psychological Evaluation', 'Counseling'],
    status: 'Active',
    licenseExpiry: '2023-12-10'
  },
  {
    id: 4,
    name: 'Robert Williams',
    organization: 'City Rehabilitation Services',
    role: 'Physical Therapist',
    services: ['Physical Therapy'],
    status: 'Pending Approval',
    licenseExpiry: '2024-03-18'
  },
  {
    id: 5,
    name: 'Jennifer Martinez',
    organization: 'Early Intervention Specialists',
    role: 'Speech Therapist',
    services: ['Speech Therapy', 'Language Assessment'],
    status: 'Active',
    licenseExpiry: '2024-02-28'
  },
];

const Providers: React.FC = () => {
  return (
    <Layout isLoggedIn={true}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Provider Management</h1>
            <p className="text-gray-500">Manage service providers and evaluators</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button asChild>
              <Link to="/providers/add">
                <Plus className="mr-2 h-4 w-4" /> Add New Provider
              </Link>
            </Button>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader className="pb-3">
            <CardTitle>Service Providers</CardTitle>
            <CardDescription>View and manage all registered service providers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex flex-col sm:flex-row justify-between gap-4">
              <div className="relative w-full sm:max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search providers..."
                  className="pl-8 w-full"
                />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Export List
                </Button>
              </div>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Provider Name</TableHead>
                    <TableHead>Organization</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Services</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>License Expiry</TableHead>
                    <TableHead className="w-[80px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sampleProviders.map((provider) => {
                    const isExpiringSoon = new Date(provider.licenseExpiry) < new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
                    const isExpired = new Date(provider.licenseExpiry) < new Date();
                    
                    return (
                      <TableRow key={provider.id}>
                        <TableCell className="font-medium">
                          <Link to={`/providers/${provider.id}`} className="hover:text-primary transition-colors">
                            {provider.name}
                          </Link>
                        </TableCell>
                        <TableCell>{provider.organization}</TableCell>
                        <TableCell>{provider.role}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {provider.services.map((service, idx) => (
                              <Badge key={idx} variant="outline" className="bg-muted">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            provider.status === 'Active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            {provider.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className={`${
                            isExpired 
                              ? 'text-red-600 font-medium' 
                              : isExpiringSoon
                              ? 'text-amber-600'
                              : ''
                          }`}>
                            {provider.licenseExpiry}
                            {isExpired && ' (Expired)'}
                            {!isExpired && isExpiringSoon && ' (Expiring Soon)'}
                          </span>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Open menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <Link to={`/providers/${provider.id}`} className="w-full">View Profile</Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Link to={`/providers/${provider.id}/edit`} className="w-full">Edit Provider</Link>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>View Credentials</DropdownMenuItem>
                              <DropdownMenuItem>View Sessions</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Deactivate Provider</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>

            <div className="flex items-center justify-end space-x-2 py-4">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="px-3 bg-muted-foreground/5"
              >
                1
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Providers;
