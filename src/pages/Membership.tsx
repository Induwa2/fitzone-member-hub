import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const plans = [
  { name: "Basic Plan", price: "3,500", period: "month", features: ["Full Gym Access", "Locker Room & Showers", "1 Group Class per Week", "Fitness Assessment", "Email Support"] },
  { name: "Premium Plan", price: "6,500", period: "month", popular: true, features: ["All Basic Benefits", "Unlimited Group Classes", "2 PT Sessions per Month", "Nutrition Plan", "Access to Sauna", "Priority Support"] },
  { name: "VIP Plan", price: "12,000", period: "month", features: ["All Premium Benefits", "Unlimited PT Sessions", "Sauna & Spa Access", "Priority Class Booking", "Guest Passes (2/mo)", "24/7 Gym Access", "Dedicated Account Manager"] },
];

const Membership = () => (
  <div className="pt-20">
    <section className="py-20 gradient-navy">
      <div className="container text-center">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-2">Pricing</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-bold text-navy-foreground">Membership Plans</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-navy-foreground/70 text-lg max-w-xl mx-auto">
          Choose the plan that fits your lifestyle. All plans include free onboarding.
        </motion.p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div key={plan.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
            className={`rounded-2xl p-8 border ${plan.popular ? "border-accent shadow-glow bg-accent/5 relative" : "border-border bg-card"}`}>
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold uppercase px-4 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="font-heading text-2xl font-bold text-card-foreground">{plan.name}</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-heading font-bold text-foreground">LKR {plan.price}</span>
              <span className="text-muted-foreground text-sm">/{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Button className={`w-full ${plan.popular ? "gradient-accent text-accent-foreground" : "bg-primary text-primary-foreground"}`} asChild>
              <Link to="/contact">Sign Up <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Membership;
