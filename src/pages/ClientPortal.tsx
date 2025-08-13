import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Lock, User, Mail, Eye, EyeOff, Shield, ArrowRight } from "lucide-react";
import { useState } from "react";

const ClientPortal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const features = [
    {
      title: "Real-time Health Dashboard",
      description: "Track your biomarkers, genetic insights, and progress metrics in one comprehensive view."
    },
    {
      title: "Personalized Protocol Access",
      description: "View your custom nutrition, supplement, and lifestyle protocols based on your unique genetic profile."
    },
    {
      title: "Digital Twin Monitoring",
      description: "See your digital health twin update in real-time as new data becomes available."
    },
    {
      title: "Expert Consultations",
      description: "Schedule and join video calls with your dedicated wellness team directly through the portal."
    },
    {
      title: "Progress Tracking",
      description: "Visualize your transformation journey with detailed charts and milestone achievements."
    },
    {
      title: "Resource Library",
      description: "Access exclusive content, guides, and educational materials tailored to your wellness journey."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left Content */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="h-12 w-12 text-primary" />
                  <h1 className="text-5xl md:text-6xl font-serif font-bold">
                    Client <span className="gradient-text">Portal</span>
                  </h1>
                </div>
                <p className="text-xl text-muted-foreground mb-8">
                  Access your personalized wellness dashboard, track your progress, 
                  and stay connected with your optimization journey.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Secure, encrypted access to your health data</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Real-time biomarker tracking and insights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Direct communication with your wellness team</span>
                  </div>
                </div>
              </div>

              {/* Login Form */}
              <div className="glass-card">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-serif font-bold mb-2">
                    {isLogin ? "Welcome Back" : "Create Account"}
                  </h2>
                  <p className="text-muted-foreground">
                    {isLogin 
                      ? "Sign in to access your wellness dashboard" 
                      : "Join the Mendiv community today"
                    }
                  </p>
                </div>

                <form className="space-y-6">
                  {!isLogin && (
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <input
                          type="text"
                          className="w-full pl-10 pr-4 py-3 bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <input
                        type="email"
                        className="w-full pl-10 pr-4 py-3 bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <input
                        type={showPassword ? "text" : "password"}
                        className="w-full pl-10 pr-12 py-3 bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  {!isLogin && (
                    <div>
                      <label className="block text-sm font-medium mb-2">Confirm Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <input
                          type="password"
                          className="w-full pl-10 pr-4 py-3 bg-muted/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Confirm your password"
                        />
                      </div>
                    </div>
                  )}

                  {isLogin && (
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-white/20" />
                        <span className="text-muted-foreground">Remember me</span>
                      </label>
                      <a href="#" className="text-primary hover:underline">
                        Forgot password?
                      </a>
                    </div>
                  )}

                  <Button size="lg" className="w-full animate-glow">
                    {isLogin ? (
                      <>
                        Sign In
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </Button>
                </form>

                <div className="text-center mt-6">
                  <p className="text-muted-foreground text-sm">
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-primary hover:underline font-medium"
                    >
                      {isLogin ? "Sign up" : "Sign in"}
                    </button>
                  </p>
                </div>

                {/* Security Notice */}
                <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Secure & Private</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Your data is encrypted and protected with enterprise-grade security. 
                    We never share your personal health information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center mb-16">
              Your Personal Wellness <span className="gradient-text">Command Center</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="glass-card hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-serif font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="glass-card max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-6">
                See the Portal in Action
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Experience how our client portal transforms your wellness journey with 
                personalized insights and seamless health tracking.
              </p>
              
              <div className="relative bg-muted/20 rounded-xl p-8 mb-8">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl">▶️</span>
                    </div>
                    <p className="text-lg font-medium">Interactive Demo Video</p>
                    <p className="text-sm text-muted-foreground">3 minutes overview</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Watch Demo
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Personal Tour
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-6 text-center">
            <div className="glass-card max-w-3xl mx-auto">
              <h2 className="text-2xl font-serif font-bold mb-4">
                Need Help Accessing Your Account?
              </h2>
              <p className="text-muted-foreground mb-6">
                Our support team is ready to help you with any login issues, 
                password resets, or portal navigation questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline">
                  Contact Support
                </Button>
                <Button size="lg" variant="outline">
                  Reset Password
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ClientPortal;