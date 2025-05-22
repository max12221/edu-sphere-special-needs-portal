
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Save } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StudentFormProps {
  onSubmit?: (data: any) => void;
  initialData?: any;
}

const StudentForm: React.FC<StudentFormProps> = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    firstName: initialData.firstName || '',
    lastName: initialData.lastName || '',
    dateOfBirth: initialData.dateOfBirth || null,
    gender: initialData.gender || '',
    parentName: initialData.parentName || '',
    parentEmail: initialData.parentEmail || '',
    parentPhone: initialData.parentPhone || '',
    address: initialData.address || '',
    city: initialData.city || '',
    state: initialData.state || 'NY',
    zipCode: initialData.zipCode || '',
    eligibilityStatus: initialData.eligibilityStatus || '',
    iepDate: initialData.iepDate || null,
    primaryDisability: initialData.primaryDisability || '',
    notes: initialData.notes || '',
    services: initialData.services || [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (name: string, value: Date | null) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="personal">Personal Information</TabsTrigger>
          <TabsTrigger value="education">Education & IEP</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>

        {/* Personal Information Tab */}
        <TabsContent value="personal" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Enter the student's basic information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="e.g. John"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="e.g. Smith"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !formData.dateOfBirth && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.dateOfBirth ? (
                          format(formData.dateOfBirth, "PPP")
                        ) : (
                          <span>Select date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.dateOfBirth}
                        onSelect={(date) => handleDateChange('dateOfBirth', date)}
                        disabled={(date) => date > new Date()}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select 
                    value={formData.gender} 
                    onValueChange={(value) => handleSelectChange('gender', value)}
                  >
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="notSpecified">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="parentName">Parent/Guardian Name</Label>
                <Input
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  placeholder="e.g. Jane Smith"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="parentEmail">Parent/Guardian Email</Label>
                  <Input
                    id="parentEmail"
                    name="parentEmail"
                    type="email"
                    value={formData.parentEmail}
                    onChange={handleInputChange}
                    placeholder="e.g. jane@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="parentPhone">Parent/Guardian Phone</Label>
                  <Input
                    id="parentPhone"
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleInputChange}
                    placeholder="e.g. (555) 123-4567"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Street Address"
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g. New York"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="e.g. NY"
                    disabled
                  />
                </div>

                <div className="space-y-2 col-span-2">
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    placeholder="e.g. 10001"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Education & IEP Tab */}
        <TabsContent value="education" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle>Education & IEP Information</CardTitle>
              <CardDescription>Enter details about the student's educational needs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="eligibilityStatus">Eligibility Status</Label>
                  <Select 
                    value={formData.eligibilityStatus} 
                    onValueChange={(value) => handleSelectChange('eligibilityStatus', value)}
                  >
                    <SelectTrigger id="eligibilityStatus">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eligible">Eligible</SelectItem>
                      <SelectItem value="inProcess">In Process</SelectItem>
                      <SelectItem value="pendingEvaluation">Pending Evaluation</SelectItem>
                      <SelectItem value="notEligible">Not Eligible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="iepDate">IEP Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !formData.iepDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.iepDate ? (
                          format(formData.iepDate, "PPP")
                        ) : (
                          <span>Select date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.iepDate}
                        onSelect={(date) => handleDateChange('iepDate', date)}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="primaryDisability">Primary Disability</Label>
                <Select 
                  value={formData.primaryDisability} 
                  onValueChange={(value) => handleSelectChange('primaryDisability', value)}
                >
                  <SelectTrigger id="primaryDisability">
                    <SelectValue placeholder="Select disability category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="autism">Autism</SelectItem>
                    <SelectItem value="deafness">Deafness</SelectItem>
                    <SelectItem value="developmental-delay">Developmental Delay</SelectItem>
                    <SelectItem value="emotional-disturbance">Emotional Disturbance</SelectItem>
                    <SelectItem value="hearing-impairment">Hearing Impairment</SelectItem>
                    <SelectItem value="intellectual-disability">Intellectual Disability</SelectItem>
                    <SelectItem value="multiple-disabilities">Multiple Disabilities</SelectItem>
                    <SelectItem value="orthopedic-impairment">Orthopedic Impairment</SelectItem>
                    <SelectItem value="other-health-impairment">Other Health Impairment</SelectItem>
                    <SelectItem value="specific-learning-disability">Specific Learning Disability</SelectItem>
                    <SelectItem value="speech-language-impairment">Speech/Language Impairment</SelectItem>
                    <SelectItem value="traumatic-brain-injury">Traumatic Brain Injury</SelectItem>
                    <SelectItem value="visual-impairment">Visual Impairment</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Document Upload</Label>
                <div className="border-2 border-dashed border-border rounded-md p-6 text-center">
                  <p className="text-muted-foreground mb-2">Drag and drop IEP documents here, or click to browse</p>
                  <Button type="button" variant="outline">Browse Files</Button>
                  <p className="text-xs text-muted-foreground mt-2">Supported formats: PDF, DOC, DOCX (Max 10MB)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Services Tab */}
        <TabsContent value="services" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle>Services</CardTitle>
              <CardDescription>Manage services provided to the student</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Assigned Services</Label>
                <div className="border rounded-md p-4 bg-background/50">
                  <p className="text-muted-foreground text-center py-6">
                    No services have been assigned yet. 
                    <br />
                    Use the form below to add services.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="font-medium mb-3">Add New Service</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Type</Label>
                    <Select>
                      <SelectTrigger id="serviceType">
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="speech">Speech Therapy</SelectItem>
                        <SelectItem value="ot">Occupational Therapy</SelectItem>
                        <SelectItem value="pt">Physical Therapy</SelectItem>
                        <SelectItem value="counseling">Counseling</SelectItem>
                        <SelectItem value="asd">Autism Services</SelectItem>
                        <SelectItem value="behavioral">Behavioral Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="frequency">Frequency</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <Input
                        id="frequency"
                        type="number" 
                        placeholder="e.g. 2"
                      />
                      <span className="flex items-center justify-center">times per</span>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="day">Day</SelectItem>
                          <SelectItem value="week">Week</SelectItem>
                          <SelectItem value="month">Month</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration (minutes)</Label>
                    <Input
                      id="duration"
                      type="number" 
                      placeholder="e.g. 30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="provider">Service Provider</Label>
                    <Select>
                      <SelectTrigger id="provider">
                        <SelectValue placeholder="Select provider" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="provider1">ABC Therapy Services</SelectItem>
                        <SelectItem value="provider2">XYZ Pediatric Therapy</SelectItem>
                        <SelectItem value="provider3">City Speech & Language</SelectItem>
                        <SelectItem value="provider4">Sunshine Therapy Center</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Service Location</Label>
                    <Select>
                      <SelectTrigger id="location">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="school">School</SelectItem>
                        <SelectItem value="home">Home</SelectItem>
                        <SelectItem value="clinic">Clinic</SelectItem>
                        <SelectItem value="remote">Remote</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mt-4">
                  <Button type="button" variant="outline">Add Service</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notes Tab */}
        <TabsContent value="notes" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle>Additional Notes</CardTitle>
              <CardDescription>Enter any relevant notes about the student</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Enter any additional information or notes about the student here..."
                  rows={6}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-6 flex justify-end">
        <Button type="button" variant="outline" className="mr-2">Cancel</Button>
        <Button type="submit">
          <Save className="mr-2 h-4 w-4" />
          Save Student
        </Button>
      </div>
    </form>
  );
};

export default StudentForm;
