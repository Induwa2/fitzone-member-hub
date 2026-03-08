import { Link } from "react-router-dom";
import { Dumbbell, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="gradient-navy text-navy-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <Dumbbell className="h-7 w-7 text-accent" />
            <span className="font-heading text-xl font-bold">FitZone</span>
          </Link>
          <p className="text-navy-foreground/70 text-sm leading-relaxed">
            Your premier fitness destination in Kurunegala. Transform your body and mind with our world-class facilities and expert trainers.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["About", "Services", "Trainers", "Membership", "Classes", "Blog"].map((l) => (
              <li key={l}>
                <Link to={`/${l.toLowerCase()}`} className="text-navy-foreground/70 hover:text-accent transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent mb-4">Hours</h4>
          <ul className="space-y-2 text-sm text-navy-foreground/70">
            <li>Mon – Fri: 5:00 AM – 10:00 PM</li>
            <li>Saturday: 6:00 AM – 8:00 PM</li>
            <li>Sunday: 7:00 AM – 6:00 PM</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-accent mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-navy-foreground/70">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" /> 123 Colombo Rd, Kurunegala, Sri Lanka</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +94 37 222 3456</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> info@fitzone.lk</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10 mt-12 pt-6 text-center text-sm text-navy-foreground/50">
        © 2026 FitZone Fitness Center. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
