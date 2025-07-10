
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Truck, 
  Brain, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
  CheckCircle,
  Star,
  Calendar,
  Shield,
  Zap
} from 'lucide-react';

const Services = () => {
  const deliveryAreas = [
    { area: "Nairobi CBD", time: "1-2 hours", fee: "Free over KES 2,000" },
    { area: "Westlands", time: "1-2 hours", fee: "Free over KES 2,000" },
    { area: "Karen", time: "2-3 hours", fee: "KES 200" },
    { area: "Kileleshwa", time: "1-2 hours", fee: "Free over KES 2,000" },
    { area: "Kilimani", time: "1-2 hours", fee: "Free over KES 2,000" },
    { area: "Lavington", time: "2-3 hours", fee: "KES 150" },
    { area: "Runda", time: "2-3 hours", fee: "KES 250" },
    { area: "Muthaiga", time: "2-3 hours", fee: "KES 200" },
    { area: "Gigiri", time: "2-3 hours", fee: "KES 250" },
    { area: "Kasarani", time: "3-4 hours", fee: "KES 300" },
    { area: "Thika Road", time: "3-4 hours", fee: "KES 300" },
    { area: "Ngong Road", time: "2-3 hours", fee: "KES 200" }
  ];

  const aiFeatures = [
    {
      title: "Health Condition Analysis",
      description: "Our AI analyzes your health conditions like diabetes, hypertension, or allergies to create safe, beneficial meal plans.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Nutritional Optimization",
      description: "Advanced algorithms calculate optimal macro and micronutrient distribution based on your age, weight, activity level, and goals.",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Local Ingredient Focus",
      description: "Prioritizes locally available Kenyan ingredients and traditional foods while meeting your nutritional requirements.",
      icon: <MapPin className="h-6 w-6" />
    },
    {
      title: "Adaptive Learning",
      description: "The AI learns from your preferences and feedback to continuously improve recommendations and meal variety.",
      icon: <Brain className="h-6 w-6" />
    },
    {
      title: "Seasonal Adjustments",
      description: "Automatically adjusts meal plans based on seasonal produce availability and local harvest calendars.",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      title: "Progress Tracking",
      description: "Monitors your health improvements and adjusts plans to help you achieve your wellness goals faster.",
      icon: <CheckCircle className="h-6 w-6" />
    }
  ];

  const subscriptionPlans = [
    {
      name: "Basic Plan",
      price: 2500,
      features: [
        "Weekly meal plans",
        "Basic nutrition tracking",
        "Email support",
        "Recipe suggestions",
        "Shopping lists"
      ],
      popular: false
    },
    {
      name: "Premium Plan", 
      price: 4500,
      features: [
        "Daily personalized meals",
        "Advanced health tracking",
        "Priority WhatsApp support",
        "Custom shopping lists",
        "Monthly video consultations",
        "Progress monitoring",
        "Family meal coordination"
      ],
      popular: true
    },
    {
      name: "Family Plan",
      price: 8000,
      features: [
        "Plans for up to 4 family members",
        "Age-specific nutrition",
        "Bulk shopping optimization",
        "Dedicated nutritionist",
        "Weekly health reports",
        "Priority delivery slots",
        "Educational workshops"
      ],
      popular: false
    }
  ];

  const supportChannels = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      details: "+254 700 123 456",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-2PM"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp Support",
      details: "+254 700 123 456", 
      hours: "24/7 for Premium customers"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      details: "support@vunoai.com",
      hours: "Response within 24 hours"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive nutrition and fresh produce services designed to support 
            your healthy lifestyle in Nairobi and surrounding areas.
          </p>
        </div>

        {/* Delivery Information */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Truck className="h-6 w-6 mr-2 text-green-600" />
              Delivery Service
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Delivery Areas & Times</h3>
                <div className="space-y-3">
                  {deliveryAreas.map((area, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium">{area.area}</div>
                        <div className="text-sm text-gray-600 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {area.time}
                        </div>
                      </div>
                      <Badge variant={area.fee.includes('Free') ? 'default' : 'outline'}>
                        {area.fee}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Delivery Features</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <div className="font-medium">Same-Day Delivery</div>
                      <div className="text-sm text-gray-600">Order before 10 AM for same-day delivery</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <div className="font-medium">Scheduled Delivery</div>
                      <div className="text-sm text-gray-600">Choose your preferred delivery window</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <div className="font-medium">Temperature Control</div>
                      <div className="text-sm text-gray-600">Insulated vehicles for dairy and perishables</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <div className="font-medium">Real-Time Tracking</div>
                      <div className="text-sm text-gray-600">Track your order from farm to door</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <div>
                      <div className="font-medium">Contactless Delivery</div>
                      <div className="text-sm text-gray-600">Safe delivery options available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Nutrition Planning */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Brain className="h-6 w-6 mr-2 text-blue-600" />
              AI Nutrition Planning Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">How Our AI Creates Your Perfect Meal Plan</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Health Assessment</h4>
                  <p className="text-sm text-gray-600">Complete questionnaire about health conditions, allergies, and goals</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">AI Analysis</h4>
                  <p className="text-sm text-gray-600">Advanced algorithms analyze your data and local food availability</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Personalized Plan</h4>
                  <p className="text-sm text-gray-600">Receive customized meal plans with shopping lists and recipes</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiFeatures.map((feature, index) => (
                <Card key={index} className="border-none shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-blue-100 rounded-lg mr-3">
                        {feature.icon}
                      </div>
                      <h4 className="font-semibold">{feature.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Subscription Plans */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Subscription Plan Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subscriptionPlans.map((plan, index) => (
                <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-green-500 text-white">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-green-600">
                      KES {plan.price.toLocaleString()}
                      <span className="text-lg text-gray-500">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-green-600 hover:bg-green-700' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      Choose Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Customer Support */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Customer Support</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      {channel.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{channel.title}</h3>
                  <p className="text-green-600 font-medium mb-1">{channel.details}</p>
                  <p className="text-sm text-gray-600">{channel.hours}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Frequently Asked Questions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">How fresh are the products?</h4>
                  <p className="text-sm text-gray-600 mb-4">All products are harvested within 24-48 hours of delivery and stored in optimal conditions.</p>
                  
                  <h4 className="font-medium mb-2">Can I modify my meal plan?</h4>
                  <p className="text-sm text-gray-600">Yes, you can adjust your meal plan anytime through our app or by contacting support.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">What if I'm not satisfied?</h4>
                  <p className="text-sm text-gray-600 mb-4">We offer a 100% satisfaction guarantee with free returns or replacements within 24 hours.</p>
                  
                  <h4 className="font-medium mb-2">Do you deliver on weekends?</h4>
                  <p className="text-sm text-gray-600">Yes, we deliver 7 days a week with limited weekend hours in select areas.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;
