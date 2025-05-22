
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
import { Plus, Search, MoreHorizontal, FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample student data
const sampleStudents = [
  {
    id: 1,
    firstName: 'Emma',
    lastName: 'Johnson',
    dateOfBirth: '2019-05-15',
    age: '5',
    eligibilityStatus: 'Eligible',
    primaryDisability: 'Speech/Language Impairment',
    lastUpdated: '2023-11-10'
  },
  {
    id: 2,
    firstName: 'Liam',
    lastName: 'Smith',
    dateOfBirth: '2019-08-22',
    age: '5',
    eligibilityStatus: 'Eligible',
    primaryDisability: 'Developmental Delay',
    lastUpdated: '2023-11-08'
  },
  {
    id: 3,
    firstName: 'Olivia',
    lastName: 'Williams',
    dateOfBirth: '2020-02-10',
    age: '4',
    eligibilityStatus: 'Pending Evaluation',
    primaryDisability: 'Not Determined',
    lastUpdated: '2023-11-05'
  },
  {
    id: 4,
    firstName: 'Noah',
    lastName: 'Brown',
    dateOfBirth: '2020-07-03',
    age: '4',
    eligibilityStatus: 'In Process',
    primaryDisability: 'Not Determined',
    lastUpdated: '2023-11-01'
  },
  {
    id: 5,
    firstName: 'Ava',
    lastName: 'Jones',
    dateOfBirth: '2019-11-28',
    age: '5',
    eligibilityStatus: 'Eligible',
    primaryDisability: 'Autism',
    lastUpdated: '2023-10-25'
  },
];

const Students: React.FC = () => {
  return (
    <Layout isLoggedIn={true}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Student Management</h1>
            <p className="text-gray-500">Manage and track all student information</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button asChild>
              <Link to="/students/add">
                <Plus className="mr-2 h-4 w-4" /> Add New Student
              </Link>
            </Button>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader className="pb-3">
            <CardTitle>Students</CardTitle>
            <CardDescription>View and manage all students in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 flex flex-col sm:flex-row justify-between gap-4">
              <div className="relative w-full sm:max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search students..."
                  className="pl-8 w-full"
                />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Export to PDF
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export to CSV
                </Button>
              </div>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Eligibility Status</TableHead>
                    <TableHead>Primary Disability</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead className="w-[80px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sampleStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">
                        <Link to={`/students/${student.id}`} className="hover:text-primary transition-colors">
                          {student.firstName} {student.lastName}
                        </Link>
                      </TableCell>
                      <TableCell>{student.age}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          student.eligibilityStatus === 'Eligible' 
                            ? 'bg-green-100 text-green-800' 
                            : student.eligibilityStatus === 'Pending Evaluation'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {student.eligibilityStatus}
                        </span>
                      </TableCell>
                      <TableCell>{student.primaryDisability}</TableCell>
                      <TableCell>{student.lastUpdated}</TableCell>
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
                              <Link to={`/students/${student.id}`} className="w-full">View Profile</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link to={`/students/${student.id}/edit`} className="w-full">Edit Student</Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>View IEP</DropdownMenuItem>
                            <DropdownMenuItem>Manage Services</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Archive Student</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
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
              <Button
                variant="outline"
                size="sm"
                className="px-3"
              >
                2
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="px-3"
              >
                3
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

export default Students;
