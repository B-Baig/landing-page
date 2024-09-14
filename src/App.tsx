import { Button } from "./components/ui/button";  
import { ArrowRight, Home, MessageCircle, Shield, Star, Wrench, Calendar } from "lucide-react"

export default function StepinLandingPage() {
  return (
    <div className="min-h-screen bg-rose-50">
      <header className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-rose-600">Stepin</h1>
      </header>

      <main className="container mx-auto px-4 py-16 space-y-32">
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            Your Key to Effortless Renting and Property Management
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Stepin revolutionizes the rental experience with smart automation, seamless communication, and hassle-free maintenance management.
          </p>
          <div className = "flex justify-center">
          <Button
            size="lg" 
            className="flex flex-row text-lg px-8 py-6 bg-rose-600 hover:bg-rose-700 text-white shadow-lg rounded-md transition-colors duration-300 ease-in-out"
          >
            Transform Your Rental Journey  <span><ArrowRight className="ml-2" /></span>
          </Button>
          </div>
          <div className="mt-16 relative">
            <img
              src="/placeholder.svg?height=400&width=800"
              alt="Stepin App Interface"
              className="rounded-lg shadow-2xl mx-auto"
              width={800}
              height={400}
            />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-rose-600 font-semibold">Become a part of our community of active renters and property managers!</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="space-y-16">
          <h3 className="text-3xl font-bold text-center text-gray-900">Why Choose Stepin?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Smart Rental Management",
                description: "Automate listings, screenings, and rent collection. Say goodbye to paperwork headaches!",
                icon: <Home className="h-8 w-8 text-rose-500" />,
              },
              {
                title: "Effortless Maintenance",
                description: "Schedule, track, and resolve maintenance issues with just a few taps. Keep your properties in top shape!",
                icon: <Wrench className="h-8 w-8 text-rose-500" />,
              },
              {
                title: "Secure E-Agreements",
                description: "Sign and manage leases digitally. Legal, secure, and convenient for everyone involved.",
                icon: <Shield className="h-8 w-8 text-rose-500" />,
              },
              {
                title: "Credibility Scoring",
                description: "Make informed decisions with our advanced tenant and landlord scoring system. Trust made easy!",
                icon: <Star className="h-8 w-8 text-rose-500" />,
              },
              {
                title: "Instant Communication",
                description: "Connect with tenants or landlords in real-time. No more phone tag or missed messages!",
                icon: <MessageCircle className="h-8 w-8 text-rose-500" />,
              },
              {
                title: "Smart Scheduling",
                description: "Coordinate viewings, inspections, and maintenance visits effortlessly. Your time is valuable!",
                icon: <Calendar className="h-8 w-8 text-rose-500" />,
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-rose-100 p-3 rounded-full inline-block mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center space-y-8 bg-rose-600 text-white py-16 px-4 rounded-lg">
          <h3 className="text-3xl md:text-4xl font-bold">Ready to Step Into the Future of Renting?</h3>
          <p className="text-xl max-w-2xl mx-auto">
            Join Stepin today and experience a smarter, smoother, and more satisfying rental journey. Your perfect home or ideal tenant is just a step away!
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-rose-600 hover:bg-rose-100">
            Get Started Now - It's Free!
          </Button>
        </section>
      </main>

      <footer className="bg-rose-100 py-8 mt-32">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © 2024 Stepin. Transforming the rental experience, one step at a time.
        </div>
      </footer>
    </div>
  );
}
