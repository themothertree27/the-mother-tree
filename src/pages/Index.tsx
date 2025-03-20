import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MembershipTiers from '../components/MembershipTiers';
import ConnectWithUs from '../components/ConnectWithUs';
import Footer from '../components/Footer';
import { Leaf, Heart, TreeDeciduous, Mountain, Sprout, Coffee, Mic, BookOpen, Home, Users, PenTool, Sun, Utensils, Music, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

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
              <h2 className="md:text-4xl font-serif font-medium tracking-tight mb-6 text-2xl">
                Rooted in Nature<br />
                Growing in Community
              </h2>
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
      
      {/* Help Grow Section - Moved before Spaces & Features Section */}
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
      
      {/* Spaces & Features Section */}
      <section id="spaces" className="section-padding relative overflow-hidden bg-gradient-to-b from-white to-nature-leaf/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-scroll-in">
            <div className="inline-flex items-center justify-center rounded-full bg-nature-soil/10 px-3 py-1 text-sm font-medium text-nature-soil mb-4">
              Our Space
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-6">
              What is <span className="text-nature-leaf">The Mother Tree</span>?
            </h2>
            <p className="text-gray-600 mx-auto max-w-2xl">
              The Mother Tree is a vibrant Membership Community Center that serves as a nurturing environment for creativity, wellness, education, and social enterprise.
            </p>
          </div>
          
          {/* Main Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-scroll-in" style={{
          transitionDelay: '0.2s'
        }}>
            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-nature-leaf/10 mb-4">
                <Home className="w-6 h-6 text-nature-leaf" />
              </div>
              <h3 className="text-xl font-medium mb-2">Membership Community Center</h3>
              <p className="text-gray-600">A physical space where people gather to connect, collaborate, and create meaningful relationships.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-nature-bark/10 mb-4">
                <Users className="w-6 h-6 text-nature-bark" />
              </div>
              <h3 className="text-xl font-medium mb-2">Event Venue & Private Rental Space</h3>
              <p className="text-gray-600">A beautiful space for hosting workshops, talks, performances, and community gatherings.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-red-500/10 mb-4">
                <Heart className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-medium mb-2">Holistic & 
Wellness Space</h3>
              <p className="text-gray-600">A sanctuary for mind, body, and spirit practices that promote wellbeing and personal growth.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-nature-sky/10 mb-4">
                <TreeDeciduous className="w-6 h-6 text-nature-sky" />
              </div>
              <h3 className="text-xl font-medium mb-2">Ecological Education Workshop</h3>
              <p className="text-gray-600">A learning environment dedicated to sustainability, permaculture, and earth stewardship.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-nature-sky/10 mb-4">
                <PenTool className="w-6 h-6 text-nature-sky" />
              </div>
              <h3 className="text-xl font-medium mb-2">Artist Co-creation Lounge & Studio</h3>
              <p className="text-gray-600">A shared workspace designed for creators to develop their craft and collaborate with peers.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-nature-bark/10 mb-4">
                <Sprout className="w-6 h-6 text-nature-bark" />
              </div>
              <h3 className="text-xl font-medium mb-2">Social Enterprise Accelerator</h3>
              <p className="text-gray-600">A platform that supports mission-driven entrepreneurs who aim to create positive social impact.</p>
            </div>
          </div>
          
          <h3 className="text-2xl font-serif font-medium text-center mb-8 animate-scroll-in" style={{
          transitionDelay: '0.3s'
        }}>Our Four-Floor Shared Space Features</h3>
          
          {/* Space Features - Rearranged and recolored as requested */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-scroll-in" style={{
          transitionDelay: '0.4s'
        }}>
            <div className="text-center p-4">
              <div className="mx-auto rounded-full w-12 h-12 flex items-center justify-center bg-black/10 mb-3">
                <Sun className="w-6 h-6 text-black" />
              </div>
              <h4 className="font-medium mb-1">Rooftop Garden & Patio</h4>
            </div>
            
            <div className="text-center p-4">
              <div className="mx-auto rounded-full w-12 h-12 flex items-center justify-center bg-black/10 mb-3">
                <BookOpen className="w-6 h-6 text-black" />
              </div>
              <h4 className="font-medium mb-1">Library</h4>
            </div>
            
            <div className="text-center p-4">
              <div className="mx-auto rounded-full w-12 h-12 flex items-center justify-center bg-nature-sky/10 mb-3">
                <Mic className="w-6 h-6 text-nature-sky" />
              </div>
              <h4 className="font-medium mb-1">Recording Studio</h4>
            </div>
            
            <div className="text-center p-4">
              <div className="mx-auto rounded-full w-12 h-12 flex items-center justify-center bg-nature-sky/10 mb-3">
                <Music className="w-6 h-6 text-nature-sky" />
              </div>
              <h4 className="font-medium mb-1">Artist Lounge</h4>
            </div>
            
            <div className="text-center p-4">
              <div className="mx-auto rounded-full w-12 h-12 flex items-center justify-center bg-red-500/10 mb-3">
                <Heart className="w-6 h-6 text-red-500" />
              </div>
              <h4 className="font-medium mb-1">Meditation Areas</h4>
            </div>
            
            <div className="text-center p-4">
              <div className="mx-auto rounded-full w-12 h-12 flex items-center justify-center bg-red-500/10 mb-3">
                <BookOpen className="w-6 h-6 text-red-500" />
              </div>
              <h4 className="font-medium mb-1">Holistic Practice Areas</h4>
            </div>
            
            <div className="text-center p-4">
              <div className="mx-auto rounded-full w-12 h-12 flex items-center justify-center bg-green-500/10 mb-3">
                <Coffee className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="font-medium mb-1">Café</h4>
            </div>
            
            <div className="text-center p-4">
              <div className="mx-auto rounded-full w-12 h-12 flex items-center justify-center bg-green-500/10 mb-3">
                <Utensils className="w-6 h-6 text-green-500" />
              </div>
              <h4 className="font-medium mb-1">Communal Kitchen</h4>
            </div>
          </div>
          
          {/* Business Plan Button */}
          <div className="mt-12 text-center animate-scroll-in" style={{ transitionDelay: '0.5s' }}>
            <p className="text-lg mb-4">Want to read The Mother Tree Business Plan?</p>
            <a href="https://www.canva.com/design/DAGdakwqMGg/KyerA8gnLjdSWCRfueavwA/view?utm_content=DAGdakwqMGg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h120a346822" target="_blank" rel="noopener noreferrer">
              <Button variant="default" className="bg-nature-leaf hover:bg-nature-leaf/90">
                Explore <ArrowRight className="ml-1" />
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      <MembershipTiers />
      
      <ConnectWithUs />
      
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
