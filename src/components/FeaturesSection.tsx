import { 
  QrCode, 
  Users, 
  TrendingUp, 
  Clock, 
  MapPin, 
  Smartphone,
  CheckSquare,
  Database
} from "lucide-react";

const features = [
  {
    icon: CheckSquare,
    title: "Smart Shopping Lists",
    description: "Create categorized lists that sync in real-time across all devices. Never miss an item again.",
    gradient: "from-primary to-accent"
  },
  {
    icon: QrCode,
    title: "Barcode Scanner",
    description: "Scan products instantly to add them to your list with full product details and pricing.",
    gradient: "from-accent to-secondary"
  },
  {
    icon: Users,
    title: "Family Collaboration", 
    description: "Share lists with family members and see updates instantly. Perfect for household coordination.",
    gradient: "from-secondary to-primary"
  },
  {
    icon: TrendingUp,
    title: "Price Tracking",
    description: "Track prices across stores and time to find the best deals and save money on groceries.",
    gradient: "from-primary to-secondary"
  },
  {
    icon: MapPin,
    title: "Store Location Memory",
    description: "Automatically remember where you bought items and compare prices across different stores.",
    gradient: "from-accent to-primary"
  },
  {
    icon: Database,
    title: "Purchase History",
    description: "Keep track of all your purchases with detailed analytics and spending insights.",
    gradient: "from-secondary to-accent"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need for
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Smart Shopping
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            MUY LISTA combines powerful features with intuitive design to make grocery 
            shopping faster, smarter, and more collaborative than ever before.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card group"
            >
              <div className="icon-container">
                <feature.icon className={`w-8 h-8 text-primary`} />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-20 bg-card-gradient rounded-3xl p-8 lg:p-12 shadow-card">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="icon-container mb-6">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Works Everywhere You Shop
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're at the supermarket, farmer's market, or corner store, 
                MUY LISTA works offline and syncs when you're back online.
              </p>
              <ul className="space-y-4">
                {[
                  "Offline functionality for underground stores",
                  "Real-time sync when connection returns", 
                  "Cross-platform mobile and web app",
                  "Instant notifications for list updates"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mr-4"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
                <Clock className="w-16 h-16 text-primary mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-foreground mb-2">Save 30+ Minutes</h4>
                <p className="text-muted-foreground">per shopping trip with organized, smart lists</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;