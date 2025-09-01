import { ArrowRight, Download, Star } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            Ready to Transform
            <br />
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Your Shopping?
            </span>
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of families who have already made their grocery shopping 
            smarter, faster, and more organized with MUY LISTA.
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-white/90 ml-2">4.9/5 from 2,000+ users</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="btn-hero group text-lg px-10 py-5">
              <Download className="mr-3 w-6 h-6" />
              Download Free App
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="text-center">
              <p className="text-white/80 text-sm mb-2">Available on</p>
              <div className="flex gap-4">
                <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg text-white text-sm font-medium">
                  iOS & Android
                </div>
                <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg text-white text-sm font-medium">
                  Web App
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <p className="text-white/80 text-sm">Free to Start</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">🔒</div>
              <p className="text-white/80 text-sm">Private & Secure</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <p className="text-white/80 text-sm">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;