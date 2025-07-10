
import { useState } from 'react';
import { Search, Filter, ShoppingCart, Heart, MapPin, Calendar, Leaf } from 'lucide-react';
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

  const categories = ['All', 'Vegetables', 'Fruits', 'Dairy', 'Grains', 'Organic', 'Herbs & Spices', 'Legumes', 'Nuts & Seeds'];

  const products = [
    // Vegetables
    {
      id: '1',
      name: 'Fresh Tomatoes',
      price: 150,
      category: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Rich in Vitamin C (28mg), Lycopene, Potassium (237mg), Folate',
      origin: 'Kiambu County Farms',
      farmingMethod: 'Sustainable drip irrigation',
      seasonal: 'Available year-round',
      organic: true,
      description: 'Juicy, vine-ripened tomatoes perfect for salads and cooking'
    },
    {
      id: '2',
      name: 'Green Spinach',
      price: 80,
      category: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'High in Iron (2.7mg), Folate (194mcg), Vitamin K (483mcg), Vitamin A',
      origin: 'Central Kenya Highlands',
      farmingMethod: 'Organic farming, no pesticides',
      seasonal: 'Peak season: March-June, September-December',
      organic: true,
      description: 'Fresh baby spinach leaves, perfect for salads and smoothies'
    },
    {
      id: '3',
      name: 'Fresh Carrots',
      price: 120,
      category: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Beta-carotene (8285mcg), Vitamin A, Fiber (2.8g), Potassium',
      origin: 'Nakuru County',
      farmingMethod: 'Traditional farming with modern techniques',
      seasonal: 'Available year-round',
      organic: false,
      description: 'Sweet, crunchy carrots rich in vitamins and minerals'
    },
    {
      id: '4',
      name: 'Sukuma Wiki (Collard Greens)',
      price: 60,
      category: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1515543904379-3d3e6169b7ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Vitamin K (230mcg), Vitamin C (35mg), Calcium (232mg), Iron',
      origin: 'Local Nairobi farms',
      farmingMethod: 'Small-scale organic farming',
      seasonal: 'Available year-round',
      organic: true,
      description: 'Kenya\'s favorite green vegetable, packed with nutrients'
    },
    {
      id: '5',
      name: 'Fresh Onions',
      price: 100,
      category: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Vitamin C (7.4mg), Quercetin, Sulfur compounds, Fiber',
      origin: 'Meru County',
      farmingMethod: 'Rain-fed agriculture',
      seasonal: 'Peak harvest: June-September',
      organic: false,
      description: 'Fresh, aromatic onions essential for Kenyan cooking'
    },
    {
      id: '6',
      name: 'Bell Peppers',
      price: 200,
      category: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Vitamin C (190mg), Vitamin A, Antioxidants, Capsaicin',
      origin: 'Kajiado Greenhouses',
      farmingMethod: 'Greenhouse hydroponic system',
      seasonal: 'Available year-round',
      organic: true,
      description: 'Colorful bell peppers grown in controlled environments'
    },
    
    // Fruits
    {
      id: '7',
      name: 'Sweet Bananas',
      price: 100,
      category: 'Fruits',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Potassium (358mg), Vitamin B6 (0.4mg), Fiber (2.6g), Natural sugars',
      origin: 'Meru & Embu Counties',
      farmingMethod: 'Traditional banana cultivation',
      seasonal: 'Available year-round',
      organic: false,
      description: 'Sweet, naturally ripened bananas rich in energy'
    },
    {
      id: '8',
      name: 'Fresh Avocados',
      price: 300,
      category: 'Fruits',
      image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Healthy fats (21g), Fiber (10g), Potassium (975mg), Folate',
      origin: 'Murang\'a County',
      farmingMethod: 'Organic cultivation methods',
      seasonal: 'Peak season: March-September',
      organic: true,
      description: 'Creamy avocados perfect for healthy meals'
    },
    {
      id: '9',
      name: 'Passion Fruits',
      price: 180,
      category: 'Fruits',
      image: 'https://images.unsplash.com/photo-1534119368684-f4d551c2b3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Vitamin C (30mg), Vitamin A, Fiber (10.4g), Antioxidants',
      origin: 'Nyeri Highlands',
      farmingMethod: 'Organic trellising system',
      seasonal: 'Peak season: December-April',
      organic: true,
      description: 'Tangy passion fruits bursting with tropical flavor'
    },
    {
      id: '10',
      name: 'Mangoes',
      price: 120,
      category: 'Fruits',
      image: 'https://images.unsplash.com/photo-1553279463-d6091c942bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Vitamin C (60mg), Vitamin A, Fiber (1.6g), Enzymes',
      origin: 'Machakos & Kitui',
      farmingMethod: 'Traditional orchard farming',
      seasonal: 'Peak season: October-February',
      organic: false,
      description: 'Sweet, juicy mangoes from Kenya\'s dryland areas'
    },
    {
      id: '11',
      name: 'Watermelons',
      price: 250,
      category: 'Fruits',
      image: 'https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Water content (92%), Vitamin C (8.1mg), Lycopene, Citrulline',
      origin: 'Makueni County',
      farmingMethod: 'Dryland farming techniques',
      seasonal: 'Peak season: June-September',
      organic: false,
      description: 'Refreshing watermelons perfect for Kenya\'s warm climate'
    },

    // Dairy Products
    {
      id: '12',
      name: 'Fresh Milk',
      price: 80,
      category: 'Dairy',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Calcium (276mg), Protein (8g), Vitamin B12, Riboflavin',
      origin: 'Kiambu Dairy Farms',
      farmingMethod: 'Free-range dairy farming',
      seasonal: 'Available daily',
      organic: false,
      description: 'Fresh, pasteurized milk from local dairy farms'
    },
    {
      id: '13',
      name: 'Natural Yogurt',
      price: 150,
      category: 'Dairy',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Probiotics, Protein (10g), Calcium (300mg), B vitamins',
      origin: 'Nakuru Dairy Cooperative',
      farmingMethod: 'Organic dairy farming',
      seasonal: 'Available daily',
      organic: true,
      description: 'Creamy natural yogurt with live beneficial cultures'
    },
    {
      id: '14',
      name: 'Farm Fresh Eggs',
      price: 350,
      category: 'Dairy',
      image: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Protein (6g), Choline (147mg), Vitamin D, Selenium',
      origin: 'Thika Free-Range Farms',
      farmingMethod: 'Free-range poultry farming',
      seasonal: 'Available daily',
      organic: true,
      description: 'Fresh eggs from happy, free-range chickens'
    },

    // Grains
    {
      id: '15',
      name: 'Brown Rice',
      price: 200,
      category: 'Grains',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Complex carbs, Fiber (3.5g), Manganese, Magnesium (143mg)',
      origin: 'Mwea Irrigation Scheme',
      farmingMethod: 'Sustainable rice cultivation',
      seasonal: 'Harvest season: March-April, August-September',
      organic: true,
      description: 'Nutritious brown rice retaining natural bran layer'
    },
    {
      id: '16',
      name: 'White Maize Flour',
      price: 120,
      category: 'Grains',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Carbohydrates (74g), Protein (9g), Iron, B vitamins',
      origin: 'Trans Nzoia County',
      farmingMethod: 'Commercial maize farming',
      seasonal: 'Harvest season: July-August, December-January',
      organic: false,
      description: 'Premium maize flour for ugali and baking'
    },
    {
      id: '17',
      name: 'Quinoa',
      price: 450,
      category: 'Grains',
      image: 'https://images.unsplash.com/photo-1593617785922-ec2bc2e4b5d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Complete protein (8g), Fiber (5g), Iron, Magnesium',
      origin: 'Imported & locally grown trials',
      farmingMethod: 'Organic cultivation',
      seasonal: 'Imported year-round',
      organic: true,
      description: 'Superfood grain with complete amino acid profile'
    },

    // Legumes
    {
      id: '18',
      name: 'Green Grams',
      price: 180,
      category: 'Legumes',
      image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Protein (24g), Fiber (16g), Folate, Potassium',
      origin: 'Eastern Kenya',
      farmingMethod: 'Dryland farming',
      seasonal: 'Harvest season: May-June, November-December',
      organic: false,
      description: 'Nutritious green grams perfect for stews and curries'
    },
    {
      id: '19',
      name: 'Kidney Beans',
      price: 200,
      category: 'Legumes',
      image: 'https://images.unsplash.com/photo-1516408936789-49ad5edaa3a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Protein (22g), Fiber (13g), Iron (8mg), Folate',
      origin: 'Western Kenya',
      farmingMethod: 'Mixed farming systems',
      seasonal: 'Harvest season: March-April, September-October',
      organic: true,
      description: 'Rich, creamy kidney beans high in plant protein'
    },

    // Herbs & Spices
    {
      id: '20',
      name: 'Fresh Coriander',
      price: 50,
      category: 'Herbs & Spices',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Vitamin K (310mcg), Vitamin C, Antioxidants, Essential oils',
      origin: 'Nairobi urban farms',
      farmingMethod: 'Hydroponic cultivation',
      seasonal: 'Available year-round',
      organic: true,
      description: 'Fresh coriander leaves for flavoring and garnishing'
    },
    {
      id: '21',
      name: 'Ginger Root',
      price: 300,
      category: 'Herbs & Spices',
      image: 'https://images.unsplash.com/photo-1611519098920-d79cee06e3cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Gingerol, Anti-inflammatory compounds, Vitamin C',
      origin: 'Mount Kenya region',
      farmingMethod: 'Organic cultivation',
      seasonal: 'Harvest season: August-December',
      organic: true,
      description: 'Fresh ginger root with medicinal properties'
    },

    // Nuts & Seeds
    {
      id: '22',
      name: 'Groundnuts',
      price: 250,
      category: 'Nuts & Seeds',
      image: 'https://images.unsplash.com/photo-1553708881-112abc53fe54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Protein (26g), Healthy fats, Niacin, Folate',
      origin: 'Machakos County',
      farmingMethod: 'Smallholder farming',
      seasonal: 'Harvest season: March-May',
      organic: false,
      description: 'Crunchy groundnuts rich in protein and healthy fats'
    },
    {
      id: '23',
      name: 'Sunflower Seeds',
      price: 180,
      category: 'Nuts & Seeds',
      image: 'https://images.unsplash.com/photo-1508747703725-719777637510?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Vitamin E (35mg), Magnesium, Selenium, Healthy fats',
      origin: 'Bungoma County',
      farmingMethod: 'Commercial farming',
      seasonal: 'Harvest season: June-August',
      organic: false,
      description: 'Nutrient-dense sunflower seeds perfect for snacking'
    },

    // Additional Organic Products
    {
      id: '24',
      name: 'Organic Kale',
      price: 120,
      category: 'Organic',
      image: 'https://images.unsplash.com/photo-1515543904379-3d3e6169b7ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Vitamin K (483mcg), Vitamin C (120mg), Antioxidants, Iron',
      origin: 'Certified organic farms in Limuru',
      farmingMethod: 'Certified organic farming',
      seasonal: 'Available year-round',
      organic: true,
      description: 'Nutrient-dense kale from certified organic farms'
    },
    {
      id: '25',
      name: 'Sweet Potatoes',
      price: 100,
      category: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1522775417749-29284fb89f43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      nutrition: 'Beta-carotene (19218mcg), Fiber (3g), Potassium, Vitamin C',
      origin: 'Kakamega County',
      farmingMethod: 'Traditional farming methods',
      seasonal: 'Available year-round',
      organic: false,
      description: 'Sweet, nutritious sweet potatoes rich in vitamins'
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
                    <Leaf className="h-3 w-3 mr-1" />
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
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                
                {/* Detailed Information */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs text-gray-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{product.origin}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{product.seasonal}</span>
                  </div>
                  <div className="text-xs text-blue-600 bg-blue-50 p-2 rounded">
                    <strong>Nutrition:</strong> {product.nutrition}
                  </div>
                  <div className="text-xs text-green-600">
                    <strong>Farming:</strong> {product.farmingMethod}
                  </div>
                </div>
                
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
