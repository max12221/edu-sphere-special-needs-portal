
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Bell, Mail, Shield, LogOut, Save, Globe, Moon, Sun } from 'lucide-react';

const Settings: React.FC = () => {
  const { toast } = useToast();
  
  const handleSave = (section: string) => {
    toast({
      title: `${section} Settings Saved`,
      description: "Your settings have been updated successfully.",
    });
  };
  
  return (
    <Layout isLoggedIn={true} userRole="provider">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Settings</h1>
          
          <Tabs defaultValue="account">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-6">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
            </TabsList>
            
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences and connected services</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">Language & Region</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="language" className="text-sm font-medium">
                          Language
                        </label>
                        <Select defaultValue="en">
                          <SelectTrigger id="language">
                            <SelectValue placeholder="Select Language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="es">Spanish</SelectItem>
                            <SelectItem value="fr">French</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="timezone" className="text-sm font-medium">
                          Time Zone
                        </label>
                        <Select defaultValue="et">
                          <SelectTrigger id="timezone">
                            <SelectValue placeholder="Select Time Zone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="et">Eastern Time (ET)</SelectItem>
                            <SelectItem value="ct">Central Time (CT)</SelectItem>
                            <SelectItem value="mt">Mountain Time (MT)</SelectItem>
                            <SelectItem value="pt">Pacific Time (PT)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-2">
                    <h3 className="text-lg font-medium">Date & Time Format</h3>
                    <div className="space-y-2">
                      <label htmlFor="dateFormat" className="text-sm font-medium">
                        Date Format
                      </label>
                      <Select defaultValue="mdy">
                        <SelectTrigger id="dateFormat">
                          <SelectValue placeholder="Select Date Format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                          <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                          <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="timeFormat" className="text-sm font-medium">
                        Time Format
                      </label>
                      <Select defaultValue="12h">
                        <SelectTrigger id="timeFormat">
                          <SelectValue placeholder="Select Time Format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                          <SelectItem value="24h">24-hour</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <h3 className="text-lg font-medium">Sessions</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Auto-save session notes</h4>
                        <p className="text-sm text-muted-foreground">
                          Automatically save session notes every 30 seconds
                        </p>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Keep me logged in</h4>
                        <p className="text-sm text-muted-foreground">
                          Stay logged in for 30 days
                        </p>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <h3 className="text-lg font-medium">Account Actions</h3>
                    <Button variant="destructive" className="flex items-center gap-2">
                      <LogOut className="h-4 w-4" />
                      Log Out of All Devices
                    </Button>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleSave("Account")}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Control how and when you receive notifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Email Notifications</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">New student assignments</h4>
                        <p className="text-sm text-muted-foreground">
                          When you are assigned a new student
                        </p>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Session reminders</h4>
                        <p className="text-sm text-muted-foreground">
                          24 hours before scheduled sessions
                        </p>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Document approvals</h4>
                        <p className="text-sm text-muted-foreground">
                          When documents require your approval
                        </p>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Billing updates</h4>
                        <p className="text-sm text-muted-foreground">
                          Changes to billing status or payments
                        </p>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    <h3 className="text-lg font-medium">In-App Notifications</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">New messages</h4>
                        <p className="text-sm text-muted-foreground">
                          When you receive new messages
                        </p>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Session changes</h4>
                        <p className="text-sm text-muted-foreground">
                          When sessions are rescheduled or canceled
                        </p>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">IEP updates</h4>
                        <p className="text-sm text-muted-foreground">
                          When IEPs are modified for your students
                        </p>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    <h3 className="text-lg font-medium">Notification Digest</h3>
                    <div className="space-y-2">
                      <label htmlFor="digest" className="text-sm font-medium">
                        Email Digest Frequency
                      </label>
                      <Select defaultValue="daily">
                        <SelectTrigger id="digest">
                          <SelectValue placeholder="Select Frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="realtime">Real-time</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="never">Never</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleSave("Notification")}>
                    <Bell className="mr-2 h-4 w-4" />
                    Save Notification Preferences
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="appearance">
              <Card>
                <CardHeader>
                  <CardTitle>Appearance Settings</CardTitle>
                  <CardDescription>Customize how EduSphere looks and feels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Theme</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border rounded-md p-4 flex flex-col items-center space-y-2 cursor-pointer bg-background hover:border-primary">
                        <Sun className="h-6 w-6" />
                        <span className="text-sm font-medium">Light</span>
                      </div>
                      <div className="border rounded-md p-4 flex flex-col items-center space-y-2 cursor-pointer bg-muted hover:border-primary">
                        <Moon className="h-6 w-6" />
                        <span className="text-sm font-medium">Dark</span>
                      </div>
                      <div className="border rounded-md p-4 flex flex-col items-center space-y-2 cursor-pointer bg-background hover:border-primary border-primary">
                        <div className="flex">
                          <Sun className="h-6 w-6" />
                          <Moon className="h-6 w-6" />
                        </div>
                        <span className="text-sm font-medium">System</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    <h3 className="text-lg font-medium">Dashboard Layout</h3>
                    <div className="space-y-2">
                      <label htmlFor="layout" className="text-sm font-medium">
                        Default Dashboard View
                      </label>
                      <Select defaultValue="tiles">
                        <SelectTrigger id="layout">
                          <SelectValue placeholder="Select Layout" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tiles">Tile View</SelectItem>
                          <SelectItem value="list">List View</SelectItem>
                          <SelectItem value="compact">Compact View</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    <h3 className="text-lg font-medium">Text Size</h3>
                    <div className="space-y-2">
                      <label htmlFor="textSize" className="text-sm font-medium">
                        Interface Text Size
                      </label>
                      <Select defaultValue="medium">
                        <SelectTrigger id="textSize">
                          <SelectValue placeholder="Select Text Size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-4">
                    <h3 className="text-lg font-medium">Other Preferences</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Show welcome message</h4>
                        <p className="text-sm text-muted-foreground">
                          Display welcome message on login
                        </p>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Animations</h4>
                        <p className="text-sm text-muted-foreground">
                          Enable UI animations and transitions
                        </p>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleSave("Appearance")}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Appearance Settings
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="privacy">
              <Card>
                <CardHeader>
                  <CardTitle>Privacy & Security</CardTitle>
                  <CardDescription>Manage your privacy and security preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Security</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Two-factor authentication</h4>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Login notifications</h4>
                        <p className="text-sm text-muted-foreground">
                          Get notified when someone logs into your account
                        </p>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    <h3 className="text-lg font-medium">Privacy</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Profile visibility</h4>
                        <p className="text-sm text-muted-foreground">
                          Who can view your profile information
                        </p>
                      </div>
                      <Select defaultValue="team">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select Visibility" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="public">All Users</SelectItem>
                          <SelectItem value="team">My Team Only</SelectItem>
                          <SelectItem value="admin">Administrators Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Data sharing</h4>
                        <p className="text-sm text-muted-foreground">
                          Allow anonymous usage data collection
                        </p>
                      </div>
                      <Switch defaultChecked={true} />
                    </div>
                  </div>
                  
                  <div className="space-y-4 pt-4">
                    <h3 className="text-lg font-medium">Data Management</h3>
                    <div className="space-y-2">
                      <Button variant="outline" className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Request Data Export
                      </Button>
                      <p className="text-xs text-muted-foreground">
                        You'll receive an email with your data within 48 hours
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Button variant="destructive" className="flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Delete Account
                      </Button>
                      <p className="text-xs text-muted-foreground">
                        This action is permanent and cannot be undone
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleSave("Privacy")}>
                    <Shield className="mr-2 h-4 w-4" />
                    Save Privacy Settings
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
