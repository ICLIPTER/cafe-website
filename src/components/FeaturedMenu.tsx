import { Star, Clock, Flame, Leaf } from 'lucide-react';

const FeaturedMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: 'Signature Espresso Blend',
      description: 'Our house blend of premium arabica beans with rich chocolate undertones and a smooth finish.',
      price: '$4.50',
      image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
      category: 'Hot Coffee',
      rating: 4.9,
      prepTime: '3 min',
      isSpicy: false,
      isVegan: true,
    },
    {
      id: 2,
      name: 'Caramel Macchiato Supreme',
      description: 'Vanilla-infused steamed milk layered with rich espresso and topped with buttery caramel drizzle.',
      price: '$5.25',
      image: 'https://images.pexels.com/photos/4226982/pexels-photo-4226982.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
      category: 'Specialty Drinks',
      rating: 4.8,
      prepTime: '5 min',
      isSpicy: false,
      isVegan: false,
    },
    {
      id: 3,
      name: 'Artisan Croissant',
      description: 'Buttery, flaky pastry baked fresh daily with layers of perfection. Perfect with our signature coffee.',
      price: '$3.75',
      image: 'https://images.pexels.com/photos/1414234/pexels-photo-1414234.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
      category: 'Pastries',
      rating: 4.7,
      prepTime: '2 min',
      isSpicy: false,
      isVegan: false,
    },
    {
      id: 4,
      name: 'Iced Vanilla Latte',
      description: 'Smooth espresso combined with vanilla syrup and cold milk, served over ice for the perfect refreshment.',
      price: '$4.75',
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
      category: 'Cold Drinks',
      rating: 4.8,
      prepTime: '4 min',
      isSpicy: false,
      isVegan: true,
    },
    {
      id: 5,
      name: 'Avocado Toast Deluxe',
      description: 'Fresh avocado mash on artisan bread topped with cherry tomatoes, feta cheese, and a drizzle of olive oil.',
      price: '$8.50',
      image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
      category: 'Breakfast',
      rating: 4.6,
      prepTime: '7 min',
      isSpicy: false,
      isVegan: false,
    },
    {
      id: 6,
      name: 'Chocolate Chip Muffin',
      description: 'Warm, fluffy muffin loaded with premium chocolate chips. A perfect companion to your morning coffee.',
      price: '$3.25',
      image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
      category: 'Pastries',
      rating: 4.5,
      prepTime: '1 min',
      isSpicy: false,
      isVegan: false,
    },
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Our Featured Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium coffees, artisanal pastries, 
            and gourmet breakfast options, all crafted with the finest ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-amber-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  {item.isVegan && (
                    <div className="bg-green-500 text-white p-1 rounded-full">
                      <Leaf className="h-4 w-4" />
                    </div>
                  )}
                  {item.isSpicy && (
                    <div className="bg-red-500 text-white p-1 rounded-full">
                      <Flame className="h-4 w-4" />
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-amber-900 group-hover:text-amber-700 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-amber-600">{item.price}</span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{item.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{item.prepTime}</span>
                  </div>
                </div>

                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-100 hover:bg-amber-200 text-amber-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;