
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Brain, Truck, Leaf, Star, Clock, MapPin } from 'lucide-react';
import EnhancedSocialLinks from '@/components/EnhancedSocialLinks';
import HomePageGraphics from '@/components/HomePageGraphics';

const Index = () => {
  const featuredProducts = [
    {
      id: '1',
      name: 'Fresh Tomatoes',
      price: 150,
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      organic: true
    },
    {
      id: '8',
      name: 'Fresh Avocados',
      price: 300,
      image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      organic: true
    },
    {
      id: '2',
      name: 'Green Spinach',
      price: 80,
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      organic: true
    }
  ];

  const testimonials = [
    {
      name: "Israel Obongo",
      location: "Westlands, Nairobi",
      rating: 5,
      comment: "Vuno AI completely transformed my health! As a diabetes patient, their AI-generated meal plans and fresh produce delivery has helped me maintain stable blood sugar levels. The quality is exceptional!",
      condition: "Managing Diabetes",
      duration: "6 months with Vuno AI"
    },
    {
      name: "Samuel Eyinda",
      location: "Karen, Nairobi",
      rating: 5,
      comment: "The convenience and quality are unmatched. Fresh vegetables delivered right to my doorstep within hours. The nutritional information helps me make better choices for my family.",
      condition: "Family Nutrition",
      duration: "1 year customer"
    },
    {
      name: "Jackline Wangari",
      location: "Kileleshwa, Nairobi",
      rating: 5,
      comment: "Excellent service! The AI nutrition planning helped me lose 15kg in 4 months while managing my hypertension. The organic produce from Vuno warehouse is always fresh and affordable.",
      condition: "Weight Loss & Hypertension",
      duration: "8 months transformation"
    },
    {
      name: "Chelsea Abida",
      location: "Kilimani, Nairobi",
      rating: 5,
      comment: "As a busy professional, Vuno AI saves me so much time. Their 24/7 delivery service and personalized meal plans keep me healthy despite my hectic schedule. Highly recommend!",
      condition: "Busy Lifestyle",
      duration: "10 months subscriber"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Fresh Farm Products & AI Nutrition Planning
              </h1>
              <p className="text-xl mb-8 text-green-100">
                From farmers to our Vuno warehouse in Nairobi, delivering quality products 
                24/7 within Nairobi County and nearby urban centers. Get personalized nutrition plans powered by AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Shop Fresh Products
                  </Button>
                </Link>
                <Link to="/nutrition">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                    <Brain className="mr-2 h-5 w-5" />
                    AI Nutrition Plans
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-green-100">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>24/7 Service</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Nairobi & Nearby</span>
                </div>
                <div className="flex items-center">
                  <Truck className="h-5 w-5 mr-2" />
                  <span>Same-day Delivery</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-cover"
                      loading="lazy"
                    />
                    {product.organic && (
                      <Badge className="absolute top-2 left-2 bg-green-600">
                        <Leaf className="h-3 w-3 mr-1" />
                        Organic
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-green-600 font-bold">KES {product.price}/kg</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Graphics and Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HomePageGraphics />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Vuno AI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bridge the gap between local farmers and urban consumers with technology, 
              ensuring fresh produce and personalized nutrition guidance 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Fresh Farm Products</h3>
                <p className="text-gray-600">
                  Direct from farmers to our Vuno warehouse, ensuring maximum freshness and quality. 
                  Available 24/7 for delivery within Nairobi County.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI Nutrition Planning</h3>
                <p className="text-gray-600">
                  Personalized meal plans based on your health conditions, dietary preferences, 
                  and local food availability. Powered by advanced AI technology.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">24/7 Fast Delivery</h3>
                <p className="text-gray-600">
                  Round-the-clock delivery service within Nairobi and nearby urban centers. 
                  Same-day delivery available for orders placed before 2 PM.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Customer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Stories from Our Customers
            </h2>
            <p className="text-xl text-gray-600">
              See how Vuno AI has transformed lives across Nairobi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="ml-3">
                      {testimonial.condition}
                    </Badge>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-green-600 font-medium">{testimonial.duration}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Social Media Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Connect with Vuno AI Community
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of health-conscious Kenyans on social media
            </p>
          </div>
          <EnhancedSocialLinks />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Start your journey with fresh produce and AI-powered nutrition planning today. 
            Available 24/7 within Nairobi County and nearby urban centers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Get Started Today
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Copyright Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Vuno AI. All rights reserved. Serving Nairobi County and nearby urban centers 24/7.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
