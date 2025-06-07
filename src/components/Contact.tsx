import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-amber-600" />,
      title: 'Visit Us',
      details: ['MG Road, Khetrajpur', 'Sambalpur, Odisha 768003', 'India'],
    },
    {
      icon: <Phone className="h-6 w-6 text-amber-600" />,
      title: 'Call Us',
      details: ['+91 1234567890 -CAFE', 'Mon-Sun: 6AM - 9PM'],
    },
    {
      icon: <Mail className="h-6 w-6 text-amber-600" />,
      title: 'Email Us',
      details: ['hello@bibekscafe.com', 'We reply within 24 hours'],
    },
  ];

  const hours = [
    { day: 'Monday - Friday', time: '6:00 AM - 9:00 PM' },
    { day: 'Saturday', time: '7:00 AM - 10:00 PM' },
    { day: 'Sunday', time: '7:00 AM - 8:00 PM' },
  ];

  const socialLinks = [
    { icon: <Instagram className="h-6 w-6" />, href: '#', label: 'Instagram' },
    { icon: <Facebook className="h-6 w-6" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="h-6 w-6" />, href: '#', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We'd love to welcome you to our cafe. Come experience the perfect blend of great coffee, 
            delicious food, and warm hospitality in the heart of Sambalpur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
                {info.icon}
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 leading-relaxed">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-amber-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Clock className="h-8 w-8 text-amber-600 mr-3" />
              <h3 className="text-2xl font-bold text-amber-900">Opening Hours</h3>
            </div>
            <div className="space-y-4">
              {hours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-amber-200 last:border-b-0">
                  <span className="font-medium text-amber-900">{schedule.day}</span>
                  <span className="text-gray-700">{schedule.time}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-amber-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center w-12 h-12 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors duration-200 transform hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl overflow-hidden">
            <div className="h-full min-h-80 flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600">
                  Find us easily in the heart of Sambalpur
                </p>
                <button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-amber-600 text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Visit?</h3>
            <p className="mb-6 leading-relaxed">
              Join us for an unforgettable coffee experience. Whether you're grabbing a quick cup 
              or staying for a leisurely afternoon, we're here to make your day better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-full font-semibold transition-colors duration-200">
                Reserve a Table
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-6 py-3 rounded-full font-semibold transition-all duration-200">
                Order Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;