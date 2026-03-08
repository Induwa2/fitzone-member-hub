import { motion } from "framer-motion";
import { Clock, User, Users as UsersIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5 } }),
};

const classes = [
  { name: "Morning Yoga", instructor: "Nimali W.", day: "Mon, Wed, Fri", time: "6:00 AM", slots: 15 },
  { name: "HIIT Blast", instructor: "Dinesh R.", day: "Tue, Thu", time: "7:00 AM", slots: 20 },
  { name: "Spin Cycle", instructor: "Kavinda J.", day: "Mon, Wed, Fri", time: "8:00 AM", slots: 18 },
  { name: "Strength Foundations", instructor: "Chathura S.", day: "Tue, Thu, Sat", time: "9:00 AM", slots: 12 },
  { name: "Dance Fitness", instructor: "Kavinda J.", day: "Mon, Wed", time: "5:00 PM", slots: 25 },
  { name: "Power Yoga", instructor: "Nimali W.", day: "Tue, Thu", time: "5:30 PM", slots: 15 },
  { name: "Boxing Cardio", instructor: "Dinesh R.", day: "Mon, Wed, Fri", time: "6:00 PM", slots: 16 },
  { name: "Advanced Lifting", instructor: "Ashan F.", day: "Tue, Thu, Sat", time: "6:30 PM", slots: 10 },
  { name: "Stretching & Recovery", instructor: "Sanduni P.", day: "Sat", time: "10:00 AM", slots: 20 },
];

const Classes = () => (
  <div className="pt-20">
    <section className="py-20 gradient-navy">
      <div className="container">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-2">Schedule</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-bold text-navy-foreground">Class Schedule</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-navy-foreground/70 text-lg max-w-xl">Find the perfect class for your schedule.</motion.p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container max-w-4xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-heading text-sm font-semibold text-foreground">Class</th>
                <th className="text-left py-4 px-4 font-heading text-sm font-semibold text-foreground">Instructor</th>
                <th className="text-left py-4 px-4 font-heading text-sm font-semibold text-foreground">Days</th>
                <th className="text-left py-4 px-4 font-heading text-sm font-semibold text-foreground">Time</th>
                <th className="text-left py-4 px-4 font-heading text-sm font-semibold text-foreground">Slots</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((c, i) => (
                <motion.tr key={c.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                  className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                  <td className="py-4 px-4 font-medium text-foreground">{c.name}</td>
                  <td className="py-4 px-4 text-muted-foreground flex items-center gap-1.5"><User className="h-3.5 w-3.5" />{c.instructor}</td>
                  <td className="py-4 px-4 text-muted-foreground">{c.day}</td>
                  <td className="py-4 px-4 text-muted-foreground flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{c.time}</td>
                  <td className="py-4 px-4"><span className="flex items-center gap-1.5 text-sm text-primary font-medium"><UsersIcon className="h-3.5 w-3.5" />{c.slots}</span></td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
);

export default Classes;
