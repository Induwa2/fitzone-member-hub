import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const posts = [
  { id: 1, title: "10 Best Compound Exercises for Total Body Strength", category: "Workout Routines", date: "Mar 5, 2026", excerpt: "Master these compound movements to build strength and muscle efficiently in every workout session." },
  { id: 2, title: "High-Protein Meal Prep Guide for Busy Professionals", category: "Healthy Recipes", date: "Mar 2, 2026", excerpt: "Simple, delicious meal prep ideas that keep your protein intake on track throughout the week." },
  { id: 3, title: "How Kasun Lost 20kg in 6 Months at FitZone", category: "Success Stories", date: "Feb 28, 2026", excerpt: "Read Kasun's inspiring transformation story and the training approach that changed his life." },
  { id: 4, title: "The Ultimate Beginner's Guide to Meal Planning", category: "Meal Plans", date: "Feb 25, 2026", excerpt: "Everything you need to know about creating a sustainable, healthy meal plan that works." },
  { id: 5, title: "5 Yoga Poses to Improve Flexibility Fast", category: "Workout Routines", date: "Feb 20, 2026", excerpt: "Unlock your flexibility potential with these proven yoga poses suitable for all levels." },
  { id: 6, title: "Why Group Fitness Classes Beat Solo Workouts", category: "Fitness Tips", date: "Feb 15, 2026", excerpt: "The science behind why training in a group can dramatically improve your results and consistency." },
];

const Blog = () => (
  <div className="pt-20">
    <section className="py-20 gradient-navy">
      <div className="container">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-2">Blog</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-heading font-bold text-navy-foreground">Fitness Insights & Tips</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-navy-foreground/70 text-lg max-w-xl">
          Expert articles on workouts, nutrition, and success stories.
        </motion.p>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.article key={post.id} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
            className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-glow transition-shadow group">
            <div className="gradient-primary h-40 flex items-center justify-center">
              <span className="text-primary-foreground/40 font-heading text-6xl font-bold">{post.id}</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{post.category}</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="h-3 w-3" />{post.date}</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
              <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  </div>
);

export default Blog;
