
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Leaf, User, Mail, Lock, Phone, MapPin } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    location: ''
  });
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { signup, isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const healthConditions = ['Diabetes', 'Hypertension', 'High Cholesterol', 'Heart Disease', 'Food Allergies'];
  const dietaryRestrictions = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Low-Carb'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleConditionChange = (condition: string, checked: boolean) => {
    if (checked) {
      setSelectedConditions([...selectedConditions, condition]);
    } else {
      setSelectedConditions(selectedConditions.filter(c => c !== condition));
    }
  };

  const handleDietaryChange = (dietary: string, checked: boolean) => {
    if (checked) {
      setSelectedDietary([...selectedDietary, dietary]);
    } else {
      setSelectedDietary(selectedDietary.filter(d => d !== dietary));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const success = await signup({
        ...formData,
        healthConditions: selectedConditions,
        dietaryRestrictions: selectedDietary
      });
      
      if (success) {
        toast({
          title: "Account created!",
          description: "Welcome to Vuno AI. Your account has been created successfully.",
        });
      }
    } catch (error) {
      toast({
        title: "Signup failed",
        description: "There was an error creating your account. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center">
            <Leaf className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Join Vuno AI
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Create your account to access fresh farm products and personalized nutrition plans
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Create your account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="pl-10"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="pl-10"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="pl-10"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      required
                      className="pl-10"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="pl-10"
                      placeholder="+254 700 000 000"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="location"
                      name="location"
                      type="text"
                      className="pl-10"
                      placeholder="Your area in Nairobi"
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              {/* Health Information */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Health Information (Optional)</h3>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Health Conditions
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {healthConditions.map((condition) => (
                      <div key={condition} className="flex items-center space-x-2">
                        <Checkbox
                          id={`condition-${condition}`}
                          checked={selectedConditions.includes(condition)}
                          onCheckedChange={(checked) => 
                            handleConditionChange(condition, checked as boolean)
                          }
                        />
                        <label htmlFor={`condition-${condition}`} className="text-sm">
                          {condition}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dietary Preferences
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {dietaryRestrictions.map((dietary) => (
                      <div key={dietary} className="flex items-center space-x-2">
                        <Checkbox
                          id={`dietary-${dietary}`}
                          checked={selectedDietary.includes(dietary)}
                          onCheckedChange={(checked) => 
                            handleDietaryChange(dietary, checked as boolean)
                          }
                        />
                        <label htmlFor={`dietary-${dietary}`} className="text-sm">
                          {dietary}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <Checkbox id="terms" required />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  I agree to the{' '}
                  <a href="#" className="text-green-600 hover:text-green-500">
                    Terms of Service
                  </a>
                  {' '}and{' '}
                  <a href="#" className="text-green-600 hover:text-green-500">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                {isLoading ? 'Creating account...' : 'Create Account'}
              </Button>

              <div className="text-center">
                <span className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link to="/login" className="font-medium text-green-600 hover:text-green-500">
                    Sign in
                  </Link>
                </span>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
