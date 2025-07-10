
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Mail, Phone, MapPin, Heart, ShoppingBag, Edit } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const { items } = useCart();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: ''
  });
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);

  const healthConditions = ['Diabetes', 'Hypertension', 'High Cholesterol', 'Heart Disease', 'Food Allergies', 'Digestive Issues', 'Anemia'];
  const dietaryRestrictions = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free', 'Low-Carb', 'High-Protein', 'Low-Sodium'];

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        location: user.location || ''
      });
      setSelectedConditions(user.healthConditions || []);
      setSelectedDietary(user.dietaryRestrictions || []);
    }
  }, [user]);

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

  const handleSave = () => {
    updateProfile({
      ...formData,
      healthConditions: selectedConditions,
      dietaryRestrictions: selectedDietary
    });
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been successfully updated.",
    });
  };

  const mockOrders = [
    {
      id: '1',
      date: '2024-01-15',
      total: 1250,
      status: 'Delivered',
      items: 3
    },
    {
      id: '2',
      date: '2024-01-10',
      total: 850,
      status: 'Delivered',
      items: 2
    },
    {
      id: '3',
      date: '2024-01-05',
      total: 1500,
      status: 'Processing',
      items: 5
    }
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your account settings and preferences</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="health">Health Info</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Personal Information</CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit className="h-4 w-4 mr-2" />
                  {isEditing ? 'Cancel' : 'Edit'}
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        name="name"
                        className="pl-10"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        name="email"
                        type="email"
                        className="pl-10"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        name="phone"
                        type="tel"
                        className="pl-10"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        name="location"
                        className="pl-10"
                        value={formData.location}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                </div>

                {isEditing && (
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                      Save Changes
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="health">
            <Card>
              <CardHeader>
                <CardTitle>Health Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Health Conditions</h3>
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
                  <h3 className="font-medium mb-3">Dietary Preferences</h3>
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

                <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                  Update Health Information
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Order #{order.id}</p>
                          <p className="text-sm text-gray-600">
                            {new Date(order.date).toLocaleDateString()} • {order.items} items
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">KES {order.total.toLocaleString()}</p>
                          <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'}>
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences">
            <Card>
              <CardHeader>
                <CardTitle>Account Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Email Notifications</h4>
                      <p className="text-sm text-gray-600">Receive updates about orders and promotions</p>
                    </div>
                    <Checkbox defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">SMS Notifications</h4>
                      <p className="text-sm text-gray-600">Get delivery updates via SMS</p>
                    </div>
                    <Checkbox defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Marketing Communications</h4>
                      <p className="text-sm text-gray-600">Receive newsletters and special offers</p>
                    </div>
                    <Checkbox />
                  </div>
                </div>

                <Button className="bg-green-600 hover:bg-green-700">
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
