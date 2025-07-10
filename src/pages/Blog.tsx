
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Superfoods Every Kenyan Should Include in Their Diet",
      excerpt: "Discover locally available superfoods that can boost your immune system and improve overall health. From sweet potatoes to sukuma wiki...",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Nutrition Tips",
      date: "2024-01-15",
      author: "Dr. Sarah Mwangi",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Sustainable Farming Practices in Nairobi's Urban Areas",
      excerpt: "Learn how urban farmers in Nairobi are revolutionizing food production using innovative techniques like vertical farming and hydroponics...",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Farming Practices",
      date: "2024-01-12",
      author: "James Kiprotich",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Managing Diabetes with Local Kenyan Foods",
      excerpt: "A comprehensive guide on how to use traditional Kenyan foods to manage diabetes effectively. Including meal plans and recipes...",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Health Recipes",
      date: "2024-01-10",
      author: "Dr. Mary Wanjiku",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Benefits of Organic Farming for Your Health",
      excerpt: "Why choosing organic produce matters for your family's health and how it impacts the environment. Plus tips on identifying authentic organic products...",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Farming Practices",
      date: "2024-01-08",
      author: "Peter Mutua",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Quick and Healthy Breakfast Ideas for Busy Professionals",
      excerpt: "Start your day right with these nutritious breakfast recipes that take less than 10 minutes to prepare. Perfect for Nairobi's busy lifestyle...",
      image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Health Recipes",
      date: "2024-01-05",
      author: "Chef Ann Njeri",
      readTime: "3 min read"
    },
    {
      id: 6,
      title: "Understanding Food Labels: A Consumer's Guide",
      excerpt: "Learn how to read and understand food labels to make informed choices about the products you buy. Essential knowledge for health-conscious consumers...",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Nutrition Tips",
      date: "2024-01-03",
      author: "Dr. Michael Ochieng",
      readTime: "5 min read"
    }
  ];

  const categories = ["All", "Nutrition Tips", "Farming Practices", "Health Recipes"];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nutrition & Farming Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights on nutrition, healthy recipes, and sustainable farming practices 
            from our team of nutritionists and agricultural experts.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="cursor-pointer hover:bg-green-100 px-4 py-2"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        <Card className="mb-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-64 md:h-full object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-green-600">
                Featured
              </Badge>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <Badge variant="outline" className="w-fit mb-4">
                {blogPosts[0].category}
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-600 mb-6">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(blogPosts[0].date).toLocaleDateString()}
                  </div>
                </div>
                <Link 
                  to={`/blog/${blogPosts[0].id}`}
                  className="text-green-600 hover:text-green-700 flex items-center"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-2 right-2" variant="secondary">
                  {post.readTime}
                </Badge>
              </div>
              
              <CardHeader className="pb-2">
                <Badge variant="outline" className="w-fit mb-2">
                  {post.category}
                </Badge>
                <h3 className="text-lg font-semibold leading-tight">
                  {post.title}
                </h3>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="block mt-4 text-green-600 hover:text-green-700 text-sm font-medium"
                >
                  Read Full Article →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <Card className="mt-12 bg-green-50">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to get the latest nutrition tips, 
              healthy recipes, and farming insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
                Subscribe
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
