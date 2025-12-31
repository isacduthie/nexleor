import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Scale,
  Users,
  Target,
  CheckCircle2,
} from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "Engineering-First Mindset",
    description:
      "We think like engineers because we are engineers. Every recommendation is grounded in practical reality, not consulting frameworks.",
  },
  {
    icon: Scale,
    title: "Beyond Build-to-Print Thinking",
    description:
      "We bring deep design understanding and system-level insight—enabling teams to execute, adapt, and sustain products beyond documentation handover.",
  },
  {
    icon: Users,
    title: "Where Strategy Meets Engineering Reality",
    description:
      "We align executive intent with engineering truth—helping leaders make informed decisions and teams execute with clarity.",
  },
  {
    icon: Target,
    title: "Focus on Outcomes, Not Activity",
    description:
      "We measure success by problems solved, products shipped, and capabilities built.",
  },
];

const differentiators = [
  "Practitioners who have built what they advise on",
  "We go beyond recommendations—working closely with your teams through delivery",
  "Deep domain expertise in regulated industries",
  "Seamless integration with your teams",
  "Knowledge transfer built into every engagement",
  "Flexible engagement models that fit your needs",
  "Global delivery with local accountability",
  "Long-term relationships, not transaction-focused",
];

function WhyNexLeorHero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-subtle)]" />
      <div className="absolute inset-0 geometric-pattern opacity-30" />

      <div className="relative section-container">
        <div className="max-w-3xl">
          <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block">
            Why NexLeor
          </span>
          <h1 className="heading-display text-foreground mb-6">
            When It Has to Work
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            You're not looking for another vendor. You're looking for a 
            partner who understands what's at stake and delivers accordingly.
          </p>
        </div>
      </div>
    </section>
  );
}

function ReasonsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-card border border-border rounded-xl p-8 hover:border-accent/30 transition-colors"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="heading-subsection text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferentiatorsSection() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="heading-section text-foreground mb-6">
              What Makes Us Different
            </h2>
            <p className="text-body mb-8">
              In a world of generic consulting, we've made deliberate choices 
              about who we are and how we work. These aren't marketing 
              statements—they're the principles that guide every engagement.
            </p>
            <Link to="/about">
              <span className="text-accent font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Read Our Story <ArrowRight size={16} />
              </span>
            </Link>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <div className="grid gap-4">
              {differentiators.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function WhyNexLeorCTA() {
  return (
    <section className="section-padding bg-primary">
      <div className="section-container text-center">
        <h2 className="heading-section text-primary-foreground mb-6">
          Let's Solve Your Engineering Challenges
        </h2>
        <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-8">
          The best way to understand if we're the right fit is to have a 
          conversation. No pitch, no pressure—just honest dialogue.
        </p>
        <Link to="/contact">
          <Button variant="hero" size="xl">
            Schedule a Discovery Call
            <ArrowRight size={18} />
          </Button>
        </Link>
      </div>
    </section>
  );
}

const WhyNexLeor = () => {
  return (
    <Layout>
      <WhyNexLeorHero />
      <ReasonsSection />
      <DifferentiatorsSection />
      <WhyNexLeorCTA />
    </Layout>
  );
};

export default WhyNexLeor;
