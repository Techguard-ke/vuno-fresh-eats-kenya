
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Brain, Check, Star, Calendar } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

const Nutrition = () => {
  const { user, isAuthenticated } = useAuth();
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedDiet, setSelectedDiet] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<any>(null);

  const healthConditions = [
    'Diabetes',
    'Hypertension',
    'High Cholesterol',
    'Heart Disease',
    'Obesity',
    'Food Allergies',
    'Digestive Issues',
    'Anemia'
  ];

  const dietaryPreferences = [
    'Vegetarian',
    'Vegan',
    'Gluten-Free',
    'Dairy-Free',
    'Low-Carb',
    'High-Protein',
    'Low-Sodium',
    'Organic Only'
  ];

  const subscriptionPlans = [
    {
      name: 'Basic Plan',
      price: 2500,
      period: 'month',
      features: [
        'Weekly meal plans',
        'Basic nutrition tracking',
        'Email support',
        'Recipe suggestions'
      ]
    },
    {
      name: 'Premium Plan',
      price: 4500,
      period: 'month',
      features: [
        'Daily personalized meals',
        'Advanced health tracking',
        'Priority support',
        'Custom shopping lists',
        'Video consultations',
        'Progress monitoring'
      ],
      popular: true
    },
    {
      name: 'Family Plan',
      price: 8000,
      period: 'month',
      features: [
        'Plans for up to 4 family members',
        'Age-specific nutrition',
        'Family meal coordination',
        'Bulk shopping lists',
        'Dedicated nutritionist',
        'Monthly health reports'
      ]
    }
  ];

  const handleConditionChange = (condition: string, checked: boolean) => {
    if (checked) {
      setSelectedConditions([...selectedConditions, condition]);
    } else {
      setSelectedConditions(selectedConditions.filter(c => c !== condition));
    }
  };

  const handleDietChange = (diet: string, checked: boolean) => {
    if (checked) {
      setSelectedDiet([...selectedDiet, diet]);
    } else {
      setSelectedDiet(selectedDiet.filter(d => d !== diet));
    }
  };

  const generateSamplePlan = async () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please sign up or log in to generate your personalized nutrition plan.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const samplePlan = {
      breakfast: {
        meal: "Vegetable Omelette with Avocado",
        calories: 320,
        ingredients: ["Eggs", "Spinach", "Tomatoes", "Avocado", "Olive Oil"]
      },
      lunch: {
        meal: "Quinoa Salad with Grilled Chicken",
        calories: 450,
        ingredients: ["Quinoa", "Chicken Breast", "Mixed Greens", "Cucumber", "Lemon"]
      },
      dinner: {
        meal: "Grilled Fish with Sweet Potato",
        calories: 380,
        ingredients: ["Tilapia", "Sweet Potato", "Broccoli", "Garlic", "Herbs"]
      },
      snack: {
        meal: "Greek Yogurt with Berries",
        calories: 150,
        ingredients: ["Greek Yogurt", "Mixed Berries", "Nuts"]
      }
    };
    
    setGeneratedPlan(samplePlan);
    setIsGenerating(false);
    
    toast({
      title: "Plan Generated!",
      description: "Your personalized nutrition plan is ready.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Nutrition Planning
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized meal plans tailored to your health conditions and dietary preferences 
            using our advanced AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Health Assessment Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="h-6 w-6 mr-2 text-blue-600" />
                Health Assessment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Health Conditions</h3>
                <div className="grid grid-cols-2 gap-2">
                  {healthConditions.map((condition) => (
                    <div key={condition} className="flex items-center space-x-2">
                      <Checkbox
                        id={condition}
                        checked={selectedConditions.includes(condition)}
                        onCheckedChange={(checked) => 
                          handleConditionChange(condition, checked as boolean)
                        }
                      />
                      <label htmlFor={condition} className="text-sm">
                        {condition}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Dietary Preferences</h3>
                <div className="grid grid-cols-2 gap-2">
                  {dietaryPreferences.map((diet) => (
                    <div key={diet} className="flex items-center space-x-2">
                      <Checkbox
                        id={diet}
                        checked={selectedDiet.includes(diet)}
                        onCheckedChange={(checked) => 
                          handleDietChange(diet, checked as boolean)
                        }
                      />
                      <label htmlFor={diet} className="text-sm">
                        {diet}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Age</label>
                  <Input type="number" placeholder="Enter your age" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Weight (kg)</label>
                  <Input type="number" placeholder="Enter your weight" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Height (cm)</label>
                  <Input type="number" placeholder="Enter your height" />
                </div>
              </div>

              <Button 
                onClick={generateSamplePlan}
                disabled={isGenerating}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {isGenerating ? "Generating Plan..." : "Generate AI Nutrition Plan"}
              </Button>
            </CardContent>
          </Card>

          {/* Generated Plan or Sample */}
          <Card>
            <CardHeader>
              <CardTitle>Your Daily Meal Plan</CardTitle>
            </CardHeader>
            <CardContent>
              {generatedPlan ? (
                <div className="space-y-4">
                  {Object.entries(generatedPlan).map(([mealType, meal]: [string, any]) => (
                    <div key={mealType} className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold capitalize">{mealType}</h4>
                      <p className="text-sm text-gray-600">{meal.meal}</p>
                      <p className="text-xs text-gray-500">{meal.calories} calories</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {meal.ingredients.map((ingredient: string, index: number) => (
                          <span key={index} className="bg-gray-100 text-xs px-2 py-1 rounded">
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      Total Daily Calories: 1,300 | Protein: 45g | Carbs: 120g | Fat: 55g
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Brain className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Complete the health assessment to generate your personalized meal plan
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Subscription Plans */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Subscription Plans
            </h2>
            <p className="text-xl text-gray-600">
              Choose a plan that fits your nutrition journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subscriptionPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-green-600">
                    KES {plan.price.toLocaleString()}
                    <span className="text-lg text-gray-500">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-green-600 hover:bg-green-700' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <Card>
          <CardHeader>
            <CardTitle>Why Choose Our AI Nutrition Plans?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Brain className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">AI-Powered</h3>
                <p className="text-sm text-gray-600">
                  Advanced algorithms analyze your health data to create personalized meal plans
                </p>
              </div>
              <div className="text-center">
                <Check className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Health-Focused</h3>
                <p className="text-sm text-gray-600">
                  Plans designed to manage specific health conditions and improve overall wellness
                </p>
              </div>
              <div className="text-center">
                <Calendar className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Flexible</h3>
                <p className="text-sm text-gray-600">
                  Easily adjust your plans based on preferences, schedule, and progress
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Nutrition;
