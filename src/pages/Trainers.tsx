import { motion } from "framer-motion";
import { Award, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const trainers = [
  { name: "Chathura Silva", specialization: "Strength & Conditioning", certifications: "NSCA-CSCS, ACE-CPT", experience: "8 years", packages: "LKR 5,000/session · LKR 35,000/8 sessions", initials: "CS" },
  { name: "Nimali Wijesinghe", specialization: "Yoga & Mindfulness", certifications: "RYT-500, Prenatal Yoga Cert", experience: "10 years", packages: "LKR 3,500/session · LKR 25,000/8 sessions", initials: "NW" },
  { name: "Dinesh Rajapaksa", specialization: "HIIT & Cardio", certifications: "ACE-CPT, TRX Certified", experience: "6 years", packages: "LKR 4,000/session · LKR 28,000/8 sessions", initials: "DR" },
  { name: "Sanduni Perera", specialization: "Nutrition & Weight Management", certifications: "PN Level 2, Dietetics Diploma", experience: "7 years", packages: "LKR 4,500/session · LKR 32,000/8 sessions", initials: "SP" },
  { name: "Ashan Fernando", specialization: "Bodybuilding & Physique", certifications: "ISSA-CPT, NASM-PES", experience: "12 years", packages: "LKR 6,000/session · LKR 42,000/8 sessions", initials: "AF" },
  { name: "Kavinda Jayasuriya", specialization: "Group Fitness & Dance", certifications: "Zumba Licensed, Les Mills", experience: "5 years", packages: "LKR 3,000/session · LKR 20,000/8 sessions", initials: "KJ" },
];

const Trainers = () => (
  <div className="pt-20">
    <section className="py-20 gradient-navy">
      <div className="container">
        <motion.div initial="hidden" animate="visible">
          <motion.span variants={fadeUp} custom={0} className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-2">Our Team</motion.span>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-heading font-bold text-navy-foreground">Personal Trainers</motion.h1>
          <motion.p variants={fadeUp} custom={2} className="mt-4 text-navy-foreground/70 text-lg max-w-xl">Expert certified trainers ready to guide your fitness journey.</motion.p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainers.map((t, i) => (
          <motion.div key={t.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
            className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-glow transition-shadow">
            <div className="gradient-primary h-32 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary-foreground/20 flex items-center justify-center text-2xl font-heading font-bold text-primary-foreground">
                {t.initials}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-bold text-card-foreground">{t.name}</h3>
              <span className="text-accent text-sm font-medium">{t.specialization}</span>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Award className="h-4 w-4 text-primary" />{t.certifications}</div>
                <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" />{t.experience} experience</div>
                <div className="flex items-start gap-2"><DollarSign className="h-4 w-4 text-primary mt-0.5" />{t.packages}</div>
              </div>
              <Button className="w-full mt-5 gradient-accent text-accent-foreground" asChild>
                <Link to="/contact">Book Session</Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Trainers;
