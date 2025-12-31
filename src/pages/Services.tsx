import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Layers,
  Code,
  BarChart3,
  Factory,
} from "lucide-react";

const serviceCategories = [
  {
    id: "product-systems",
    icon: Layers,
    title: "Product & Systems Engineering",
    description:
      "End-to-end systems engineering from architecture through integration and verification.",
    services: [
      "System architecture & design",
      "Multidisciplinary systems integration",
      "Hardware–software integration",
      "Mechatronics systems integration",
      "Control systems & embedded platforms",
      "Technology know-how to execution",
    ],
  },
  {
    id: "embedded-software",
    icon: Code,
    title: "Embedded & Software Engineering",
    description:
      "Real-time, safety-critical software and firmware development across platforms.",
    services: [
      "Embedded system product design",
      "Firmware development",
      "Real-time and control systems",
      "Safety-critical software",
      "SIL / HIL / Model-based development",
      "Software architecture and design",
    ],
  },
  {
    id: "program-consulting",
    icon: BarChart3,
    title: "Program & Execution Consulting",
    description:
      "Program leadership and recovery for complex, multi-stakeholder development efforts.",
    services: [
      "Complex program setup and structure",
      "Program recovery and turnaround",
      "Risk, cost, and schedule management",
      "Multi-vendor coordination",
      "Technical program management",
      "Milestone and gate reviews",
    ],
  },
  {
    id: "industrialization",
    icon: Factory,
    title: "Technology and Product Transfer",
    description:
      "From Technology Mastery to Independent Execution. We enable seamless transition of new and legacy products across locations—going beyond build-to-print by transferring deep product understanding, design intent, and execution capability to sustain, operate, and evolve products without drag.",
    services: [
      "Current-state assessment and future-state alignment for scalable execution",
      "Technology mastery and design-intent transfer beyond documentation and drawings",
      "Design-level and working-level execution enablement for sustained autonomy",
      "AI-assisted risk, dependency, and transition governance",
      "Baseline stabilization across hardware, software, test, and tools",
      "Test assets, tooling, and infrastructure transfer",
    ],
  },
];

function ServicesHero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-subtle)]" />
      <div className="absolute inset-0 geometric-pattern opacity-30" />

      <div className="relative section-container">
        <div className="max-w-3xl">
          <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block">
            Our Services
          </span>
          <h1 className="heading-display text-foreground mb-6">
            Engineering Services That Deliver
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From system architecture to certification, from embedded firmware 
            to program recovery—we bring deep expertise where you need it most.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServiceCategory({
  category,
  index,
}: {
  category: (typeof serviceCategories)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={category.id}
      className={`section-padding ${isEven ? "bg-background" : "bg-muted/50"}`}
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={isEven ? "lg:order-1" : "lg:order-2"}>
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <category.icon className="w-7 h-7 text-accent" />
            </div>
            <h2 className="heading-section text-foreground mb-4">
              {category.title}
            </h2>
            <p className="text-body mb-8">{category.description}</p>
            <Link to="/contact">
              <Button variant="cta">
                Discuss Your Needs
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          <div className={isEven ? "lg:order-2" : "lg:order-1"}>
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="font-semibold text-foreground mb-6">
                What We Deliver
              </h3>
              <ul className="space-y-4">
                {category.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesCTA() {
  return (
    <section className="section-padding bg-primary">
      <div className="section-container text-center">
        <h2 className="heading-section text-primary-foreground mb-6">
          Not Sure Where to Start?
        </h2>
        <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-8">
          Tell us about your challenge. We'll help you identify the right 
          approach and scope.
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

const Services = () => {
  return (
    <Layout>
      <ServicesHero />
      {serviceCategories.map((category, index) => (
        <ServiceCategory key={category.id} category={category} index={index} />
      ))}
      <ServicesCTA />
    </Layout>
  );
};

export default Services;
