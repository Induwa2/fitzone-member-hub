import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import aboutImg from "@/assets/about-gym.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const stats = [
  { value: "5,000+", label: "Active Members" },
  { value: "25+", label: "Expert Trainers" },
  { value: "50+", label: "Weekly Classes" },
  { value: "10+", label: "Years Experience" },
];

const About = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="relative py-20 gradient-navy">
      <div className="container">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl">
          <motion.span variants={fadeUp} custom={0} className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-2">About Us</motion.span>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-bold text-navy-foreground">About FitZone Fitness Center</motion.h1>
          <motion.p variants={fadeUp} custom={2} className="mt-4 text-navy-foreground/70 text-lg">
            Since 2015, FitZone has been Kurunegala's premier fitness destination, helping thousands transform their lives through fitness.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Image + Story */}
    <section className="py-20 bg-background">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.img initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          src={aboutImg} alt="FitZone Facilities" className="rounded-2xl shadow-lg w-full object-cover aspect-video" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl font-heading font-bold text-foreground mb-4">Our Story</motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground mb-4">
            FitZone Fitness Center was founded with a simple belief: fitness should be accessible, enjoyable, and transformative for everyone. Located in the heart of Kurunegala, we've grown from a small gym into one of the region's most respected fitness communities.
          </motion.p>
          <motion.p variants={fadeUp} custom={2} className="text-muted-foreground">
            Our state-of-the-art facility features the latest cardio and strength training equipment, dedicated group class studios, a recovery zone with sauna, and a nutrition bar — all designed to support your complete wellness journey.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* Mission / Vision */}
    <section className="py-20 bg-muted">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          { icon: Target, title: "Our Mission", text: "To empower every individual in Kurunegala to achieve their fitness goals through expert guidance, cutting-edge facilities, and an inclusive community." },
          { icon: Eye, title: "Our Vision", text: "To become Sri Lanka's most trusted and innovative fitness brand, inspiring healthier lifestyles across the nation." },
        ].map((item, i) => (
          <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
            className="bg-card rounded-xl p-8 border border-border">
            <item.icon className="h-10 w-10 text-accent mb-4" />
            <h3 className="font-heading text-xl font-bold text-card-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 gradient-primary">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
            <div className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">{s.value}</div>
            <div className="text-primary-foreground/70 text-sm mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
