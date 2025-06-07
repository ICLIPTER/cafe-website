import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedMenu from './components/FeaturedMenu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <Hero />
      <FeaturedMenu />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;