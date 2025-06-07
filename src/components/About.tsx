import { Heart, Users, Award, Coffee } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-amber-600" />,
      title: 'Crafted with Love',
      description: 'Every cup is prepared with passion and attention to detail, ensuring the perfect taste experience.',
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: 'Community Focused',
      description: 'We believe in building connections and creating a warm, welcoming space for everyone.',
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: 'Award Winning',
      description: 'Recognized for excellence in coffee quality and outstanding customer service.',
    },
    {
      icon: <Coffee className="h-8 w-8 text-amber-600" />,
      title: 'Premium Beans',
      description: 'We source only the finest arabica beans from sustainable farms around the world.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              About BIBEK'S CAFE
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founded in 2012, BIBEK'S CAFE began as a dream to create more than just a coffee shop. 
              We envisioned a place where the aroma of freshly roasted beans mingles with the warmth of 
              genuine hospitality, creating moments that matter.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our journey started with a simple belief: that great coffee has the power to bring people 
              together. Today, we continue to honor that belief by serving exceptional coffee in an 
              atmosphere that feels like home.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-amber-100 p-3 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2"
                alt="Coffee preparation"
                className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
                alt="Cafe interior"
                className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-32 object-cover mt-16"
              />
              <img
                src="https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2"
                alt="Coffee beans"
                className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-32 object-cover -mt-16"
              />
              <img
                src="https://images.pexels.com/photos/3799115/pexels-photo-3799115.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2"
                alt="Barista at work"
                className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-64 object-cover"
              />
            </div>
            
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-amber-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-amber-300 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;