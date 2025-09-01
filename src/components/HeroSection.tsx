import { ArrowRight, ShoppingCart, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-grocery-app.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="product-badge">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Smart Grocery Management
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                MUY 
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  {" "}LISTA
                </span>
                <br />
                <span className="text-3xl lg:text-4xl font-normal text-white/90">
                  La lista inteligente
                </span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                Transform your grocery shopping with smart lists, barcode scanning, 
                real-time collaboration, and price tracking. Never forget an item again.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-hero group">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary-hero">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="stat-number">50K+</div>
                <p className="text-white/80 text-sm font-medium">Happy Families</p>
              </div>
              <div className="text-center">
                <div className="stat-number">2M+</div>
                <p className="text-white/80 text-sm font-medium">Items Scanned</p>
              </div>
              <div className="text-center">
                <div className="stat-number">$1M+</div>
                <p className="text-white/80 text-sm font-medium">Money Saved</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="float-animation">
              <img 
                src={heroImage} 
                alt="MUY LISTA grocery shopping app interface"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-lg pulse-glow">
              <Users className="w-6 h-6 text-primary" />
              <p className="text-xs font-medium text-foreground mt-1">Family Sync</p>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg pulse-glow">
              <Zap className="w-6 h-6 text-secondary" />
              <p className="text-xs font-medium text-foreground mt-1">Smart Scan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;