import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Target, Shield } from "lucide-react";

const valuePillars = [
  {
    icon: Cpu,
    title: "Deep Engineering Expertise",
    description:
      "Decades of hands-on experience in complex systems engineering, from architecture to integration.",
  },
  {
    icon: Target,
    title: "End-to-End Product Realization",
    description:
      "We guide products from concept through certification to manufacturing and beyond.",
  },
  {
    icon: Shield,
    title: "Execution with Accountability",
    description:
      "We own outcomes, not just activities. Clear commitments, measurable results.",
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,60%,15%)] to-[hsl(220,55%,28%)]" />
      <div className="absolute inset-0 geometric-pattern opacity-10" />
      
      {/* Abstract geometric shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />

      <div className="relative section-container w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm mb-8">
            <span className="text-sm text-primary-foreground/80">
              Practitioner-Led Engineering Consulting
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="heading-display text-primary-foreground mb-6">
            Engineering What's Next.
            <br />
            <span className="text-accent">Engineered for Results.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-primary-foreground/70 leading-relaxed max-w-2xl mb-10">
            NexLeor is a high-tech engineering consulting firm that helps OEMs, 
            Tier-1 suppliers, and deep-tech startups build complex, regulated, 
            mission-critical systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Schedule a Discovery Call
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="hero-outline" size="xl">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ValuePillarsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-4">
            Why Clients Choose Us
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            We combine deep technical expertise with pragmatic execution to 
            deliver results that matter.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valuePillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="card-elevated p-8 group hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <pillar.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="heading-subsection text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-body-sm">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-section text-foreground mb-6">
            Ready to Solve Your Engineering Challenges?
          </h2>
          <p className="text-body mb-8">
            Let's discuss how NexLeor can help you navigate complexity, 
            accelerate execution, and deliver results.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Let's Talk
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
