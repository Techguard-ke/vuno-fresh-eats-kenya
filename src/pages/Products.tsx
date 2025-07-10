
import { useState } from 'react';
import { Search, Filter, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addItem } = useCart();

  const categories = ['All', 'Vegetables', 'Fruits', 'Dairy', 'Grains', 'Organic'];

  const products = [
    {
      id: '1',
      name: 'Fresh Tomatoes',
      price: 150,
      category: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Rich in Vitamin C, Lycopene',
      organic: true
    },
    {
      id: '2',
      name: 'Green Spinach',
      price: 80,
      category: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'High in Iron, Folate',
      organic: true
    },
    {
      id: '3',
      name: 'Fresh Carrots',
      price: 120,
      category: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Beta-carotene, Vitamin A',
      organic: false
    },
    {
      id: '4',
      name: 'Sweet Bananas',
      price: 100,
      category: 'Fruits',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Potassium, Vitamin B6',
      organic: false
    },
    {
      id: '5',
      name: 'Fresh Avocados',
      price: 300,
      category: 'Fruits',
      image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Healthy fats, Fiber',
      organic: true
    },
    {
      id: '6',
      name: 'Fresh Milk',
      price: 80,
      category: 'Dairy',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Calcium, Protein',
      organic: false
    },
    {
      id: '7',
      name: 'Brown Rice',
      price: 200,
      category: 'Grains',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Complex carbs, Fiber',
      organic: true
    },
    {
      id: '8',
      name: 'Organic Kale',
      price: 120,
      category: 'Organic',
      image: 'https://images.unsplash.com/photo-1515543904379-3d3e6169b7ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Vitamin K, Antioxidants',
      organic: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fresh Farm Products
          </h1>
          <p className="text-xl text-gray-600">
            Quality products directly from local farms in Kenya
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-green-600 hover:bg-green-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.organic && (
                  <Badge className="absolute top-2 left-2 bg-green-600">
                    Organic
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.nutrition}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    KES {product.price}
                  </span>
                  <span className="text-sm text-gray-500">/kg</span>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    size="sm"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
