import { motion } from "framer-motion";
import { Dumbbell, Heart, Users, Salad, Flame, PersonStanding } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const services = [
  { icon: Heart, title: "Cardio Training", desc: "High-energy cardio sessions designed to improve cardiovascular health, endurance, and fat loss.", benefits: ["Improved heart health", "Weight management", "Increased stamina"], duration: "45–60 min sessions" },
  { icon: Dumbbell, title: "Strength Training", desc: "Build lean muscle mass with progressive resistance training programs tailored to your level.", benefits: ["Muscle growth", "Bone density", "Metabolic boost"], duration: "60 min sessions" },
  { icon: PersonStanding, title: "Yoga Classes", desc: "Find balance and flexibility through guided yoga sessions for all experience levels.", benefits: ["Stress relief", "Flexibility", "Mind-body connection"], duration: "60 min sessions" },
  { icon: Users, title: "Group Classes", desc: "Fun, high-energy group workouts including HIIT, dance fitness, spinning, and more.", benefits: ["Social motivation", "Variety", "Fun atmosphere"], duration: "45 min sessions" },
  { icon: Salad, title: "Nutrition Counseling", desc: "Personalized dietary plans and nutritional guidance from certified nutritionists.", benefits: ["Custom meal plans", "Dietary advice", "Progress tracking"], duration: "30 min consultations" },
  { icon: Flame, title: "HIIT Training", desc: "Intense interval training to maximize calorie burn and build total body fitness.", benefits: ["Maximum fat burn", "Time efficient", "Full body workout"], duration: "30 min sessions" },
];

const Services = () => (
  <div className="pt-20">
    <section className="py-20 gradient-navy">
      <div className="container">
        <motion.div initial="hidden" animate="visible">
          <motion.span variants={fadeUp} custom={0} className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-2">What We Offer</motion.span>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-bold text-navy-foreground">Our Services</motion.h1>
          <motion.p variants={fadeUp} custom={2} className="mt-4 text-navy-foreground/70 text-lg max-w-xl">Comprehensive fitness solutions to help you achieve any goal.</motion.p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
            className="bg-card rounded-xl p-8 border border-border hover:shadow-glow transition-shadow group">
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <s.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-xl font-bold text-card-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
            <div className="mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">Benefits</span>
              <ul className="mt-2 space-y-1">
                {s.benefits.map((b) => (
                  <li key={b} className="text-sm text-muted-foreground">• {b}</li>
                ))}
              </ul>
            </div>
            <div className="text-xs font-medium text-primary bg-primary/10 inline-block px-3 py-1 rounded-full">{s.duration}</div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Services;
