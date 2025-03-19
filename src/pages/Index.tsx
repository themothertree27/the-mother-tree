import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MembershipTiers from '../components/MembershipTiers';
import Footer from '../components/Footer';
import { Leaf, Heart, TreeDeciduous, Mountain, Sprout } from 'lucide-react';
const Index = () => {
  useEffect(() => {
    const animateElements = () => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, {
        threshold: 0.1
      });
      const elements = document.querySelectorAll('.animate-scroll-in');
      elements.forEach(element => observer.observe(element));
      return () => {
        elements.forEach(element => observer.unobserve(element));
      };
    };
    animateElements();
  }, []);
  return <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-nature-leaf/5 to-white"></div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-scroll-in">
              <div className="inline-flex items-center justify-center rounded-full bg-nature-leaf/10 px-3 py-1 text-sm font-medium text-nature-leaf mb-4">
                Our Purpose
              </div>
              <h2 className="md:text-4xl font-serif font-medium tracking-tight mb-6 text-2xl">Rooted in Nature, 
Growing in Community</h2>
              <p className="mb-6 text-left text-gray-600">Rooted in the power of presence, The Mother Tree plants the dreaming seed in each of us, helping us find our truest selves, reconnecting us back to nature, and creating a community dedicated to art, activism, and ancestral wisdom. The Mother Tree is our way home.</p>
              <p className="text-gray-600 mb-8">The Mother Tree represents the interconnected network that sustains old growth forests. Like these natural systems, our community thrives through connection, mutual support, and the sharing of resources. The Mother Tree is a convergence of culture and trust, where ideas and creations of a better today begin to grow.</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-nature-leaf/10">
                    <Leaf className="h-5 w-5 text-nature-leaf" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Sustainable</h4>
                    <p className="text-sm text-gray-500">Practices that respect the planet</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-nature-bark/10">
                    <Heart className="h-5 w-5 text-nature-bark" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Community</h4>
                    <p className="text-sm text-gray-500">Power of togetherness</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-nature-soil/10">
                    <Sprout className="h-5 w-5 text-nature-soil" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Digging</h4>
                    <p className="text-sm text-gray-500">Continuous truth-seeking</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-full bg-nature-sky/10">
                    <Mountain className="h-5 w-5 text-nature-sky" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Presence</h4>
                    <p className="text-sm text-gray-500">Mindful connection with nature</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] animate-scroll-in" style={{
            transitionDelay: '0.3s'
          }}>
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-nature-leaf/30 to-transparent"></div>
                  <img src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Rainforest Light" className="w-full h-full object-cover" />
                </div>
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-bl from-nature-bark/30 to-transparent"></div>
                  <img src="/lovable-uploads/2b453ba8-138c-4c3c-8f45-c29ad27148f2.png" alt="Snow Covered Winter Forest" className="w-full h-full object-cover" />
                </div>
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-nature-soil/30 to-transparent"></div>
                  <img src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Forest Meditation" className="w-full h-full object-cover" />
                </div>
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tl from-nature-sky/30 to-transparent"></div>
                  <img src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Spiritual Forest" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-nature-sky/20"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-nature-leaf/20"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Help Grow Section - Moved above MembershipTiers */}
      <section className="section-padding relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-scroll-in">
            <div className="inline-flex items-center justify-center rounded-full bg-nature-sunlight/20 px-3 py-1 text-sm font-medium text-nature-soil mb-4">Grow Our Community</div>
            <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight mb-6">
              Help Grow <span className="text-nature-leaf">The Mother Tree</span> Today
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">All levels of giving support our mission to nurture connections between people and the natural world. Thank you for joining us in creating a more sustainable, conscious community.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#membership" className="px-8 py-4 rounded-full bg-nature-leaf text-white font-medium transform transition duration-300 hover:shadow-xl hover:translate-y-[-2px]">The Giving-Back Tree</a>
              
              
            </div>
          </div>
        </div>
      </section>
      
      <MembershipTiers />
      
      <Footer />
      
      <a href="#" className="fixed bottom-6 right-6 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 z-50" onClick={e => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }}>
        <svg className="w-5 h-5 text-nature-leaf" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </a>
    </div>;
};
export default Index;