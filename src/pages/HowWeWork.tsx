import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  Compass,
  Hammer,
  TrendingUp,
  Users,
  Lightbulb,
  Handshake,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Understand the Problem Deeply",
    description:
      "We start by listening. We dig into your technical challenges, business constraints, organizational dynamics, and what success really looks like for your team.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Architect the Right Solution",
    description:
      "We design approaches that fit your reality—not theoretical ideals. We consider your existing systems, team capabilities, timelines, and regulatory context.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Execute with Your Teams",
    description:
      "We don't parachute in, hand off recommendations, and leave. We work alongside your engineers and program managers, contributing real work and transferring knowledge.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Build Lasting Capability",
    description:
      "Our goal isn't to create dependency. We strengthen your organization's ability to tackle similar challenges independently in the future.",
  },
];

const engagementModels = [
  {
    icon: Lightbulb,
    title: "Advisory & Fractional Leadership",
    description:
      "Part-time engineering leadership for organizations that need senior technical guidance without full-time overhead. Ideal for startups and growth-stage companies.",
    examples: [
      "Fractional CTO / VP Engineering",
      "Technical advisory board participation",
      "Architecture and strategy reviews",
    ],
  },
  {
    icon: Handshake,
    title: "Short-Term Problem Solving",
    description:
      "Focused engagements to solve specific technical or program challenges. We scope tightly, deliver quickly, and get out of your way.",
    examples: [
      "Program recovery and turnaround",
      "Technical due diligence",
      "Certification gap assessments",
    ],
  },
  {
    icon: Users,
    title: "Long-Term Partnerships",
    description:
      "Extended engagements where we become an extension of your team. Best for complex development programs or ongoing capability building.",
    examples: [
      "Multi-year development support",
      "Engineering center establishment",
      "Continuous improvement programs",
    ],
  },
];

function HowWeWorkHero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-subtle)]" />
      <div className="absolute inset-0 geometric-pattern opacity-30" />

      <div className="relative section-container">
        <div className="max-w-3xl">
          <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block">
            How We Work
          </span>
          <h1 className="heading-display text-foreground mb-6">
            Partnership, Not Prescription
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Every engagement is different. We adapt our approach to your 
            context—but our commitment to understanding, pragmatism, and 
            execution remains constant.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-4">
            Our Engagement Approach
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            A structured yet flexible process that ensures we deliver value 
            from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-card border border-border rounded-xl p-8 group hover:border-accent/30 transition-colors"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-8 px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                {step.number}
              </div>

              <div className="pt-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="heading-subsection text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngagementModelsSection() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-4">
            Engagement Models
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Choose the model that fits your needs—or let's design something 
            custom together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {engagementModels.map((model) => (
            <div
              key={model.title}
              className="bg-card border border-border rounded-xl p-8 flex flex-col"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <model.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {model.title}
              </h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                {model.description}
              </p>
              <div className="border-t border-border pt-6">
                <p className="text-sm font-medium text-foreground mb-3">
                  Examples:
                </p>
                <ul className="space-y-2">
                  {model.examples.map((example) => (
                    <li
                      key={example}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <div className="w-1 h-1 bg-accent rounded-full" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeWorkCTA() {
  return (
    <section className="section-padding bg-primary">
      <div className="section-container text-center">
        <h2 className="heading-section text-primary-foreground mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-8">
          The first step is a conversation. Tell us about your challenges, 
          and we'll explore how we might help.
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

const HowWeWork = () => {
  return (
    <Layout>
      <HowWeWorkHero />
      <ProcessSection />
      <EngagementModelsSection />
      <HowWeWorkCTA />
    </Layout>
  );
};

export default HowWeWork;
