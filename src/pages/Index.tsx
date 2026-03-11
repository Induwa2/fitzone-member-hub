import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dumbbell, Heart, Users, Salad, ArrowRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-gym.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const services = [
  { icon: Dumbbell, title: "Strength Training", desc: "Build muscle and power with our state-of-the-art equipment and expert guidance." },
  { icon: Heart, title: "Cardio Programs", desc: "Boost endurance and burn calories with dynamic cardio sessions." },
  { icon: Users, title: "Group Classes", desc: "Stay motivated with energetic yoga, HIIT, and dance fitness classes." },
  { icon: Salad, title: "Nutrition Counseling", desc: "Personalized meal plans and dietary advice from certified nutritionists." },
];

const plans = [
  { name: "Basic", price: "3,500", features: ["Gym Access", "Locker Room", "1 Group Class/week"] },
  { name: "Premium", price: "6,500", features: ["All Basic Benefits", "Unlimited Classes", "Personal Trainer (2x/mo)", "Nutrition Plan"], popular: true },
  { name: "VIP", price: "12,000", features: ["All Premium Benefits", "Unlimited PT Sessions", "Sauna & Spa", "Priority Booking"] },
];

const testimonials = [
  { name: "Kasun Perera", text: "FitZone completely transformed my fitness journey. The trainers are exceptional!", rating: 5 },
  { name: "Dilani Fernando", text: "The group classes are so fun and energizing. I've never felt more motivated!", rating: 5 },
  { name: "Ravi Jayawardena", text: "Best gym in Kurunegala! Modern equipment and a welcoming community.", rating: 5 },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="FitZone Gym" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-navy opacity-80" />
      </div>
      <div className="container relative z-10 pt-20">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl">
          <motion.span variants={fadeUp} custom={0} className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">
            FitZone Fitness Center — Kurunegala
          </motion.span>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight">
            Unleash Your <span className="text-gradient-primary">Full Potential</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="mt-6 text-lg text-navy-foreground/80 max-w-lg">
            Transform your body and mind with world-class facilities, expert trainers, and a supportive community in the heart of Kurunegala.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="gradient-accent text-accent-foreground font-semibold text-base px-8" asChild>
              <Link to="/membership">Join Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="border-navy-foreground/30 text-navy-accent hover:bg-navy-foreground/10 text-base px-8" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 bg-background">
      <div className="container">
        <SectionHeading label="What We Offer" title="Our Core Services" description="Everything you need to achieve your fitness goals under one roof." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-glow transition-shadow group">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Membership Plans */}
    <section className="py-20 gradient-navy">
      <div className="container">
        <SectionHeading label="Pricing" title="Membership Plans" description="Flexible plans to match every fitness goal and budget." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className={`rounded-2xl p-8 border ${plan.popular ? "border-accent bg-accent/5 shadow-glow" : "border-navy-foreground/10 bg-navy-foreground/5"}`}>
              {plan.popular && <span className="inline-block text-xs font-bold uppercase tracking-wider text-accent mb-2">Most Popular</span>}
              <h3 className="font-heading text-2xl font-bold text-navy-foreground">{plan.name}</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-heading font-bold text-navy-foreground">LKR {plan.price}</span>
                <span className="text-navy-foreground/60 text-sm">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-navy-foreground/80">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Button className={`w-full ${plan.popular ? "gradient-accent text-accent-foreground" : "bg-primary text-primary-foreground"}`} asChild>
                <Link to="/membership">Get Started</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-background">
      <div className="container">
        <SectionHeading label="Testimonials" title="What Our Members Say" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
              className="bg-card rounded-xl p-6 border border-border">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-4">"{t.text}"</p>
              <p className="font-heading font-semibold text-card-foreground">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 gradient-primary">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">Ready to Start Your Fitness Journey?</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">Join FitZone today and get your first week free. No commitment required.</p>
        <Button size="lg" className="gradient-accent text-accent-foreground font-semibold text-base px-10" asChild>
          <Link to="/membership">Join Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </Button>
      </div>
    </section>
  </div>
);

export default Index;
