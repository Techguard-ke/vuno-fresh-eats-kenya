
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();
  const { user, logout } = useAuth();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Nutrition Plans', href: '/nutrition' },
    { name: 'Blog', href: '/blog' },
  ];

  const isActiveRoute = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">Vuno AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActiveRoute(item.href)
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <Button variant="outline" size="sm">
                <ShoppingCart className="h-4 w-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-2">
                <Link to="/profile">
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-1" />
                    {user.name}
                  </Button>
                </Link>
                <Button onClick={logout} variant="ghost" size="sm">
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="outline" size="sm">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActiveRoute(item.href)
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="border-t pt-4 space-y-2">
                <Link to="/cart" className="flex items-center px-3 py-2">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart ({totalItems})
                </Link>
                
                {user ? (
                  <>
                    <Link to="/profile" className="flex items-center px-3 py-2">
                      <User className="h-4 w-4 mr-2" />
                      {user.name}
                    </Link>
                    <button onClick={logout} className="block w-full text-left px-3 py-2">
                      Logout
                    </button>
                  </>
                ) : (
                  <div className="space-y-2 px-3">
                    <Link to="/login" className="block w-full">
                      <Button variant="outline" className="w-full">Login</Button>
                    </Link>
                    <Link to="/signup" className="block w-full">
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Sign Up
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
