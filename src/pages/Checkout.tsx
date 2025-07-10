
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { MapPin, CreditCard, Smartphone, CheckCircle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const [deliveryInfo, setDeliveryInfo] = useState({
    address: '',
    area: '',
    phone: user?.phone || '',
    deliveryTime: ''
  });
  
  const [paymentMethod, setPaymentMethod] = useState('mpesa');

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (items.length === 0 && !orderPlaced) {
    return <Navigate to="/cart" replace />;
  }

  const deliveryFee = 200;
  const total = totalPrice + deliveryFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryInfo({
      ...deliveryInfo,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    clearCart();
    setOrderPlaced(true);
    setIsProcessing(false);
    
    toast({
      title: "Order placed successfully!",
      description: "You will receive a confirmation SMS shortly.",
    });
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="text-center p-8">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600 mb-6">
              Your order has been placed successfully. You will receive delivery updates via SMS.
            </p>
            <div className="space-y-2">
              <Link to="/profile" className="block w-full">
                <Button variant="outline" className="w-full">
                  View Order History
                </Button>
              </Link>
              <Link to="/products" className="block w-full">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Checkout</h1>
          <p className="text-gray-600">Complete your order</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Form */}
          <div className="space-y-6">
            {/* Delivery Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Delivery Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">Delivery Address</Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="Enter your full address"
                    value={deliveryInfo.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="area">Area</Label>
                    <Select onValueChange={(value) => setDeliveryInfo({...deliveryInfo, area: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="westlands">Westlands</SelectItem>
                        <SelectItem value="karen">Karen</SelectItem>
                        <SelectItem value="kilimani">Kilimani</SelectItem>
                        <SelectItem value="lavington">Lavington</SelectItem>
                        <SelectItem value="runda">Runda</SelectItem>
                        <SelectItem value="gigiri">Gigiri</SelectItem>
                        <SelectItem value="kileleshwa">Kileleshwa</SelectItem>
                        <SelectItem value="riverside">Riverside</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+254 700 000 000"
                      value={deliveryInfo.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="deliveryTime">Preferred Delivery Time</Label>
                  <Select onValueChange={(value) => setDeliveryInfo({...deliveryInfo, deliveryTime: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select delivery time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                      <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg">
                    <RadioGroupItem value="mpesa" id="mpesa" />
                    <Label htmlFor="mpesa" className="flex items-center cursor-pointer">
                      <Smartphone className="h-5 w-5 mr-2 text-green-600" />
                      M-Pesa (Recommended)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center cursor-pointer">
                      <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
                      Credit/Debit Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg">
                    <RadioGroupItem value="cod" id="cod" />
                    <Label htmlFor="cod" className="cursor-pointer">
                      Cash on Delivery
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === 'mpesa' && (
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      You will receive an M-Pesa prompt to complete payment after placing your order.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-medium">
                        KES {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>KES {totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>KES {deliveryFee.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>KES {total.toLocaleString()}</span>
                  </div>
                </div>

                <Button
                  onClick={handlePlaceOrder}
                  disabled={isProcessing || !deliveryInfo.address || !deliveryInfo.area}
                  className="w-full bg-green-600 hover:bg-green-700"
                  size="lg"
                >
                  {isProcessing ? 'Processing Order...' : `Place Order - KES ${total.toLocaleString()}`}
                </Button>

                <p className="text-xs text-gray-600 text-center">
                  By placing your order, you agree to our Terms of Service and Privacy Policy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
