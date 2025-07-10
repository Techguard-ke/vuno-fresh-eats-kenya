
import { Truck, Clock, Shield, Award, Users, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HomePageGraphics = () => {
  const features = [
    {
      icon: Truck,
      title: '24/7 Delivery',
      description: 'Round-the-clock delivery service within Nairobi County',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'Products delivered within 24-48 hours of harvest',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Every product passes our quality control at Vuno Warehouse',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Award,
      title: 'Premium Grade',
      description: 'Export quality produce for local customers',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Users,
      title: '10,000+ Customers',
      description: 'Trusted by families across Nairobi',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Leaf,
      title: 'Sustainable',
      description: 'Supporting local farmers and eco-friendly practices',
      color: 'bg-green-100 text-green-600'
    }
  ];

  const stats = [
    { number: '500+', label: 'Products Available' },
    { number: '200+', label: 'Partner Farmers' },
    { number: '24/7', label: 'Service Hours' },
    { number: '99%', label: 'Customer Satisfaction' }
  ];

  return (
    <div className="space-y-16">
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Vuno AI by the Numbers</h2>
          <p className="text-lg text-green-100">Serving Nairobi with excellence since 2023</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-green-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Warehouse Info */}
      <Card className="bg-gradient-to-r from-blue-50 to-green-50">
        <CardContent className="p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">From Farm to Vuno Warehouse to You</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our state-of-the-art Vuno warehouse in Nairobi ensures freshness and quality control 
              before products reach your doorstep within Nairobi County and nearby urban centers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold mb-2">Farm Collection</h3>
                <p className="text-sm text-gray-600">Products collected directly from farmers</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold mb-2">Vuno Processing</h3>
                <p className="text-sm text-gray-600">Quality control and packaging at our warehouse</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold mb-2">24/7 Delivery</h3>
                <p className="text-sm text-gray-600">Fast delivery within Nairobi and nearby areas</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePageGraphics;
