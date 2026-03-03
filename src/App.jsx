import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Doctors />
        <Testimonials />
        <Appointment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
