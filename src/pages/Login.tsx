
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, LogIn } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login attempted with:', { email, password, role });
      setIsLoading(false);
      
      // In a real app, you would redirect after successful login
      // For demonstration, we'll just log the data
    }, 1500);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10 md:py-16 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-primary/10 p-3">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <Card className="animate-slide-in">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Log in to EduSphere</CardTitle>
              <CardDescription className="text-center">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select value={role} onValueChange={setRole}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Administrator</SelectItem>
                      <SelectItem value="provider">Service Provider</SelectItem>
                      <SelectItem value="evaluator">Evaluator</SelectItem>
                      <SelectItem value="coordinator">Service Coordinator</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="remember"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="remember" className="text-muted-foreground">Remember me</label>
                  </div>
                  
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-col space-y-4">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full border-2 border-t-transparent border-white animate-spin mr-2" />
                      <span>Logging in...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <LogIn className="w-4 h-4 mr-2" />
                      <span>Log in</span>
                    </div>
                  )}
                </Button>
                
                <div className="text-center text-sm">
                  <span className="text-muted-foreground">Don't have an account? </span>
                  <Link to="/signup" className="text-primary hover:underline">
                    Sign up
                  </Link>
                </div>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
