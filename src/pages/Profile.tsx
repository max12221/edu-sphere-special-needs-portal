
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Shield, Calendar, Save, Key } from 'lucide-react';

const Profile: React.FC = () => {
  const { toast } = useToast();
  
  const handleUpdateProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved.",
    });
  };
  
  const handleUpdatePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Password Updated",
      description: "Your password has been changed successfully.",
    });
  };

  return (
    <Layout isLoggedIn={true} userRole="provider">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">My Profile</h1>
          
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-shrink-0">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <h2 className="text-xl font-semibold">Jane Doe</h2>
                    <p className="text-muted-foreground mb-2">Speech Therapist</p>
                    <Badge variant="outline" className="mb-4">Provider</Badge>
                    
                    <div className="space-y-2 w-full">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span>jane.doe@example.com</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>(212) 555-0157</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>New York, NY</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 w-full">
                      <Button variant="outline" className="w-full">
                        Change Photo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-4">
                <CardHeader className="pb-3">
                  <CardTitle>Account Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="space-y-0.5">
                        <div className="text-sm font-medium">Account Type</div>
                        <div className="text-sm text-muted-foreground">Provider</div>
                      </div>
                      <Shield className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="space-y-0.5">
                        <div className="text-sm font-medium">Member Since</div>
                        <div className="text-sm text-muted-foreground">March 2023</div>
                      </div>
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="space-y-0.5">
                        <div className="text-sm font-medium">Last Login</div>
                        <div className="text-sm text-muted-foreground">Today at 9:42 AM</div>
                      </div>
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex-grow">
              <Tabs defaultValue="personal">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="personal">Personal Information</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                </TabsList>
                
                <TabsContent value="personal">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>
                        Update your personal details and contact information.
                      </CardDescription>
                    </CardHeader>
                    <form onSubmit={handleUpdateProfile}>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="firstName" className="text-sm font-medium">
                              First Name
                            </label>
                            <Input id="firstName" defaultValue="Jane" />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="lastName" className="text-sm font-medium">
                              Last Name
                            </label>
                            <Input id="lastName" defaultValue="Doe" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                              Email Address
                            </label>
                            <Input id="email" type="email" defaultValue="jane.doe@example.com" />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium">
                              Phone Number
                            </label>
                            <Input id="phone" defaultValue="(212) 555-0157" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="jobTitle" className="text-sm font-medium">
                              Job Title
                            </label>
                            <Input id="jobTitle" defaultValue="Speech Therapist" />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="department" className="text-sm font-medium">
                              Department
                            </label>
                            <Input id="department" defaultValue="Speech and Language" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="address" className="text-sm font-medium">
                            Address
                          </label>
                          <Input id="address" defaultValue="123 Main St" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="city" className="text-sm font-medium">
                              City
                            </label>
                            <Input id="city" defaultValue="New York" />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="state" className="text-sm font-medium">
                              State
                            </label>
                            <Input id="state" defaultValue="NY" />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="zipCode" className="text-sm font-medium">
                              ZIP Code
                            </label>
                            <Input id="zipCode" defaultValue="10001" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="bio" className="text-sm font-medium">
                            Professional Bio
                          </label>
                          <Textarea 
                            id="bio" 
                            rows={4}
                            defaultValue="Certified speech therapist with 8+ years of experience working with preschool-age children with developmental delays. Specialized in childhood apraxia of speech and phonological disorders."
                          />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button type="submit">
                          <Save className="mr-2 h-4 w-4" />
                          Save Changes
                        </Button>
                      </CardFooter>
                    </form>
                  </Card>
                </TabsContent>
                
                <TabsContent value="security">
                  <Card>
                    <CardHeader>
                      <CardTitle>Security Settings</CardTitle>
                      <CardDescription>
                        Update your password and security preferences.
                      </CardDescription>
                    </CardHeader>
                    <form onSubmit={handleUpdatePassword}>
                      <CardContent className="space-y-6">
                        <div className="space-y-2">
                          <label htmlFor="currentPassword" className="text-sm font-medium">
                            Current Password
                          </label>
                          <Input id="currentPassword" type="password" />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="newPassword" className="text-sm font-medium">
                            New Password
                          </label>
                          <Input id="newPassword" type="password" />
                          <p className="text-xs text-muted-foreground">
                            Password must be at least 8 characters and include uppercase, lowercase, number, and special character.
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="confirmPassword" className="text-sm font-medium">
                            Confirm New Password
                          </label>
                          <Input id="confirmPassword" type="password" />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button type="submit">
                          <Key className="mr-2 h-4 w-4" />
                          Change Password
                        </Button>
                      </CardFooter>
                    </form>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
