
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Truck, Brain, Shield, Star, ArrowRight, Users, Award, Heart } from 'lucide-react';

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

  const detailedTestimonials = [
    {
      name: "Israel Obongo",
      location: "Westlands, Nairobi",
      condition: "Type 2 Diabetes",
      content: "Vuno AI has revolutionized how I eat. The AI nutrition plans helped me manage my diabetes effectively. My HbA1c dropped from 9.2% to 6.8% in just 6 months!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      beforeAfter: "Lost 15kg, better blood sugar control"
    },
    {
      name: "Samuel Eyinda",
      location: "Karen, Nairobi",
      condition: "Busy Professional",
      content: "Fresh vegetables delivered right to my door. The quality is exceptional and delivery is always on time. The meal planning saves me 5 hours per week!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      beforeAfter: "Saves 5 hours weekly, better nutrition"
    },
    {
      name: "Jackline Wangari",
      location: "Kilimani, Nairobi",
      condition: "Weight Management",
      content: "The personalized meal plans are amazing. I've lost 22kg in 8 months and feel healthier than ever before. The recipes are delicious and use local ingredients!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      beforeAfter: "Lost 22kg in 8 months"
    },
    {
      name: "Chelsea Abida",
      location: "Lavington, Nairobi",
      condition: "Food Allergies",
      content: "Best organic products in Nairobi! The AI recommendations match my dietary restrictions perfectly. No more guessing which foods are safe for my allergies.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      beforeAfter: "Zero allergic reactions, peace of mind"
    },
    {
      name: "Dr. Peter Kamau",
      location: "Muthaiga, Nairobi",
      condition: "Hypertension",
      content: "As a doctor, I appreciate the scientific approach to nutrition. My blood pressure is now well-controlled through the recommended diet changes.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      beforeAfter: "Blood pressure normalized"
    },
    {
      name: "Grace Njeri",
      location: "Thika Road, Nairobi",
      condition: "Family of 5",
      content: "The family plan has been a game-changer. Customized nutrition for each family member, from my 3-year-old to my grandmother. Everyone's health has improved!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      beforeAfter: "Whole family healthier"
    }
  ];

  const stats = [
    { number: "15,000+", label: "Happy Customers" },
    { number: "500+", label: "Partner Farmers" },
    { number: "25", label: "Counties Served" },
    { number: "100,000+", label: "Meals Planned" }
  ];

  const successStories = [
    {
      title: "Mary's Weight Loss Journey",
      subtitle: "Lost 30kg in 10 months",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      story: "With personalized meal plans and fresh ingredients, Mary achieved her weight loss goals safely and sustainably."
    },
    {
      title: "John's Diabetes Management",
      subtitle: "HbA1c reduced from 10.1% to 6.5%",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      story: "Through AI-guided nutrition planning, John successfully managed his diabetes using local Kenyan foods."
    },
    {
      title: "Sarah's Family Nutrition",
      subtitle: "Improved health for family of 6",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      story: "Custom meal plans for each family member's needs resulted in better health outcomes for everyone."
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
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-green-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
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

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how Vuno AI has transformed lives across Nairobi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
                  <p className="text-green-600 font-medium mb-3">{story.subtitle}</p>
                  <p className="text-gray-600 text-sm">{story.story}</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Read Full Story
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="py-20 bg-white">
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

      {/* Detailed Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real customers across Nairobi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedTestimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                      <div className="text-xs text-blue-600">{testimonial.condition}</div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">"{testimonial.content}"</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-sm font-medium text-green-800">Results:</div>
                    <div className="text-sm text-green-700">{testimonial.beforeAfter}</div>
                  </div>
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
