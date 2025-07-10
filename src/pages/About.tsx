
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Users, Target, Recycle, Award, Heart } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Kimani",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Nutritionist with 15+ years experience. PhD in Food Science from University of Nairobi.",
      specialties: ["Clinical Nutrition", "AI Health Technology", "Food Security"]
    },
    {
      name: "James Mwangi",
      role: "CTO & Co-Founder", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "AI Engineer with expertise in machine learning and health tech. Former Google AI researcher.",
      specialties: ["Machine Learning", "Health AI", "Data Science"]
    },
    {
      name: "Grace Wanjiku",
      role: "Head of Agriculture",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Agricultural economist specializing in sustainable farming practices in Kenya.",
      specialties: ["Sustainable Agriculture", "Farmer Relations", "Supply Chain"]
    },
    {
      name: "David Ochieng",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Operations expert with 10+ years in logistics and supply chain management in East Africa.",
      specialties: ["Logistics", "Quality Control", "Team Management"]
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Health First",
      description: "We prioritize the health and wellness of our customers by providing nutritious, fresh products and personalized nutrition guidance."
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "Sustainability",
      description: "Supporting sustainable farming practices that protect our environment while ensuring food security for future generations."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Community",
      description: "Empowering local farmers and building strong relationships within Kenyan agricultural communities."
    },
    {
      icon: <Target className="h-8 w-8 text-purple-500" />,
      title: "Innovation",
      description: "Leveraging cutting-edge AI technology to revolutionize nutrition planning and healthy living in Kenya."
    }
  ];

  const achievements = [
    { metric: "5,000+", label: "Happy Customers" },
    { metric: "200+", label: "Partner Farmers" },
    { metric: "15", label: "Counties Served" },
    { metric: "50,000+", label: "Meals Planned" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Vuno AI
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Revolutionizing nutrition and healthy living in Kenya through AI-powered meal planning 
            and direct partnerships with local farmers.
          </p>
        </div>

        {/* Company Story */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Our Story</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 mb-4">
                  Founded in 2022 in Nairobi, Vuno AI emerged from a simple yet powerful vision: 
                  to make healthy, nutritious food accessible to every Kenyan while supporting 
                  local farmers and sustainable agriculture.
                </p>
                <p className="text-gray-600 mb-4">
                  Our founders, Dr. Sarah Kimani and James Mwangi, recognized that despite Kenya's 
                  rich agricultural heritage, many people struggled to access fresh, affordable 
                  produce and lacked personalized nutrition guidance for their specific health needs.
                </p>
                <p className="text-gray-600">
                  Combining Dr. Kimani's expertise in nutrition science with Mwangi's AI engineering 
                  background, Vuno AI was born as Kenya's first AI-powered nutrition and fresh 
                  produce platform, directly connecting consumers with local farmers.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Kenyan farmers in the field"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mission & Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600">
              Guided by our core principles to create positive impact in Kenyan communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <Card className="mb-16 bg-green-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                    {achievement.metric}
                  </div>
                  <div className="text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Passionate experts dedicated to improving nutrition and agriculture in Kenya
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.bio}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.specialties.map((specialty, specIndex) => (
                      <Badge key={specIndex} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sustainability Practices */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Recycle className="h-6 w-6 mr-2 text-green-600" />
              Our Sustainability Practices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Environmental Stewardship</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Supporting organic and sustainable farming methods</li>
                  <li>• Promoting water conservation through drip irrigation</li>
                  <li>• Reducing food waste through AI-powered demand forecasting</li>
                  <li>• Using eco-friendly packaging materials</li>
                  <li>• Carbon-neutral delivery options in Nairobi</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Social Impact</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fair pricing for local farmers</li>
                  <li>• Training programs for sustainable agriculture</li>
                  <li>• Supporting women-led farming cooperatives</li>
                  <li>• Nutrition education in local communities</li>
                  <li>• Youth employment opportunities in tech and agriculture</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Certifications & Partnerships</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-green-100 text-green-800 px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              Kenya Organic Agriculture Network (KOAN)
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              Kenya Association of Nutritionists
            </Badge>
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              Ministry of Agriculture Partnership
            </Badge>
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              ISO 22000 Food Safety Certified
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
