
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Truck, Brain, Shield, Star, ArrowRight } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Fresh Farm Products",
      description: "Direct from local farms to your table. Vegetables, fruits, dairy, and organic products."
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "AI Nutrition Plans",
      description: "Personalized diet recommendations based on your health conditions and preferences."
    },
    {
      icon: <Truck className="h-8 w-8 text-orange-600" />,
      title: "Fast Delivery",
      description: "Same-day delivery across Nairobi and surrounding areas. Fresh products guaranteed."
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Quality Assured",
      description: "All products are carefully selected and quality-checked before delivery."
    }
  ];

  const testimonials = [
    {
      name: "Israel Obongo",
      content: "Vuno AI has revolutionized how I eat. The AI nutrition plans helped me manage my diabetes effectively.",
      rating: 5
    },
    {
      name: "Samuel Eyinda",
      content: "Fresh vegetables delivered right to my door. The quality is exceptional and delivery is always on time.",
      rating: 5
    },
    {
      name: "Jackline Wangari",
      content: "The personalized meal plans are amazing. I've lost weight and feel healthier than ever before.",
      rating: 5
    },
    {
      name: "Chelsea Abida",
      content: "Best organic products in Nairobi! The AI recommendations match my dietary restrictions perfectly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Fresh Farm Products & 
                <span className="text-green-600"> AI Nutrition</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get fresh, locally-sourced products delivered to your door with personalized 
                AI-driven nutrition plans tailored to your health needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/nutrition">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Get Nutrition Plan
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Fresh vegetables and fruits"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live from Nairobi farms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Vuno AI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining the freshest farm products with cutting-edge AI technology 
              to deliver personalized nutrition solutions for healthy living.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fresh Products Categories
            </h2>
            <p className="text-xl text-gray-600">
              Explore our wide range of fresh, locally-sourced products
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Vegetables", image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { name: "Fruits", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { name: "Dairy", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { name: "Grains", image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { name: "Organic", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
            ].map((category, index) => (
              <Link key={index} to="/products" className="group">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-center">{category.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/products">
              <Button size="lg" variant="outline">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real customers across Nairobi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Healthy Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers in Nairobi who trust Vuno AI 
            for their fresh produce and nutrition needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Sign Up Today
              </Button>
            </Link>
            <Link to="/nutrition">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-green-600">
                Get AI Nutrition Plan
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
